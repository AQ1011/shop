/* eslint-disable prettier/prettier */
const express = require('express');
const orderController = require('../../controllers/order.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/user-orders', orderController.getOrdersByUser);
router.get('/', orderController.getOrders);
router.post('/create', orderController.createOrder);
router.put(auth('/update'), orderController.updateOrder);
router.delete(auth('/delete'), orderController.deleteOrder);
router.get('/:orderId', orderController.getOrder);

module.exports = router;