var Person = require('./module/human');
console.log(require.cache);
var girl = new Person("test1", 22);
var boy = new Person('test2', 33);
console.log(girl.setName('dd'));
console.log(girl.getName('dd'));
console.log(Person.staticName);
console.log(girl.hasOwnProperty('_name'));

/**
 * 1.核心模块 http fs
 * 2.通过路径加载
 * 3.其它的文件模块
 */
