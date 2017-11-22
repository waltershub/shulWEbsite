const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.get('/shuirim', controllers.shuirim);

router.get('/zmanim', controllers.zmanim);

router.get('/shulImages', controllers.shulImages);
module.exports = router;
