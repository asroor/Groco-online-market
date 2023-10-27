const { getAllPosts, addPost } = require('../db/poster')
// public page
const shopPage = (req, res) => {
    res.render('./shop/shop', {
        title: 'Shop page',
        URL: process.env.URL
    });
};

// private page
const addShopPage = (req, res) => {
    res.render('./shop/add-shop', {
        title: 'Add shop page',
        URL: process.env.URL
    });

};

const addShop = async (req, res) => {
    // const shop = {
    //     title: req.body.title,
    //     price: req.body.price,
    //     main_img: req.files['main_img'][0].filename,
    //     card_img: req.files['card_img'][0].filename,
    // };
    // await addPost(shop);
    console.log(req.body);
    res.redirect('/shop/add');
}

module.exports = { shopPage, addShopPage, addShop };