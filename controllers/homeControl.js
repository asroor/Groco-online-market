
// Home page
const homePage = (req, res) => {
    res.render('home', {
        title: "Home page",
        URL: process.env.URL
    })
};

module.exports = {
    homePage
}