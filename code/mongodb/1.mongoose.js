var mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect("mongodb://127.0.0.1:27017/myblog", options);
mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
mongoose.connection.on("open", function () {
    console.log("数据库连接成功");
});
//集合的数据模型定义 定义了字段名和字段的类型 默认值
var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
});

// 创建Model 是通过数据库连接创建的
var PersonModel = mongoose.model("Person", PersonSchema);

var personEntity = new PersonModel({
    name : "zfpx",
    age  : 6,
    email: "zfpx@qq.com"
});
console.log(personEntity.name); // zfpx
console.log(personEntity.age); // 6
console.log(personEntity.time); // 6


/*personEntity.save(function(error,doc){
    if(error){
        console.log("error :" + error);
    }else{
        for(var attr in doc){
            console.log(attr+'='+doc[attr])
        }
        console.log(arguments);
    }
});*/
PersonModel.create({ name:"zfpx", age:7}, function(error,doc){
    if(error) {
        console.log(error);
    } else {
        console.log(doc);
    }
});
/*
PersonModel.find({},function(error,docs){
    console.log(docs);
    //console.log(docs[0]);
    //若没有向find传递参数，默认的是显示所有文档
});*/
