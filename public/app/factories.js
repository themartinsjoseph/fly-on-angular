angular.module("FlyApp")
.factory("PlanesAPI", ["$http", function($http){
	return {
		getPlanes: function(){
			return $http.get("/api/airplanes");
		},
		getPlane: function(id){
			return $http.get("/api/airplanes/" + id);
		},
		addPlane: function(plane){
			$http.post("/api/airplanes", plane)
			.then(function success(response){
				return response.data; 
			},
			function error(err){
				return null; 
			})
		},
		deletePlane: function(id){
			$http.delete("")

			console.log("STUB");


		},
		updatePlane: function(plane){
			console.log("STUB");
		}
	}

}]);