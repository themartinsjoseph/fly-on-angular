angular.module("FlyApp", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){

$urlRouterProvider.otherwise("/404");

$stateProvider.state("home", {
	url: "/",
	templateUrl: "app/views/planes.html",
	controller: "PlanesCtrl"
})
.state("plane", {
	url: "/plane/:id",
	templateUrl: "app/views/details.html",
	controller: "DetailCtrl"
})
.state("airplaneadd", {
	url: "/airplaneadd",
	templateUrl: "app/views/airplaneAdd.html",
	controller: "AddPlaneCtrl"
})
.state("airplaneedit", {
	url: "/plane/edit/:id",
	templateUrl: "app/views/airplaneEdit.html",
	controller: "DetailCtrl"
})
.state('deletePlane', {
       url: '/plane/delete',
       controller: 'DeletePlaneCtrl'
     })
.state("404", {
	url: "/404",
	templateUrl: "app/views/404.html"
})

$locationProvider.html5Mode(true);

}]); 

