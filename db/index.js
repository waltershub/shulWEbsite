const dynamo = require('dynamodb');
const Joi = require('joi');
const {config} = require('../config/config');
var s3 = require('s3');

dynamo.AWS.config.update(config.aws);

var Shuirim = dynamo.define('Shuirim', {
  hashKey : 'title',
  schema : {
    title   : Joi.string(),
    url : Joi.string(),
  }
});

dynamo.createTables(function(err) {
  if (err) {
    console.log('Error creating tables: ', err);
  } else {
    console.log('Tables has been created');
  }
});



var client = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: config.aws,
});




exports.Shuirim = Shuirim;
exports.Bucket = client;
