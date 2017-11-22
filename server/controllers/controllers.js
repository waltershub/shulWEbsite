const db = require('../../db');
const axios = require('axios');
const fs = require('fs');


exports.shuirim = (req, res) => {
  db.Shuirim.scan()
    .loadAll()
    .exec((err, data) => {
      console.log(data);
      res.send(data);
    });
};

exports.zmanim = (req, res) => {
  axios.get('https://wyrezmanim.herokuapp.com/api?&timezone=America/New_York&latitude=40.6782&longitude=-73.9442&mode=basic')
    .then((response) => {
      res.send(Object.keys(response.data).map(key => ([key, response.data[key]])));
    });
};

exports.shulImages = (req, res) => {
  console.log('here');
  const folder = '../images';
  fs.readdir(folder, (err, files) => {
    if (err) console.log(err);
    console.log(files);
    res.send(files);
  });
};
