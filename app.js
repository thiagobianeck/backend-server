const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

/* Body Parser */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appRoutes = require('./routes/app');
const usuarioRoutes = require('./routes/usuario');
const loginRoutes = require('./routes/login');

mongoose.connect('mongodb://localhost:27017/hospitalDB', {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
  if(err) throw err;
  console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});


app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

app.listen(3000, () => {
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
