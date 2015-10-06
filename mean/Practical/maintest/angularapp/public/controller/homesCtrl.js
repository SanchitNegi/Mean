var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope',function($scope) {    /*$scope is the keyword we cant change the keyword*/
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.add=function(value){
        if (value) {
              return value * 2;
        }else{
            return 0;
        }
      
    }
}]);