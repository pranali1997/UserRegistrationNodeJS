module.exports = {

    userRegistration(name, detailType) {

        var firstNamePattern = "^[A-Z]{1}[a-z]{2,}$"
        var lastNamePattern = "^[A-Z]{1}[a-z]{2,}$"
        var emailIdPattern = "^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$";
        var passwordPattern = "((?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{7,})*[+@#$%^&*!.()-]{1}";


        if (typeof (name) == undefined) {
            return false;
        }
        if (name == undefined) {
            return false;
        }
        if (typeof (name) == Number) {
            return false;
        }

        switch (detailType) {
            case "firstName":
                if (name.match(firstNamePattern)) {
                    return true;
                }
                return false
            case "lastName":
                if (name.match(lastNamePattern)) {
                    return true;
                }
                return false
            case "email":
                if (name.match(emailIdPattern)) {
                    return true;
                }
                return false
            case "password":
                if (name.match(passwordPattern)) {
                    return true;
                }
                if (typeof (name) != NaN) {
                    return false
                }
                return false
            
        }

    }
}

