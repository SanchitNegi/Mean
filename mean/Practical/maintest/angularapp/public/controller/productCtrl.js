app.controller('productsCtrl',['$scope','User','$http','$rootScope',function($scope,User,$http,$rootScope) {    /*$scope is the keyword we cant change the keyword*/
    var login={};
    
    
    $http.get('products/fetch').then(function(response){
               
                $scope.Products=response.data;
                
        });
      
     
      
   
    
    
    
    
}]);