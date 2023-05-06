var express = require('express');
var path = require('path');
const PORT = process.env.PORT || 3000;

var indexRouter = require('./src/routes');

var app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB', err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
})
module.exports = app;
