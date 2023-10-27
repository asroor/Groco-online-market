const { Router } = require('express');
const router = Router();
const { shopPage, addShopPage, addShop } = require('../controllers/shopControl');

router.get('/shop', shopPage);
router.get('/shop/add', addShopPage);
router.post('/shop/add', addShop);

module.exports = router