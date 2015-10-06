app.controller('ordersCtrl',['$scope','User','$http','$rootScope','$location',function($scope,User,$http,$rootScope,$location) {    /*$scope is the keyword we cant change the keyword*/
    
    $scope.initialize = function(){
        $scope.cart = {};
        $scope.$watch('cart', function () {
                $scope.total = 0
                angular.forEach($scope.cart, function(row){
                    $scope.total += row.price
                })
        }, true)
    }
    $scope.initialize();
    
    var login={};
    
    
    
    
    
    $http.get('orders/fetch').then(function(response){
               //console.log(response.data);
                $scope.Products=response.data;
               
                
        });
     $http.get('orders/checkcartvalue').then(function(response){
               //console.log(response.data);
                $scope.cart=response.data;
                
               
                
        });
      //$http.get('orders/ditch').then(function(response){
      //         //console.log(response.data);
      //          $scope.Products=response.data;
      //          
      //  });
      //$http.get('orders/checkcart').then(function(response){
      //         //console.log(response.data);
      //          $scope.Products=response.data;
      //          
      //  });
      //
      $scope.product=function(data){
         var id={"id":data};
         $http.post('/orders/product',id).then(function(response){
                              //$rootScope.Product=response.data;
                              $scope.Category=response.data;
                              
                             
                               
                
                
        });
      }
         
        
      
        $scope.addcart=function(){
          
        
         $http.post('/orders/addcart',$scope.Category).then(function(response){
                              console.log(response.data);
                              if (response.data==401) {
                                $scope.already="Item already exist in cart";
                              }else{
                                 $scope.cart=response.data;
                                  
                              }
                             
                              
                             
                               
                
                
        });
      }
      
      
      
      
         $scope.finalcart=function(){
           
              $http.get('orders/checkcartvalue').success(function(response){
              // 
              //console.log("Hi");    
              //console.log(response[0].subtotal);
                  $scope.price=response;
                  
                 
                  $location.path('/payment');
           });
                             
                               
                
                
        }
        
           $scope.remove=function(data){
               data={"id":data};
               $http.post('/orders/remove',data).then(function(response){
                              
                             
                                $scope.already="";
                             
                                  $scope.cart=response.data;
                                   //counting=response.data.length;
                                   // for(var i = 0; i < counting; i++) {
                                   //     
                                   //
                                   //
                                   // }
                                   
    //                                $scope.$watch('cart', function () {
    //    $scope.total = 0
    //    angular.forEach($scope.cart, function(row){
    //        $scope.total += row.price
    //    })
    //}, true)
                          
                             
                              
                             
                               
                
                
        });
                              
                             
                               
                
                
        }
        
        
        $scope.getTotal = function(){
            var total = 0;
            console.log("Hi");
            console.log($scope);
            //for(var i = 0; i < $scope.cart.products.length; i++){
            //    var product = $scope.cart.products[i];
            //    total += (product.price * product.quantity);
            //}
            return total;
        }
         $scope.quan = function(data){
            var quan=$scope.product.quantity;
            
            var formatdata={"id":data,"quan":quan};
             
              
              $http.get('/orders/addquan',{params:formatdata}).then(function(response){
                             
                              
                               $scope.cart=response.data;
                                   //counting=response.data.length;
                                   // for(var i = 0; i < counting; i++) {
                                   //     
                                   //
                                   //
                                   // }
                                   
                                    $scope.$watch('cart', function () {
                                                    $scope.total = 0
                                    angular.forEach($scope.cart, function(row){
                                        $scope.total += row.subtotal
                                    })
                                     }, true)
                               
                
                
                });
           
        }
        
        
      
      
      
    
     
     
      
   
    
    
    
    
}]);