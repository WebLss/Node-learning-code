var fs = require('fs');
var rs = fs.createReadStream('./request.txt');
//解析头部
var StringDecoder = require('string_decoder').StringDecoder;
function parseHeader(callback) {
    var headers = '';
    rs.on('readable', onReadable);
    var decoder = new StringDecoder();
    function onReadable() {
        var  chunk;
        while (null != (chunk = rs.read())) {
            var
        }
    }
}