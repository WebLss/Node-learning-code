var fs = require('fs');
var rs  = fs.createReadStream('./data/read.txt',{
    start:0,end:1, highWaterMark:2
});
var buffers = [];
rs.on('readable',function(){
    console.log('=====readable=====');
    var buff;
    //rs.read(读多少个字节)
    while(null != (buff = rs.read(1))){
        buffers.push(buff);
    }
});

rs.on('end',function(){
    var data = Buffer.concat(buffers);
    console.log(data.toString());// 123456
});

