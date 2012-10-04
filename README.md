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

#Command Line
put oss/bin/ to your system PATH then you can use oss command line directly  
type oss -h you can get the help infomation showed below
<pre>
    Usage: oss [options]

  Options:

    -h, --help                       output usage information
    -V, --version                    output the version number
    -v, --version                    output the version number
    -p, --putbucket                  create a new bucket
    -l, --listbucket                 list buckets
    -s, --setacl                     set bucket acl
    -L, --listobject                 list objects
    -g, --getacl                     get bucket acl
    -d, --deletebucket               delete bucket
    -P, --putobject                  simple put object to oss
    -G, --getobject                  get object from oss to local dstFile
    -C, --copyobject                 copy object in oss
    -H, --headobject                 get object meta info
    -D, --deleteobject               delete object in oss
    -x, --deleteobjects              delete objects in oss
    -m, --multiputobject             multipart upload object to oss
    -S, --listmultiput               list multipart uploads
    -n, --group                      post object group
    -u, --uploaddir                  upload local dir files to a oss dir in a bucket
    -U, --syncdir                    sync local dir files to a oss dir in a bucket
    -c, --copyright                  show oss command line copyright
</pre>
#Tutorial  
you can visit this file to get the whole Tutorial
