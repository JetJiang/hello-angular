//var app = angular.module('app',[]);
//app.directive('ngheader',[function(){
//	console.log("111");
//	return {
//		templateUrl:'header.html'
//	}
//}]);
var app = angular.module("app");
app.directive("runoobDirective", function() {
    return {
        template : "<h1>自定义指令!</h1>"
    };
});