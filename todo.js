angular.module('todoApp', [])
	.controller('TodoController', ['$scope', function($scope) {
		$scope.todos = [
			];

//TODO: Faire la validation des mails
		$scope.addTodo = function() {
			$scope.todos.push({text:$scope.todoText, done:false});
			$scope.todoText = '';
		};

		$scope.remaining = function() {
			var count = 0;
			angular.forEach($scope.todos, function(todo) {
				count += todo.done ? 0 : 1;
			});
			return count;
		};

		$scope.reset = function() {
			$scope.todos = [];
				};

		$scope.hasard = function() {
		   	$scope.todos[Math.floor(Math.random() * $scope.todos.length)];
				};

	}]);
