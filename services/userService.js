app.service("userService", function ($state) {

    var _users = [];
    var _userId = 0
    var currentUser = null;

    function User(id, firstName, lastName, email, password, phone, dob, street1, street2, city, state, zip, animalTypePref, isAdmin) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password
        this.phone = phone;
        this.dob = dob;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.animalTypePref = animalTypePref;
        this.isAdmin = isAdmin;
    }

    _users.push(new User(_userId++, "Haley", "Battis", "hbat@gmail.com", "password","222-222-2222", "7/26/90", "2105 E Florida St", "Apt 8", "Long Beach", "CA", "90814","cat", true))
    _users.push(new User(_userId++, "Justina", "Cerra", "jc12@gmail.com", "password","231-345-5432", "4/17/90", "22505 Ocean Ave", "Apt 2a", "Torrance", "CA", "90505", "cat", false ))
    _users.push(new User(_userId++, "Josh", "Gary", "jg2521@gmail.com", "password","555-666-5555", "01/25/84", "435 Nebraska Ave", "Apt 12", "Long Beach", "CA", "90814","dog", true ))
    _users.push(new User(_userId++, "Mackenzie", "Williams", "williams@gmail.com", "password","111-111-5432", "9/22/93", "262 Inglewood Ave", "Apt 2", "Manhattan Beach", "CA", "90278", "dog", false))
    _users.push(new User(_userId++, "Josh", "Lucas", "jluc4@gmail.com", "password","888-888-5432", "9/21/89", "2 Ocean Ave", "Apt 1", "Beaverton", "OR", "97008", "dog", false))
    _users.push(new User(_userId++, "Amanda", "Kitt", "akitt@gmail.com", "password","000-000-0000", "5/28/86", "30 Cherry Ave", "Apt 1", "Hood River", "OR", "97031", "dog", false ))
    _users.push(new User(_userId++, "Prima", "Giangrosso", "primapils@gmail.com", "password","111-111-1111", "4/1/87", "1000 E 4th St", "Apt 10a", "Portland", "OR", "97240", "cat", false))

    this.getUsers = function () {
        return _users
    }

    this.getUserById = function (id) {
        console.log(id)
        if (id == "" || id == null || id == undefined) {
            console.log("No Param on user");
            var _user = {}
            return _user
        } 
        else {
            console.log("Param on user!");
            for (var i = 0; i < _users.length; i++) {
                if (_users[i].id == id) {
                    return _users[i]
                }
            }
        }
    }

    //user can update their info from the button on user.html -- directs to user-form
    this.updateUser = function (user) { 
        for (var i = 0; i < _users.length; i++) {
            if (_users[i].id == user.id) {
                _users.splice(i, 1, user)
                $state.go("app.user", {id: user.id})
            }
        }
    }

    //user can delete their info from the user view. 
    this.deleteUser = function(id) {
        for (var i = 0; i < _users.length; i++) {
            if (_users[i].id == id) {
                _users.splice(i, 1)
                this.currentUser = null; //enables logout button to toggle back to login
                console.log(_users);
                $state.go("app.home") //no users page to view 
            }
        }
    }

    this.login = function (user) {
        for (var i = 0; i < _users.length; i++) {
            if (_users[i].email == user.email && _users[i].password == user.password) { // checking email and pw
                this.currentUser = _users[i] // setting current user
                console.log(this.currentUser);
                $state.go("app.user", { id: this.currentUser.id }) // navigate to user
            } 
        }
        return false;
    }

    this.register = function (user) {
        user.id = _userId++ // set the id
        _users.unshift(user) // add the user
        console.log(_users);
        $state.go("app.login").then(function() {
            alert("Congrats! You've successfully registered.\nYou may now log into your page!"); // navigate to login for user to now login. first receive window alert. 
        })
    }

    this.logout = function () {
        this.currentUser = null; // Set user back to null
        $state.go("app.login") // navigate back to login page
    }

    this.currentUser = null;
    this.getCurrentUser = function () {
        return this.currentUser;
    }
})