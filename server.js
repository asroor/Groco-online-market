const express = require('express');
const app = express();
require('dotenv').config();
const { engine } = require('express-handlebars');
const path = require('path');
const homeRoute = require('./routers/homeRouter');
const shopRoute = require('./routers/shopRouter');
const PORT = process.env.PORT || 8080;

// Handlebars 
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views')
// Static file
app.use(express.static(path.join(__dirname, 'public')));


// Pages initialization
app.use(homeRoute);
// Shop page
app.use(shopRoute);
// About page
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About page',
		URL: process.env.URL
	})
});

// Review page
app.get('/review', (req, res) => {
	res.render('review', {
		title: "Review page",
		URL: process.env.URL
	})
});

// Blog page
app.get('/blog', (req, res) => {
	res.render('blog', {
		title: 'Blog page',
		URL: process.env.URL
	})
});

// Contact page 
app.get('/contact', (req, res) => {
	res.render('contact', {
		title: "Contact page",
		URL: process.env.URL
	})
})
app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server ${PORT}`)
});