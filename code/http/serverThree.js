var http = require('http');
var fs = require('fs');
const mime = require('mime'); //第三方类库
var url = require('url'); //对URL进行处理，把字符串转成对象

var server = http.createServer(serve);

function serve(request, response) {
    console.log(request.method);
    console.log(request.url);
    response.statusCode = 200;

    response.setHeader("token", "dd");
    var urlObj = url.parse(request.url, true); //true则把值转成对象
    console.log(urlObj.query);
    var pathname = urlObj.pathname;
    console.log(pathname);

    /*if(url == '/css/style.css') {
        response.setHeader('Content-Type','text/css;charset=utf8');
        fs.readFile('../html/css/style.css', function (err, data) {
            if(err) throw err;
            response.write(data); //读取并写入响应体中
            response.end();
        });
    } else if(url == '/js/index.js'){
        response.setHeader('Content-Type','application/x-javascript;charset=utf8');
        fs.readFile('../html/js/index.js', function (err, data) {
            if(err) throw err;
            response.write(data); //读取并写入响应体中
            response.end();
        });
    } else {
        response.setHeader('Content-Type','text/html;charset=utf8');
        fs.readFile('../html/index.html', function (err, data) {
            if(err) throw err;
            response.write(data); //读取并写入响应体中
            response.end();
        });
    }*/
    //使用mime获取content-type
    if (pathname == '/') {
        response.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.readFile('./html/index.html', function (err, data) {
            if (err) throw err;
            response.write(data); //读取并写入响应体中
            response.end();
        });
    } else if (pathname == '/clock') {
        var counter = 0;
        var int = setInterval(function () {
            response.write(new Date().toString());
            counter ++;
            if(counter == 5) {
                clearInterval(int);
                response.end();
            }
        }, 1000);
    } else if (pathname == '/favicon.ico') {

    } else {
        stat(pathname, response);
    }
    // response.write("好的好的话");
}

function stat(pathname, response) {
    console.log(mime.getType);
    response.setHeader('Content-Type',mime.getType(pathname)+';charset=utf8');
    fs.readFile('.'+pathname, function (err, data) {

        response.write(data); //读取并写入响应体中
        response.end();
    });
}
server.listen(8080,'localhost');