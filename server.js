//process.env.NODE_ENV = 'production';

var options = require('./config');
var apps = [
  require('./apps/textarea')
];

require('derby-example-server')(options, apps);