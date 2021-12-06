/* eslint-disable prettier/prettier */
const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createProduct = async (productBody) => {
  return Product.create(productBody);
};


const queryProducts = async (filter, options) => {
  try {
    const products = await Product.find({}).populate('category','name');
    return products;
  } catch(error) {
    console.log('1' + error)
    return error;
  }
};


const getProductById = async (id) => {
  return Product.findById(id);
};


const updateProductById = async (productId, updateBody) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};


const deleteProductById = async (productId) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  createProduct,
  queryProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
