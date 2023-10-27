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
    })
}

module.exports = { shopPage, addShopPage };