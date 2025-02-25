const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const IsAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart',IsAuth, shopController.getCart);

router.post('/cart',IsAuth ,shopController.postCart);

router.post('/cart-delete-item',IsAuth,shopController.postCartDeleteProduct);

router.post('/create-order', IsAuth,shopController.postOrder);

router.get('/orders', IsAuth,shopController.getOrders);

module.exports = router;
