var fs = require('fs');
var rs = fs.createReadStream('./data/read.txt',{
   start:0, end:5, encoding: 'utf8'
});

/**
 * setEncoding也可以的
 * rs.setEncoding()
 */

rs.on('data', function (data) {
    console.log(data);
    rs.pause();//暂停
    setTimeout(function () {
        rs.resume();
    }, 3000);
});

rs.on('end', function () {
    console.log('读取完成');
});

rs.on('close', function () {
   console.log('关闭');
});

