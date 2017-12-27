const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/routers');

const app = express();
const path = require('path');

// app.use(express.static(`${__dirname}/../react-client/dist`));

app.use(express.static(`${__dirname}/../react-client/dist`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('listening on port 8080!');
});
