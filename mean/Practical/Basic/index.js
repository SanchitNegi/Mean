  var name,age;

test=function(na,ag){

this.setinfo=function(){
        name="na";
       age="ag";
}

this.getinfo=function(){
  console.log("My nae is"+" "+name+" "+"and age is"+" "+age);
}


}
testing=function(nadsd,agdsd){
this.setinfo=function(){
      this.name=nadsd;
      this.age=agdsd;
}

this.getinfo=function(){
  console.log("My nae is"+" "+this.name+" "+"and age is"+" "+this.age);
}


}
exports.test=test;
exports.testing=testing;
//var obj=new test("Sanchit",25);
//obj.getinfo();
//module.exports="result";
