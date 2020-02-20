module.exports = {

    userRegistration(name, detailType) {
        if (typeof (name) == undefined) {
            return false;
        }
        if (name == undefined) {
            return false;
        }
        if (typeof (name) == Number) {
            return false;
        }
        if (detailType == "firstName") {
            var firstNamePattern = "^[A-Z]{1}[a-z]{2,}$"
            if (name.match(firstNamePattern)) {
                return true;
            }
        }
        if (detailType == "lastName") {
            var lastNamePattern = "^[A-Z]{1}[a-z]{2,}$"
            if (name.match(lastNamePattern)) {
                return true;
            }
        }
        if (detailType == "email") {
            var emailIdPattern = "^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$";
            if (name.match(emailIdPattern)) {
                return true;
            }
        }
        if (detailType == "password") {
            
            var passwordPattern = "((?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{7,})*[+@#$%^&*!.()-]{1}";
            if (name.match(passwordPattern)) {
                return true;
            }
            if(typeof(name)!=NaN){
                return false
            }
        }

        else
            return false;

    }
}