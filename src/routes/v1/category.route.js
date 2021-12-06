/* eslint-disable prettier/prettier */
const express = require('express');
const validate = require('../../middlewares/validate');
const categoryController = require('../../controllers/category.controller');
const categoryValidation = require('../../validations/category.validation');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/:categoryId', validate(categoryValidation.getCategory), categoryController.getCategory);
router.get('/', validate(categoryValidation.getCategories), categoryController.getCategories);
router.post('/create', validate(categoryValidation.createCategory), categoryController.createCategory);
router.put(auth('/update'), validate(categoryValidation.updateCategory), categoryController.updateCategory);
router.delete(auth('/delete'), validate(categoryValidation.deleteCategory), categoryController.deleteCategory);

module.exports = router;