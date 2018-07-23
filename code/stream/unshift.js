var fs = require('fs');
var rs = fs.createReadStream('./data/request.txt');
//解析头部
var StringDecoder = require('string_decoder').StringDecoder;
function parseHeader(callback) {
    var headers = '';
    rs.on('readable', onReadable);
    var decoder = new StringDecoder();
    function onReadable() {
        var  chunk;
        while (null != (chunk = rs.read())) {
            var str = decoder.write(chunk);
            if (str.match(/\r\n\r\n/)) {
                var splits = str.split(/\r\n\r\n/);
                // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
                headers += splits.shift();
                rs.removeListener('readable', onReadable);
                var remain = splits.join('\r\n\r\n');
                var buf = new Buffer(remain, 'utf8');
                if(buf.length) rs.unshift(buf);
                callback(headers);
            } else {
                headers += str;
            }
        }
    }
}
parseHeader(function (header) {
    console.log(header);
    rs.on('data', function (data) {
        console.log(header);
    })
});