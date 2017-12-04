const db = require('../../db');
const axios = require('axios');
const fs = require('fs');
const moment = require('moment');
const schedule = require('./schedule-utilties');


exports.shuirim = (req, res) => {
  db.Shuirim.scan()
    .loadAll()
    .exec((err, data) => {
      res.send(data);
    });
};

exports.zmanim = (req, res) => {
  axios.get('https://wyrezmanim.herokuapp.com/api?&timezone=America/New_York&latitude=40.6782&longitude=-73.9442&mode=basic&timeformat=24')
    .then((response) => {
      const date = moment().format('YYYY-MM-DD');
      const fixedZamnim = Object.keys(response.data).map((key, i) => {
        if (i !== 0) {
          const time = schedule.generatTime(`${date} ${response.data[key].slice(0, response.data[key].length - 3)} `);
          return [key, time];
        }
        return [key, response.data[key]];
      });
      res.send(fixedZamnim);
    });
};

exports.shulSchedule = (req, res) => {
  const date = schedule.getThisFriday();
  axios.get(`https://wyrezmanim.herokuapp.com/api?timezone=America/New_York&latitude=40&longitude=-73&date=${date.replace(/'-'/g, '/')}&timeformat=24&elevation=50&mode=basic`)
    .then((response) => {
      const shulSchedule = schedule.generateShulSchedule(date, response.data.Shkia.slice(0, 9));
      res.send(shulSchedule);
    });
};
exports.shulImages = (req, res) => {
  const folder = '../images';
  fs.readdir(folder, (err, files) => {
    if (err) console.log(err);
    console.log(files);
    res.send(files);
  });
};
