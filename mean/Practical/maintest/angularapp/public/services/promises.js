var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
  // Initialize a new promise
 
  var deferred = $q.defer();
      
    // Make an AJAX call to check if the user is logged in
  $http.get('categories/loggedin').success(function(user){

    // Authenticated
    if (user !== '0'){
       $rootScope.flag =true;
       deferred.resolve();
    }
    else {
      $rootScope.flag =false;
      //$rootScope.message = 'You need to log in.';
      deferred.reject();
      $location.url('/signin');
      
      }
      });
  return deferred.promise;
  };
  
  
//exports.checkLoggedin=checkLoggedin;