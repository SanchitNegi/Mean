var addition=function(){

return "this is the first function";

}

var subtraction=function(){
mul();
return "this is the first function";

}

var mul=function(){

console.log("this is the private function");

}

exports.subtraction=subtraction;
