angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", "PlanesAPI", function($scope, PlanesAPI){
	//Define title for each page
	$scope.title = "An airplane or aeroplane (informally plane) is a powered, fixed-wing aircraft that is propelled forward by thrust from a jet engine or propeller. Airplanes come in a variety of sizes, shapes, and wing configurations. Learn more about different kinds of planes below."
	$scope.planes = [];

	PlanesAPI.getPlanes().then(function success(response){
		console.log("We did it!");
		console.log(response);
		$scope.planes = response.data; 
	}, function error(err){
		console.log("Oh no", err);
	})


}])
.controller("DetailCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
	//Define title for each page
	$scope.plane = [];

	PlanesAPI.getPlane($stateParams.id).then(function success(response){
		console.log("success", response);
		$scope.plane = response.data; 
	}, function error(err){
		console.log("error", err);
	})
}])
.filter("fixgrammar", function() {
	return function(input){
		if(input == 1){
			return "1 engine";
		} else {
			return input + " engines";
		}
	}
})

