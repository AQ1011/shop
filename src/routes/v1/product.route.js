/* eslint-disable prettier/prettier */
const express = require('express');
const validate = require('../../middlewares/validate');
const productController = require('../../controllers/product.controller');
const productValidation = require('../../validations/product.validation');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/:productId', validate(productValidation.getProduct), productController.getProduct);
router.get('/', validate(productValidation.getProducts), productController.getProducts);
router.post('/create', validate(productValidation.createProduct), productController.createProduct);
router.put(auth('/update'), validate(productValidation.updateProduct), productController.updateProduct);
router.delete('/delete/:productId', validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;