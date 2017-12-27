const db = require('../../db');
const axios = require('axios');
const fs = require('fs');
const moment = require('moment');
const schedule = require('./schedule-utilties');
const { generateSignedUrl, updateConfig } = require('./signed-url.js');

updateConfig();
exports.shuirim = (req, res) => {
  db.Shuirim.scan('SharHashamayim')
    .where('shul').beginsWith('SharHashamayim')
    .loadAll()
    .exec((err, data) => {
      res.send(data);
    });
};

exports.zmanim = (req, res) => {
  axios.get('https://wyrezmanim.herokuapp.com/api?&timezone=America/New_York&latitude=40.6782&longitude=-73.9442&mode=basic&timeformat=H:mm:ss')
    .then((response) => {
      const date = moment().format('YYYY-MM-DD');
      const fixedZamnim = Object.keys(response.data).map((key, i) => {
        if (i !== 0) {
          const time = schedule.generatTime(`${date} ${response.data[key]} `);
          return [key, time];
        }
        return [key, response.data[key]];
      });
      res.send(fixedZamnim);
    });
};

exports.shulSchedule = (req, res) => {
  const date = schedule.getThisFriday();
  console.log('date', date);
  axios.get(`https://wyrezmanim.herokuapp.com/api?timezone=America/New_York&latitude=40&longitude=-73&date=${date.replace(/'-'/g, '/')}&timeformat=H:mm:ss&elevation=50&mode=basic`)
    .then((response) => {
      const shulSchedule = schedule.generateShulSchedule(date, response.data.Shkia);
      res.send(shulSchedule);
    });
};

exports.signedUrl = (req, res) => {
  console.log('controllers', req.body);
  generateSignedUrl(req.body.shuir, (url) => {
    res.send(url);
  });
};

exports.events = (req, res) => {
  console.log('events');
  db.Events.scan('SharHashamayim')
    .where('shul').beginsWith('SharHashamayim')
    .loadAll()
    .exec((err, data) => {
      const today = moment();
      console.log(data);
      res.send(data.Items.filter(date => !today.isSameOrAfter(date.date)));
    });
};
exports.simchas = (req, res) => {
  db.Simchas.scan('SharHashamayim')
    .where('shul').beginsWith('SharHashamayim')
    .loadAll()
    .exec((err, data) => {
      const today = moment();

      res.send(data.Items.filter(date => !today.isSameOrAfter(date.date)) || []);
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
