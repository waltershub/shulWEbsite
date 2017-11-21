const db = require('../../db');
const axios = require('axios');

exports.shuirim = (req, res) => {
  db.Shuirim.scan()
    .loadAll()
    .exec((err, data) => {
      res.send(data);
    });
};

exports.zmanim = (req, res) => {
  axios.get('https://wyrezmanim.herokuapp.com/api?&timezone=America/New_York&latitude=40.6782&longitude=-73.9442')
    .then((response) => {
      res.send(Object.keys(response.data).map(key => ([key, response.data[key]])));
    });
};
