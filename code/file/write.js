/**
 * fs.write 写入文件
 */


var fs = require('fs');
/*fs.open('line.txt','w',function(err,fd){
    fs.write(fd,new Buffer('发生的'),6,6,0,function(err,bytesWritten){
        console.log(bytesWritten);
    })
});*/

/*
var buffer = new Buffer('很高兴认识你');
fs.open('line.txt','w',function(err,fd){
    console.log('first',fd);
    fs.write(fd,buffer,6,6,6,function(err,bytesWritten){
       // console.log(bytesWritten);
        fs.write(fd,buffer,0,6,0,function(err,bytesWritten){
            //console.log(bytesWritten);
            fs.close(fd);
            fs.open('line.txt','w',function(err,fd){
                console.log('second',fd);
            });
        })
    })
});
*/
/*fs.writeFile('./data/line.txt','哈哈', {flag:'w', encoding: 'utf8'}, function (err) {
   console.log(err) ;
});*/

//fs.appendFile('./data/line.txt', new Buffer('第二行'));

/**
 * base64
 * base是把3个8位字节 转成4个6位字节 然后在6位字节齐前补两个0
 */
/*
var buffer = new Buffer('神奇的事情');
fs.open('./data/line.txt','w',function(err,fd){
    console.log('first',fd);
    fs.write(fd,buffer,6,6,6,function(err,bytesWritten){
        // console.log(bytesWritten);
        fs.write(fd,buffer,0,6,0,function(err,bytesWritten){
            //console.log(bytesWritten);
            fs.close(fd);
            fs.open('./data/line.txt','w',function(err,fd){
                console.log('second',fd);
            });
        })
    })
});*/
