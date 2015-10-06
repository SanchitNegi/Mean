var express = require('express');
var router = express.Router();
var project =require('./project');
var routes= require('./myroute');
var app =express();
var project1data={
    name:'Project1'
};
var project2data={
    name:'Project2'
};
console.log(project.Person);
var p1 = new project.Person();
p1.sayHello("Sanchit");
exports.project1 =function(res,req){
   res.json(p1.getresult());
}
app.use('/',routes);
app.listen(3000);
console.log("Running at Port 3000");
