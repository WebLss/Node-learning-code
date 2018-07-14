
//方法一
/*var fs = require('fs');
var buffer = new Buffer(100000);
fs.open('line.txt','r',function(err,fd){
    fs.read(fd,buffer,0,6,0,function(err,bytesRead){
        console.log('bytesRead',bytesRead);
        fs.read(fd,buffer,6,6,6,function(err,bytesRead){
            console.log('bytesRead',bytesRead);
            console.log(buffer.toString());
        })
    })
});*/

var fs = require('fs');
var list = [];

fs.open('./data/line.txt','r',function(err,fd){
    var pos =0;
    function read(){
        var buffer = new Buffer(3);
        fs.read(fd,buffer,0,3,pos,function(err,bytesRead){
            list.push(buffer.slice(0,bytesRead));
            //console.log(buffer);
            pos += bytesRead;
            if(bytesRead>0)
                read();
            else{
                var result = Buffer.concat(list);
                console.log(result.toString());
            }
        });
    }
    read();
});

console.log('ddd');