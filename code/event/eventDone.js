/**
 *  事件订阅发布的应用、对于两个异步文件的加载
 */
 var fs = require('fs');
 var person = {};
 const EventEmitter = require('events');

 var eve = new EventEmitter();
 eve.on('data', out);
 fs.readFile('data/a.txt', 'utf8', function (err, data) {
     person.name = data;
     eve.emit('data');

 });
fs.readFile('data/b.txt', 'utf8', function (err, data) {
    person.age = data;
    eve.emit('data');

});
 function out() {
     if(person.name && person.age) {
        console.log(person);
     }
 }