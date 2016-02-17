app.controller('mainCtrl', function($scope, dataService){
	//$scope.test = "Testing" tests to see if working
	$scope.getData = dataService.getData();
	$scope.addData = function() {
		var newQuote = {
			text: $scope.addQuote.text,
			author: $scope.addQuote.author
		}
		console.log(newQuote);
		dataService.addData(newQuote);
		$scope.getData = dataService.getData();
	}
	$scope.removeData = function() {
		dataService.removeData($scope.addQuote.text);
	}
});