app.controller("centerController", function ($scope, $stateParams, $state, centerService, userService, animalService, NgMap) {

    $scope.centers = centerService.getCenters()
    console.log($scope.centers);

    if ($stateParams.id == "" || $stateParams.id == null || $stateParams.id == undefined) {
        $scope.submitButton = true;
        $scope.heading = "Add a Center!";
        $scope.center = centerService.getCenterById($stateParams.id)
    } 
    else {
        $scope.submitButton = false;
        $scope.heading = "Update Center!";
        $scope.center = centerService.getCenterById($stateParams.id)
    }

    $scope.addCenter = function () {
        console.log($scope.center)
        centerService.addCenter($scope.center)
    }

    $scope.updateCenter = function () {
        centerService.updateCenter($scope.center);
    }

    $scope.deleteCenter = function () {
        centerService.deleteCenter($stateParams.id)
    }

    $scope.currentUser = userService.currentUser

    //to search on button click in nav bar instead of filter when typing
    $scope.search = '';
    $scope.userInput = {};

    $scope.applySearch = function () {
        $scope.search = $scope.userInput.state //sets the user input to search string and filters 
        $scope.userInput = {}; //clears the text in the search bar 
    };

    // When the user scrolls down 100px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("myBtn").style.display = "block";
        } 
        else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    $scope.topFunction = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //API functionality -- get map from the address of the center
    $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBs9zJAnCD2j2RJD3dFVPVXJZ7kj5nmTUU";

    NgMap.getMap().then(function (map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
    });

    //allows us to access the animals via center controller. used to show animals on center show page. 
    $scope.animals = animalService.getAnimals();
})