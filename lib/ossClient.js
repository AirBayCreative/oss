/*!
 * oss - node.js sdk 
 * oss client
 * Copyright(c) 2012 fantaysni <fantasyni@163.com>
 * MIT Licensed
 */

var oss = require('./oss.js').index;

/*
* bucket operations
*/

ossClient.prototype.list_bucket = function(options,callback){
	options['method'] = "GET";
	options['bucket'] = '';

	oss.authRequest(options,callback);
}

exports.index = ossClient;