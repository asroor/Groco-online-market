const express = require('express');
const app = express();
require('dotenv').config();
const { engine } = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 8080

// Handlebars 
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views')
// Static file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('home', {
		title: "Home page",
		URL: process.env.URL
	})
});
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About page',
		URL: process.env.URL
	})
});
app.get('/blog', (req, res) => {
	res.render('blog', {
		title: 'Blog page',
		URL: process.env.URL
	})
})

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server ${PORT}`)
});