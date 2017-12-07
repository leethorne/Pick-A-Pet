var app = angular.module("animalApp", ["ui.router", "ngMap"])

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("app", {
            abstract: true,
            url: '',
            templateUrl: "./views/app-container.html",
            controller: "homeController"
        })
        .state("app.home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "homeController"
        })
        .state("app.about", {
            url: '/about',
            templateUrl: "./views/about.html",
        })

        .state("app.login", { //registered users can log in
            url: "/login",
            templateUrl: "./views/login.html",
            controller: "userController"
        })

        .state("app.register", { //adds new user
            url: "/register",
            templateUrl: "./views/register.html",
            controller: "userController"
        })

        .state("app.user", { //user profile 
            url: "/user/:id",
            templateUrl: "./views/user.html",
            controller: "userController"
        })
                .state("app.userUpdate", { //user can update 
                    url: "/user/:id/edit",
                    templateUrl: "./views/users-form.html",
                    controller: "userController"
                })

        .state("app.centers", { //USER index of centers -- add buttons for admin
            url: "/centers",
            templateUrl: "./views/centers.html",
            controller: "centerController"
        })
                .state("app.centerCreate", { //admin create function 
                    url: '/centers/new',
                    templateUrl: "./views/centers-form.html",
                    controller: "centerController"
                })
                .state("app.center", { //center show function for for users -- add buttons for admin
                    url: '/centers/:id',
                    templateUrl: "./views/center.html",
                    controller: "centerController"
                })

                .state("app.centerUpdate", { //admin update function 
                    url: '/centers/:id/edit',
                    templateUrl: "./views/centers-form.html",
                    controller: "centerController"
                })

        .state("app.animals", { //user index for animals -- add buttons for admin
            url: "/animals",
            templateUrl: "./views/animals.html",
            controller: "animalController"
        })
                .state("app.animalCreate", { //admin create function
                    url: '/animals/new',
                    templateUrl: "./views/animals-form.html",
                    controller: "animalController"
                })
                .state("app.animal", { //user show for animals -- add buttons for admin
                    url: '/animals/:id',
                    templateUrl: "./views/animal.html",
                    controller: "animalController"
                })
                .state("app.animalUpdate", { //admin update function
                    url: '/animals/:id/edit',
                    templateUrl: "./views/animals-form.html",
                    controller: "animalController"
                })

})