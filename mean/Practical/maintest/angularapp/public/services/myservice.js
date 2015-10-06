app.factory('User', function($http){
   var User = {
      addUser:function(data){
         
      
          return $http.post('users',data).then(function(response){
           
         // console.log("Hi"+response.data.status);
              sucess=response;
            
              return sucess; 
          });
      },
      login: function(data){
         
        return $http.post('/categories/login',data).then(function(response){
        // console.log("Hi"+response.data._id);
          return response;
        });
      }
   }
   return User;
});