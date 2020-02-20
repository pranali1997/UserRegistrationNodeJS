module.exports = {

    firstNameReg(firstName) {
        var firstNamePattern = "^[A-Z]{1}[a-z]{2,}$"

        if (typeof (firstName) == undefined) {
            return false;
        }
        if (firstName == undefined) {
            return false;
        }
        if (typeof (firstName) == Number) {
            return false;
        }
        if (firstName.match(firstNamePattern)) {
            return true;
        }
        else
            return false;

    },


    lastNameReg(lastName) {
        var lastNamePattern = "^[A-Z]{1}[a-z]{2,}$"

        if (typeof (lastName) == undefined) {
            return false;
        }
        if (lastName == undefined) {
            return false;
        }
        if (typeof (lastName) == Number) {
            return false;
        }
        if (lastName.match(lastNamePattern)) {
            return true;
        }
        else
            return false;


    },

    emailRegistration(email){
        var emailIdPattern="^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$";
        if (typeof (email) == undefined) {
            return false;
        }
        if (email == undefined) {
            return false;
        }
        if (typeof (email) == Number) {
            return false;
        }
        
        if (email.match(emailIdPattern)) {
            return true;
        }
        else
            return false;
        
    },

    emailReg(email){
        var emailIdPattern="^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$";
    
        for (var email in emailIds) {  
            if (email.match(emailIdPattern)) {
                return true;
            }      
            
            else{
                return false;                
            }
        }
        if (email.match(emailIdPattern)) {
            return true;
        }
        else
            return false;

    },

    passWordReg(password){
        var passwordPattern="((?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{7,})*[+@#$%^&*!.()-]{1}";

        if (typeof (password) == undefined) {
            return false;
        }
        if (password == undefined) {
            return false;
        }
        if (typeof (password) == Number) {
            return false;
        }
        if (password.match(passwordPattern)) {
            return true;
        }
        else
            return false;


    }

    
}