const { Router } = require('express');
const router = Router();
const { shopPage, addShopPage } = require('../controllers/shopControl');

router.get('/shop', shopPage);
router.get('/shop/add', addShopPage);

module.exports = router