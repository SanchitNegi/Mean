var myNamespace = (function () {
 
  var myPrivateVar, myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function ( foo ) {
      console.log( foo );
  };
  function a(foo){
    
      console.log( foo );
  }
 
  return {
 
    // A public variable
    
    teat:a,
    myPublicVar: "foo",
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
         
      // Increment our private counter
      myPrivateVar++;
 
      // Call our private method using bar
      myPrivateMethod( bar );
      a(bar);
 
    }
  };
 
})();


console.log(myNamespace.myPublicVar);
myNamespace.myPublicFunction("Hey");
myNamespace.teat("Hey");
