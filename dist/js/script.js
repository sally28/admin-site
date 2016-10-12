var app = angular.module("admin", ["ngRoute"])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	  .when('/main',{
		templateUrl:"main.html",
		controller:"MainCtrl"
	}).
	  when('/flot',{
		templateUrl:"flot.html",
		controller:"MainCtrl"
	}).
	when('/morris',{
		templateUrl:"morris.html",
		controller:"ServicesCtrl"
	}).
	when('/tables',{
		templateUrl:"tables.html",
		controller:"ContactCtrl"
	}).
	when('/forms',{
		templateUrl:"forms.html",
		controller:"ContactCtrl"
	}).
	when('/panels-wells',{
		templateUrl:"panels-wells.html",
		controller:"ContactCtrl"
	}).
	when('/buttons',{
		templateUrl:"buttons.html",
		controller:"ContactCtrl"
	}).
	when('/notifications',{
		templateUrl:"notifications.html",
		controller:"ContactCtrl"
	}).
	when('/typography',{
		templateUrl:"typography.html",
		controller:"ContactCtrl"
	}).
	when('/icons',{
		templateUrl:"icons.html",
		controller:"ContactCtrl"
	}).
	when('/grid',{
		templateUrl:"grid.html",
		controller:"ContactCtrl"
	}).
	when('/blank',{
		templateUrl:"blank.html",
		controller:"ContactCtrl"
	})
	
	
}])

.controller('MainCtrl',['$scope',function($scope){
    
}])

.controller('ServicesCtrl',['$scope','$http',function($scope,$http){
    $http.get('services.json').then(function(response){
    	$scope.services =response.data
    });
}]) 

.controller('ContactCtrl',['$scope',function($scope){
    
}]); 