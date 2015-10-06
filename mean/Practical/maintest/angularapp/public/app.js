var app = angular.module('myapp',['ngRoute']);
var checkPage = function($http,$rootScope){
  
$http.get('categories/loggedin').then(function(response){
                  console.log(response.data);
                   if (response.data!=0) {
                    $rootScope.flag =true;
                     
                   }else{
                    $rootScope.flag =false;
                     
                   }
        });

  };
var checkstatus = function($http,$rootScope){
  
  $http.get('categories/loggedin').then(function(response){
                  console.log(response.data);
                   if (response.data!=0) {
                      $rootScope.flag =true;
                      window.location.href="#/dashboard";
                     
                   }else{
                    $rootScope.flag =false;
                     
                   }
        });

  };

app.config(['$routeProvider',
    function($routeProvider) {
      
      //alert("-------------m in config block---------");
      
      $routeProvider
        .when("/", {
          templateUrl:"/view/homes/home.html",
          controller: "HomeCtrl",
           resolve: {looged:checkPage}
       
        })
         .when("/aboutus", {
          templateUrl:"/view/homes/aboutus.html",
          controller: "HomeCtrl",
           resolve: {looged:checkPage}
        })
        .when("/homepage", {
          templateUrl:"/view/homes/homepage.html",
          controller: "HomeCtrl",
           resolve: {looged:checkPage}
        })
           .when("/home", {
          templateUrl:"/view/homes/home.html",
          controller: "HomeCtrl",
           resolve: {looged:checkPage}
        })
           .when("/location", {
          templateUrl:"/view/homes/location.html",
          controller: "HomeCtrl",
           resolve: {looged:checkPage}
        })
          .when("/photos", {
          templateUrl:"/view/homes/photos.html",
            controller: "HomeCtrl",
             resolve: {looged:checkPage}
        })
         .when("/signin", {
          templateUrl:"/view/homes/signin.html",
          controller: "HomeCtrl",
          resolve: {log:checkstatus}
        })
          .when("/signup", {
          templateUrl:"/view/homes/signup.html",
          controller: "HomeCtrl",
          resolve: {log:checkstatus}
        })
           .when("/forgetPassword", {
          templateUrl:"/view/homes/forget-pasword.html",
          resolve: {log:checkstatus}
        })
            .when("/dashboard", {
          templateUrl:"/view/homes/dashboard.html",
          controller: "ordersCtrl",
          resolve: {loggedin:checkLoggedin}
         
        })
            .when("/logout", {
          templateUrl:"/view/homes/signin.html",
          controller: "HomeCtrl"
          
         
        })
               .when("/profile", {
          templateUrl:"/view/homes/profile.html",
          controller: "HomeCtrl",
           resolve: {loggedin:checkLoggedin}
          
         
        })
            .when("/product/:category", {
          templateUrl:" ",
          controller: "HomeCtrl",
           resolve: {loggedin:checkLoggedin}
          
         
        })
            .when("/payment", {
          templateUrl:"/view/homes/payment.html",
          controller: "ordersCtrl",
           resolve: {loggedin:checkLoggedin}
          
         
        })   
         ;
        
        
    }
  ]
);

app.controller('HomeCtrl',['$scope','User','$http','$rootScope',function($scope,User,$http,$rootScope) {    /*$scope is the keyword we cant change the keyword*/
    var login={};
       $http.get('categories/myprofile').then(function(response){
               
                  $scope.message="Here is your Profile";
                
                  $scope.login=response.data;
        });
     
      
    $scope.add=function(){
      
      console.log($scope.login);
        if (login) {
              return 5 * 2;
        }else{
            return 0;
        }
      
    }
      
     
      $scope.userlogin = function() {
        console.log($scope.login);
       
        User.login($scope.login).then(function(response){
            // console.log("Hi"+response.data.status);
             userid=response.data;
             if (userid) {
                 
                 
                   $rootScope.flag =true;
                   $scope.username=response.data.firstname;
               
                 $rootScope.user=response.data;
                window.location.href = "#/dashboard";
             }else{
                $rootScope.flag =false;
                window.location.href = "#/login";
             }
         
          });
    };
    
       
       $scope.useradd = function() {
        
        
        
        User.addUser($scope.login).then(function(response){
            // console.log("Hi"+response.data.status);
             $scope.message=response.data.status;
         
          });
      
    };
    
      $scope.logout = function() {
        
        
       $http.get('categories/logout').then(function(response){
                   console.log(response);
                   if (response.status==200) {
                    $rootScope.flag =false;
                      window.location.href = "#/signin";
                   }
        });
        
      }
      
       $scope.forgetpassword = function() {
       
      email=$scope.login.email;
       if(email) {
         $http.get('categories/forget?email='+$scope.login.email).then(function(response){
                   
                   
                   if (response.data==501) {
                    $scope.forgemessage="Please enter correct email";
                   }else if(response.data==200){
                     $scope.forgemessage="New password has been sent on your mail";
                   }
                  
        });
        
      }else{
        $scope.forgemessage="Please enter your email";
      }
        
        //code
       }
       
       
        $scope.updateProfile = function() {
           
           //var file = $scope.myFile;
          
         
          // var uploadUrl = 'http://www.example.com/images';
          //  
            data=$scope.login;
            //data.image=file.name;
          //console.log(file);
          //console.log(data);
         $http.post('/categories/updateProfile',data).then(function(response){
          
           if (response.data==200) {
               $scope.message="Profile Updated Successfully";
            //code
           }else{
           
            $scope.message="No change in information is provide by you.";
           }
            
            
          });
        
      }
      
      
    
    
    
    
    
}]);






//app.controller("AnotherCtrl", function($scope, UserService) {
//  $scope.firstUser = UserService.first();
//});


