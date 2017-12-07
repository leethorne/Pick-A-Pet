app.controller("navController", function($scope, userService) {
    //for dynamic header 
     $scope.userService = userService;
     $scope.logout = function () {
         userService.logout();
     }
})