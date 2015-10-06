//myApp.directive('fileRead', ['$parse', function ($parse) {
//    return {
//        restrict: 'A',
//        link: function(scope, element, attrs) {
//            var model = $parse(attrs.fileModel);
//            var modelSetter = model.assign;
//            
//            element.bind('change', function(){
//                scope.$apply(function(){
//                    modelSetter(scope, element[0].files[0]);
//                });
//            });
//        }
//    };
//}]);

//modulo.directive('fileRead', function () {
//    return {
//        restrict: 'A',
//        link: function(scope, element, attrs) {
//            element.on('change', function (event) {
//                var file = event.target.files[0];
//                scope.$emit("fileSelected", file);
//            });            
//        }
//    };
//});

app.directive('changeQua', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            console.log("hiiii");
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);