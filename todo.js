angular.module('todoApp', [])
	.controller('TodoController', ['$scope', function($scope) {
		$scope.todos = [
			];

		var todos = $scope.todos;

//TODO: Faire la validation des mails
		$scope.addTodo = function() {
			$scope.todos.push({text:$scope.todoText, done:false, id:$scope.todoId});
			$scope.todoText = '';
			$scope.todoId = 1;
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

		$scope.remove = function() {
			todos.splice(this.$index,1);
		};

		$scope.hasard = function() {
		   	$scope.todos[Math.floor(Math.random() * $scope.todos.length)];
				};
	}]);
