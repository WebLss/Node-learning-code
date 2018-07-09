exports.loaded = function(){
    console.log(module.loaded);
};
console.log("resole",module.resolve);
console.log('B开始加载');
var a = require('./a');
console.log("module.children",module.children);
a.loaded();
console.log('a.name', a.name);
