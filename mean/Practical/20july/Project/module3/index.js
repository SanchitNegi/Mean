var name,age,sex,profession;

exports.setName=function(n){
name=n;
}
exports.setAge=function(a){
age=a;
}
exports.setSex=function(s){
sex=s;
}
exports.getInfo=function(){
return {
name:name,
age:age,
sex:sex,
};


}
