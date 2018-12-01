var standingsApp = angular.module("standingsApp", ["ngRoute"]);

// Routes
standingsApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "views/standings.html",
		controller: "StandingsController"
	})
	.when("/teams/:index", {
		templateUrl: "views/teams.html",
		controller: "StandingsController"
	})
	.otherwise({
		redirectTo: "/"
	}) 
});

// Standings controller
standingsApp.controller("StandingsController", ["$scope", "$http", "$routeParams",
	function($scope, $http, $routeParams){
	
	$scope.addTeam = function(){
		$scope.teams.push({
			name: $scope.newTeam.name,
			cups: parseInt($scope.newTeam.cups),
			leagues: parseInt($scope.newTeam.leagues),
			champions: parseInt($scope.newTeam.champions)									
		})

		$scope.newTeam.name = "";
		$scope.newTeam.cups = "";
		$scope.newTeam.leagues = "";
		$scope.newTeam.champions = "";

	}

	$scope.removeTeam = function(team){
		var removedTeam = $scope.teams.indexOf(team);
		$scope.teams.splice(removedTeam, 1);
	}

	// Get data
	$http.get("data/teams.json").then(function(data){
		$scope.teams = data.data;
	});

	$scope.index = $routeParams.index;

}]);

