app.controller("animalController", function ($scope, $stateParams, $state, animalService, userService, centerService) {

    $scope.animals = animalService.getAnimals()
    console.log($scope.animals);

    if ($stateParams.id == "" || $stateParams.id == null || $stateParams == undefined) {
        $scope.submitButton = true;
        $scope.heading = "Add an Adoptable Animal!";
        $scope.animal = animalService.getAnimalById($stateParams.id)
    } 
    else {
        $scope.submitButton = false;
        $scope.heading = "Update Animal Information";
        $scope.animal = animalService.getAnimalById($stateParams.id)
    }

    $scope.addAnimal = function () {
        console.log($scope.animal)
        animalService.addAnimal($scope.animal);
    }

    $scope.updateAnimal = function () {
        animalService.updateAnimal($scope.animal);
    }

    $scope.deleteAnimal = function () {
        animalService.deleteAnimal($stateParams.id)
    }

    //allows animal page to access current user info 
    $scope.currentUser = userService.currentUser

    //to access the centers on each animal's page. 
    $scope.centers = centerService.getCenters();

    $scope.search = '';
    $scope.userInput = {};

    $scope.applySearch = function () {
        $scope.search = $scope.userInput.animalType; //sets the user input to search string and filters 
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
        //  document.body.scrollTop = 0; // For Safari
        document.body.scrollTop = document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
})