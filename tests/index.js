/*!
 * oss - node.js sdk 
 * oss test
 * Copyright(c) 2012 fantaysni <fantasyni@163.com>
 * MIT Licensed
 */

var ossClient = require('../lib/oss').index;
var util = require("util");
var profiler = require('v8-profiler');

var _options = { 
	accessId:' 6x6myxrb9peimhs2aof12qwe',  
	accessKey:'psOj6QRG93t/8FV/Um89YSbEWt8='
};

var oss = new ossClient(_options);

var options = {};

/*
oss.list_bucket(function(err,results){
	console.log(results['Buckets']);
})
*/

/*
oss.create_bucket( {bucket : "fni_oss2"},function(err,results){
	console.log(results);
})
*/

/*
oss.get_bucket({bucket:"fni_test"},function(err,results){
	console.log(results);
})
*/

/*
oss.delete_bucket({bucket:"fni_oss2"},function(err,results){
	console.log(results);
})
*/

/*
oss.get_bucket_acl({bucket:"fni_test"},function(err,results){
	console.log(results);
})
*/


/*
oss.set_bucket_acl(
	{	bucket:"fni_test",
		headers:{
			"x-oss-acl":"public-read"
		}
	},function(err,results){
	console.log(results);
})
*/

/*
oss.put_object(
	{	bucket : "fni_te",
		object : "fni.txt" ,
		srcFile : "fni.txt"
	},function(err,results){
		if(err) {
			console.error(err);
			return;
		}
		console.log(results);
	}
);
*/

/*
oss.get_object({
	bucket:"fni_te",
	object:"nw_release_linux_x32.tar.gz",
	dstFile:"getFni.tar.gz"
},function(err,results){
	console.log(results);
})
*/

/*
oss.copy_object({
	bucket:"fni_test",
	object:"fniCopy.txt",
	copyBucket:"fni_test",
	copyObject:"fni.txt"
},function(err,results){
	console.log(results);
})
*/

/*
oss.head_object({
	bucket:"fni_te",
	object:"nw_release_linux_x32.tar.gz"
},function(err,results){
	console.log(results);
})
*/

/*
oss.delete_object({
	bucket:"fni_test",
	object:"fni.txt"
},function(err,results){
	console.log(results);
})
*/

/*
oss.delete_objects({
	bucket:"fni_test",
	objects:["fniCopy.txt","test.avi"]
},function(err,results){
	console.log(results);
})
*/

/*
oss.initiate_multipart_upload({
	bucket:"fni_test",
	object:"bigFile.zip"
},function(err,results){
	console.log(results); 
})
*/

/*
oss.multipart_upload_object({
	bucket:"fni_te",
	object:"nw_release_linux_x32.tar.gz",
	srcFile:"/home/fantasyni/nw_release_linux_x32.tar.gz"
},function(err,results){
	console.log("----------------complete-------------");
	console.log(results);
})
*/

/*
oss.list_multipart_uploads({
	bucket:"fni_test"
},function(err,results){
	console.log(results);
})
*/

/*
oss.create_object_group({
	bucket:"fni_test",
	object:"group.txt",
	objects:["index.txt","info.txt"]
},function(err,results){
	console.log(results);
})
*/

/*
oss.get_object_group({
	bucket:"fni_test",
	object:"group.txt",
	dstFile:"group.txt"
},function(err,results){
	console.log(results);
})
*/

/*
oss.get_object_group_index({
	bucket:"fni_test",
	object:"group.txt"
},function(err,results){
	console.log(util.inspect(results, false, null));
})
*/
/*
{ bucket: 'fni_test',
  object: '1.iso',
  partSize: 52428800,
  srcFile: '/home/fantasyni/1.iso',
  filesize: 729067520,
  method: 'PUT',
  uploads: undefined,
  url: 'http://storage.aliyun.com:8080/fni_test/1.iso?partNumber=14&uploadId=0004C8889FAD67898CD1A9B527AC18CF',
  headers: 
   { 'Content-Length': 1439,
     'Content-MD5': 'DfOjwW6t46RV3pBz1mRWFQ==' },
  timeout: 30000000,
  callback: [Function],
  uploadId: '0004C8889FAD67898CD1A9B527AC18CF',
  partNumber: undefined,
  seekTo: 681574400,
  upload_length: 47493120,
  action: undefined,
  body: '<?xml version="1.0" encoding="utf-8"?>\n<CompleteMultipartUpload><Part><PartNumber>1</PartNumber><ETag>&quot;0F2225A1EF893A9CF775D0EA88403EA0&quot;</ETag></Part><Part><PartNumber>2</PartNumber><ETag>&quot;E3EC912E1AB9BF0F3A4FE458936602B6&quot;</ETag></Part><Part><PartNumber>3</PartNumber><ETag>&quot;2E58CF7B202A62F70A146C24488535F5&quot;</ETag></Part><Part><PartNumber>4</PartNumber><ETag>&quot;3EA87C4121F5F6081BE58142E9EE3E0C&quot;</ETag></Part><Part><PartNumber>5</PartNumber><ETag>&quot;68C4048CE4D75BA0E46F1027A22CCD69&quot;</ETag></Part><Part><PartNumber>6</PartNumber><ETag>&quot;ED9732697EBE682130531F5E3AF4748F&quot;</ETag></Part><Part><PartNumber>7</PartNumber><ETag>&quot;21C09FC6E92C74C7F16A9CC97DE0CD0D&quot;</ETag></Part><Part><PartNumber>8</PartNumber><ETag>&quot;8B9510FCF42E57B25925D94376C5D50E&quot;</ETag></Part><Part><PartNumber>9</PartNumber><ETag>&quot;15214BB2736161431D197187AFABFE09&quot;</ETag></Part><Part><PartNumber>10</PartNumber><ETag>&quot;FBBC63EC760D6FD35B9EE01077DBED53&quot;</ETag></Part><Part><PartNumber>11</PartNumber><ETag>&quot;43DE3486D1637B4CE21FCDED3DDD9015&quot;</ETag></Part><Part><PartNumber>12</PartNumber><ETag>&quot;2EFA95CA7363C55E6B39008E154F47A1&quot;</ETag></Part><Part><PartNumber>13</PartNumber><ETag>&quot;D3CBCD6DAF0A83F828C366E161D602E1&quot;</ETag></Part><Part><PartNumber>14</PartNumber><ETag>&quot;2F9B422EF95BC8FBD9CFEADB2DE01A7E&quot;</ETag></Part></CompleteMultipartUpload>',
  'Content-type': 'application/xml' }

  oss.completeMultipartUpload({

  },function(err,results){

  })
  */
/*
  oss.create_dir(
	{	bucket : "fni_test",
		dir : "test3/" 
	},function(err,results){
		console.log("good");
		console.log(results);
	}
);
*/


oss.upload_objects_by_dir({
	bucket:"fni_oss1",
	ossDir:"test/",
	local:"."
},function(err,results){
	console.log(results);
});
