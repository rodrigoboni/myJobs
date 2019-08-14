/**
 * Module dependencies.
 */
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var jobs = require('./routes/jobs');
var employers = require('./routes/employers');

/**
 * Initialization
 */
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routes
 */
app.use('/', index);
app.use('/jobs', jobs);
app.use('/employers', employers);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({ message: 'Not found' });
});

module.exports = app;
