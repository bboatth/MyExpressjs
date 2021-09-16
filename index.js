const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const restaurantsRouter = require('./routes/restaurants.js');
const logger = require('./middleware/logger');
const app = express();
const indexRouter = require('./routes');

//Template engine
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Custom Middleware
app.use(logger);

// Rountes
app.use('/apis/restaurants', restaurantsRouter);
app.use('/', indexRouter);

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
