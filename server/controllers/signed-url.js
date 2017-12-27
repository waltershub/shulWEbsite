// const { config } = require('../../config/config');
const AWS = require('aws-sdk');

// const s3 = new AWS.S3();
// AWS.config.update({ accessKeyId: config.aws.accessKeyId, secretAccessKey: config.aws.secretAccessKey, region: config.aws.region });

exports.updateConfig = () => {
  // AWS.config.update({ accessKeyId: config.aws.accessKeyId, secretAccessKey: config.aws.secretAccessKey, region: config.aws.region });
  AWS.config.update(process.env.aws || config.aws);
};

exports.generateSignedUrl = (shuirName, callback) => {
  //  AWS.config.update(config.aws);
  const s3 = new AWS.S3();
  // AWS.config.update({ accessKeyId: config.aws.accessKeyId, secretAccessKey: config.aws.secretAccessKey, region: config.aws.region });
  AWS.config.update(process.env.aws || config.aws);
  // console.log('config AWS', AWS.config);
  const params = {
    Bucket: 'shuirim',
    Key: `shuirim/SharHashamayim/${shuirName}.wav`,
    Expires: 60 * 25,
  };

  s3.getSignedUrl('getObject', params, (err, url) => {
    if (err) console.log('aws signed url error', err);
    callback(url);
  });
};
