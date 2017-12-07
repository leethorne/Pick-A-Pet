app.service("animalService", function ($state) {

    function Animal(id, animalType, animalName, animalImage, animalAge, breed, weight, sex, centerId) {
        this.id = id;
        this.animalType = animalType;
        this.animalName = animalName;
        this.animalImage = animalImage;
        this.animalAge = animalAge;
        this.breed = breed;
        this.weight = weight;
        this.sex = sex;
        this.centerId = centerId;
    }

    var _animals = [];
    var _animalId = 0;

    _animals.push(new Animal(_animalId++, "dog", "Taco", "./images/negative-space-cute-french-bulldog.jpg", "1", "French Bulldog", "28 Lbs", "Male", 4))
    _animals.push(new Animal(_animalId++, "dog", "Ranger", "./images/negative-space-close-up-of-dog-in-snow.jpg", "4", "Golden Retriever", "80 Lbs", "Male", 0))
    _animals.push(new Animal(_animalId++, "dog", "Pickle", "./images/negative-space-yorkie-small-dog-tookapic.jpg", "1", "Yorkshire Terrier", "13 Lbs", "Female", 2))
    _animals.push(new Animal(_animalId++, "dog", "Scout", "./images/negative-space-lab-puppy-dog-pixabay.jpg", "1", "Lab", "50 Lbs", "Male", 1))
    _animals.push(new Animal(_animalId++, "dog", "Silvie", "./images/negative-space-golden-retriever-dog-happy-foundry.jpg", "4", "Golden Retriever", "82 Lbs", "Female", 0))
    _animals.push(new Animal(_animalId++, "dog", "Avalanche", "./images/negative-space-white-dog-minimal-elliott-chau.jpg", "2", "Lab", "70 Lbs", "Female", 4))
    _animals.push(new Animal(_animalId++, "dog", "Jake", "./images/negative-space-dalmation-dog.jpg", "3", "Dalmation", "50 Lbs", "Male", 2))
    _animals.push(new Animal(_animalId++, "dog", "Barry", "./images/negative-space-closeup-sad-black-dog.jpg", "7", "Lab", "90 Lbs", "Male", 0))
    _animals.push(new Animal(_animalId++, "dog", "Sir Barks-a-lot", "./images/negative-space-pug-dog-wrapped-blanket-pixabay.jpg", "2", "Pug", "40 Lbs", "Male", 4))
    _animals.push(new Animal(_animalId++, "cat", "Java", "./images/cat-java.jpg", "8", "Nebelung Cat", "12 Lbs", "Female", 1))
    _animals.push(new Animal(_animalId++, "cat", "Voldemort", "./images/cat-voldemort.jpg", "2", "Bombay Cat", "8 Lbs", "Male", 3))
    _animals.push(new Animal(_animalId++, "cat", "Jinx", "./images/cat-jinx.jpg", "3", "Cymric Cat", "14 Lbs", "Female", 3))
    _animals.push(new Animal(_animalId++, "cat", "Thomas", "./images/cat-thomas.jpg", "1", "American Shorthair", "7 Lbs", "Male", 1))
    _animals.push(new Animal(_animalId++, "cat", "Humphrey", "./images/cat-humphrey.jpg", "2", "Turkish Van", "10 Lbs", "Male", 2))
    _animals.push(new Animal(_animalId++, "cat", "Jasper", "./images/cat-jasper.jpg", "3", "Birman Cat", "16 Lbs", "Female", 3))

    this.getAnimals = function () {
        return _animals
    }

    this.getAnimalById = function (id) {
        if (id == "" || id == null || id == undefined) {
            console.log("No Param for animal");
            var _animal = {}
            return _animal
        } 
        else {
            console.log("Param for animal!");
            for (var i = 0; i < _animals.length; i++) {
                if (_animals[i].id == id) {
                    return _animals[i]
                }
            }
        }
    }

    this.addAnimal = function (animal) {
        animal.id = _animalId++
            _animals.unshift(new Animal(animal.id, animal.animalType, animal.animalName, animal.animalImage, animal.animalAge, animal.breed, animal.weight, animal.sex, animal.centerId))
            $state.go("app.animals")
    }

    this.updateAnimal = function (animal) {
        for (var i = 0; i < _animals.length; i++) {
            if (_animals[i].id == animal.id) {
                _animals.splice(i, 1, animal)
                $state.go("app.animal", {
                    id: animal.id
                })
            }
        }
    }

    this.deleteAnimal = function (id) {
        for (var i = 0; i < _animals.length; i++) {
            if (_animals[i].id == id) {
                _animals.splice(i, 1);
                $state.go("app.animals")
            }
        }
    }
})