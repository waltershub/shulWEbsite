const dynamo = require('dynamodb');
const Joi = require('joi');
// const { config } = require('../config/config');
const s3 = require('s3');


dynamo.AWS.config.update({ accessKeyId: process.env.accessKeyId, secretAccessKey: process.env.secretAccessKey, region: process.env.region });

const Shuirim = dynamo.define('Shuirim', {
  hashKey: 'uniqId',
  rangeKey: 'shul',
  schema: {
    shul: Joi.string(),
    title: Joi.string(),
    url: Joi.string(),
    uniqId: dynamo.types.uuid(),
  },
});

const Events = dynamo.define('Event', {
  hashKey: 'uniqId',
  rangeKey: 'shul',
  schema: {
    shul: Joi.string(),
    event: Joi.string(),
    location: Joi.string(),
    time: Joi.string(),
    date: Joi.string(),
    uniqId: dynamo.types.uuid(),
  },
});

const Simchas = dynamo.define('Simcah', {
  hashKey: 'uniqId',
  rangeKey: 'shul',
  schema: {
    shul: Joi.string(),
    event: Joi.string(),
    location: Joi.string(),
    time: Joi.string(),
    date: Joi.string(),
    uniqId: dynamo.types.uuid(),
  },
});

dynamo.createTables((err) => {
  if (err) {
    console.log('Error creating tables: ', err);
  } else {
    console.log('Tables has been created');
  }
});


const client = s3.createClient({
  maxAsyncS3: 20, // this is the default
  s3RetryCount: 3, // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: config.aws,
});


exports.Shuirim = Shuirim;
exports.Events = Events;
exports.Simchas = Simchas;
exports.Bucket = client;
