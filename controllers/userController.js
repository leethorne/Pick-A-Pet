app.controller("userController", function ($scope, $state, $stateParams, userService) {

    //error message for faulty login - deactivated on page load
    $scope.errorMessage = false;

    //get all users
    $scope.users = userService.getUsers();
    console.log($scope.users);

    //get user by ID 
    $scope.user = userService.getUserById($stateParams.id);

    $scope.updateUser = function () {
        userService.updateUser($scope.user);
    }

    //can delete own profile from user.html
    $scope.deleteUser = function () {
        userService.deleteUser($stateParams.id)
    }

    //validating login credentials already exist in constructor (registered user) -- otherwise, error
    $scope.login = function (user) {
        if (userService.login($scope.user) == false) {
            $scope.errorMessage = true;
        }
    }

    //adding new user via register after validating name, email, password fields
    $scope.register = function () {
        userService.register($scope.user);
        console.log($scope.users);
    }

    // logout button -- located in Nav
    $scope.logout = function () {
        userService.logout($scope.user)
    }
})