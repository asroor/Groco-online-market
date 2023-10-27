const { homePage } = require('../controllers/homeControl');
const { Router } = require('express');
const router = Router();

router.get('/', homePage);

module.exports = router;