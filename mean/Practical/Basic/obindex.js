
var result={};

result.test=function(user,uage){

this.setinfo=function(){
        this.username=user;
       this.userage=uage;
}

this.getinfo=function(){
  console.log("My name is"+" "+this.username+" "+"and age is"+" "+this.userage);
}


}
result.testing=function(nadsd,agdsd){
this.setinfo=function(){
      this.username=nadsd;
      this.userage=agdsd;
}

this.getinfo=function(){
  console.log("My name is"+" "+this.username+" "+"and age is"+" "+this.userage);
}


}

module.exports=result;
