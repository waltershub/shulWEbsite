const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

const path = require('path');


router.get('/shuirim', controllers.shuirim);

router.get('/zmanim', controllers.zmanim);

router.get('/shulSchedule', controllers.shulSchedule);

router.get('/shulImages', controllers.shulImages);

router.post('/signedUrl', controllers.signedUrl);

router.get('/events', controllers.events);

router.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/../../react-client/dist/index.html')));

module.exports = router;
