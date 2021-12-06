/* eslint-disable prettier/prettier */
const httpStatus = require('http-status');
const { OK } = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');
const jwt = require('jsonwebtoken');

const createOrder = catchAsync(async (req, res) => {
  const Order = await orderService.createOrder(req.body);
  res.status(httpStatus.CREATED).send(Order);
});

const getOrders = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['userId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await orderService.queryOrders(filter, options);
  res.send({
        message: 'OK',
        data: result
    });
});

const getOrdersByUser = catchAsync(async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const jwtDecoded = jwt.decode(token);
  console.log(jwtDecoded);
  const filter = pick(req.query, ['userId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await orderService.queryOrders(filter, options);
  res.send({
        message: 'OK',
        data: result
    });
})

const getOrder = catchAsync(async (req, res) => {
  const Order = await orderService.getOrderById(req.params.OrderId);
  if (!Order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  res.send({
      message: 'OK',
      data: Order
    });
});

const updateOrder = catchAsync(async (req, res) => {
  const user = await orderService.updateOrderById(req.params.OrderId, req.body);
  res.send(user);
});

const deleteOrder = catchAsync(async (req, res) => {
  await orderService.deleteOrderById(req.params.OrderId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUser
};
