var fs = require('fs');
var rs  = fs.createReadStream('./data/read.txt');//64k
var ws = fs.createWriteStream('./data/write.txt');// 16k
rs.pipe(ws);

rs.on('data',function(data){
    var flag = ws.write(data);
    if(!flag){
        console.log("pause");
        rs.pause();
    }
});

ws.on('drain',function(){
    console.log("resume");
    rs.resume();
});
