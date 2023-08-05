var trans_choice = require('./trans_choice.js').index();
var config = require('./config.js').config();
var trans = require('./trans.js').index();

global.trans_config = config;
global.trans = trans;
global.trans_choice = trans_choice