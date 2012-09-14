#OSS
OSS is a [node.js](http://nodejs.org) SDK and Command-Line Tool for [Aliyun OSS](http://www.aliyun.com/product?type=oss)  

#Support API  
+ service operation  
+ bucket operation 
+ object operation  
+ multipart upload operation  
+ object group operation  
  
more api infomations you can see [oss_api](http://storage.aliyun.com/aliyun_portal_storage/oss_api/OSS_API.zip)  

#Usage  
all api functions have the same style as showed below  
  
<pre>
   var oss = require('oss');  
   var client = new oss({
       accessId : xxx,
       accessKey xxx: 
   });
   var options = {
       bucket : "test"
   }
   client.create_bucket(options,function(err,result){
       if(err) throw err;
       // operation result
       console.log(result);
   });
</pre>

you can configue the options object to make your oss request , it is really simple !!!  

#Tutorial  
you can visit this file to get the whole Tutorial

