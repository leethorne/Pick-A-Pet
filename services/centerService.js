app.service("centerService", function ($state, $http) {

    function Center(id, centerName, email, phone, street1, street2, city, state, zip, ) {
        this.id = id;
        this.centerName = centerName;
        this.email = email;
        this.phone = phone;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    var _centers = [];
    var _centerId = 0;

    _centers.push(new Center(_centerId++, "Friends of Long Beach Animals", "LBCanimals@zoom.net", "555-555-5555", "3815 Atlantic Ave", "Suite #800", "Long Beach", "CA", "90807"))
    _centers.push(new Center(_centerId++, "Irvine Animal Care Center", "OCcares@aol.com", "111-111-1111", "6443 Oak Canyon", "Suite 210", "Irvine", "CA", "92618"))
    _centers.push(new Center(_centerId++, "Seal Beach Animal Care Center", "SBACC@gmail.com", "000-000-0000", "1700 Adolfo Lopez Dr", "Suite A", "Seal Beach", "CA", "90740"))
    _centers.push(new Center(_centerId++, "Oregon Friends of Shelter Animals", "foreverfriends@gmail.com", "666-666-6666", "4240 SW 185th Ave", "Suite 69", "Beaverton", "OR", "97007"))
    _centers.push(new Center(_centerId++, "Oregon Dog Rescue", "PortlandLovesDogs@gmail.com", "356-234-1221", "6700 SW Nyberg St", "Building 3", "Tualatin", "OR", "97062"))

    this.getCenters = function () {
        return _centers
    }

    this.getCenterById = function (id) {
        if (id == "" || id == null || id == undefined) {
            console.log("No Param for center");
            var _center = {}
            return _center
        } 
        else {
            console.log("param for center");
            for (var i = 0; i < _centers.length; i++) {
                if (_centers[i].id == id) {
                    return _centers[i]
                }
            }
        }
    }

    this.addCenter = function (center) {
        center.id = _centerId++
            _centers.unshift(new Center(center.id, center.centerName, center.email, center.phone, center.street1, center.street2, center.city, center.state, center.zip))
            $state.go("app.centers")
    }

    this.updateCenter = function (center) {
        for (var i = 0; i < _centers.length; i++) {
            if (_centers[i].id == center.id) {
                _centers.splice(i, 1, center)
                $state.go("app.center", {
                    id: center.id
                })
            }
        }
    }

    this.deleteCenter = function (id) {
        for (var i = 0; i < _centers.length; i++) {
            if (_centers[i].id == id) {
                _centers.splice(i, 1);
                $state.go("app.centers")
            }
        }
    }

})