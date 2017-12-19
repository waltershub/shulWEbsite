const { config } = require('../../config/config');
const AWS = require('aws-sdk');

// const s3 = new AWS.S3();
// AWS.config.update({ accessKeyId: config.aws.accessKeyId, secretAccessKey: config.aws.secretAccessKey, region: config.aws.region });

exports.updateConfig = () => {
  AWS.config.update({ accessKeyId: config.aws.accessKeyId, secretAccessKey: config.aws.secretAccessKey, region: config.aws.region });
};

exports.generateSignedUrl = (shuirName, callback) => {
  console.log(config.aws);
  console.log('shurname here!!!!!!!!!!!!!', shuirName);

  //  AWS.config.update(config.aws);
  const s3 = new AWS.S3();
  AWS.config.update({ accessKeyId: config.aws.accessKeyId, secretAccessKey: config.aws.secretAccessKey, region: config.aws.region });

  // console.log('config AWS', AWS.config);
  const params = {
    Bucket: 'shuirim',
    Key: `shuirim/${shuirName}.wav`,
    Expires: 60 * 5,
  };

  s3.getSignedUrl('getObject', params, (err, url) => {
    if (err) console.log('aws signed url error', err);
    callback(url);
  });
};
