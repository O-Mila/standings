var standingsApp = angular.module("standingsApp", ["ngRoute"]);

// Routes
standingsApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "views/standings.html",
		controller: 
	})
	.when("/teams", {
		templateUrl: "views/teams.html",
		controller:
	})
	.otherwise({
		redirectTo("/")
	}) 
});

// Controller
standingsApp.controller("StandingsController", ["$scope", "$http", function($scope, $http){
	
	$scope.addTeam = function(){
		$scope.teams.push({
			name = $scope.newTeam.name;
			cups = parseInt($scope.newTeam.cups);
			leagues = parseInt($scope.newTeam.leagues);
			champions = parseInt($scope.newTeam.champions);									
		})

		$scope.newTeam.name = "";
		$scope.newTeam.leagues = "";
		$scope.newTeam.champions = "";

	}

	$scope.removeTeam = function(team){
		var removedTeam = indexOf(team);
		$scope.teams.splice(removedTeam, 1);
	}

	// Get data
	$http.get("teams.json").then(function(data){
		$scope.teams = data.data;
	});

}]);

