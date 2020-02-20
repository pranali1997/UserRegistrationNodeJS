assert=require('chai').assert;

var userReg=require('../main/UserRegistration.js');


describe('First Name Validation',function(){
    it('given parameter of function is empty should return false',function(){
        assert.equal(false,userReg.firstNameReg());
    }),
    it('given first name is null should return false',function(){
        assert.equal(false,userReg.firstNameReg(null));
    }),
    it('given first name is empty should return false',function(){
        assert.equal(false,userReg.firstNameReg(""));
    }),
    it('given first name is undefined should return false',function(){
        assert.equal(false,userReg.firstNameReg(undefined));
    }),
    it('given first name is correct',function(){
        assert.equal(true,userReg.firstNameReg("Pranali"));
    }),
    it('given first name is in number should return false',function(){
        assert.equal(false,userReg.firstNameReg("1234"));
    }),
    it('given second letter of first name if capital should return false',function(){
        assert.equal(false,userReg.firstNameReg("PLembhe"))
    }),
    it('given first letter of capital is small of first name should return false',function(){
        assert.equal(false,userReg.firstNameReg("pranali"))
    }),
    it('given first name have less than three letters should return false',function(){
        assert.equal(false,userReg.firstNameReg("Pr"))
    }),
    it('given first name contains number should return false',function(){
        assert.equal(false,userReg.firstNameReg("Pra23"))
    }),
    it('given first name should not contains special symbols',function(){
        assert.equal(false,userReg.firstNameReg("Name@er"))
    }),
    it('given first name should not contain spaces',function(){
        assert.equal(false,userReg.firstNameReg("Pranali lembhe"))
    })
})


describe('Last Name Validation',function(){
    it('given parameter of function is empty should return false',function(){
        assert.equal(false,userReg.lastNameReg());
    }),
    it('given last name is null should return false',function(){
        assert.equal(false,userReg.lastNameReg(null));
    }),
    it('given last name is empty should return false',function(){
        assert.equal(false,userReg.lastNameReg(""));
    }),
    it('given last name is undefined should return false',function(){
        assert.equal(false,userReg.lastNameReg(undefined));
    }),
    it('given last name is correct',function(){
        assert.equal(true,userReg.lastNameReg("Pranali"));
    }),
    it('given last name is in number should return false',function(){
        assert.equal(false,userReg.lastNameReg("1234"));
    }),
    it('given second letter of last name if capital should return false',function(){
        assert.equal(false,userReg.lastNameReg("PLembhe"))
    }),
    it('given first letter of capital is small of last name should return false',function(){
        assert.equal(false,userReg.lastNameReg("pranali"))
    }),
    it('given last name have less than three letters should return false',function(){
        assert.equal(false,userReg.lastNameReg("Pr"))
    }),
    it('given last name contains number should return false',function(){
        assert.equal(false,userReg.lastNameReg("Pra23"))
    }),
    it('given last name should not contains special symbols',function(){
        assert.equal(false,userReg.lastNameReg("Name@er"))
    }),
    it('given last name should not contain spaces',function(){
        assert.equal(false,userReg.lastNameReg("Pranali lembhe"))
    })
})

describe('Email Validation',function(){
    it('given email should not be undefined',function(){
        assert.equal(false,userReg.emailRegistration())
    }),
    it('given email is null should return false',function(){
        assert.equal(false,userReg.emailRegistration(null));
    }),
    it('given email is empty should return false',function(){
        assert.equal(false,userReg.emailRegistration(""));
    }),
    it('given email is undefined should return false',function(){
        assert.equal(false,userReg.emailRegistration(undefined));
    }),
    it('given email is correct',function(){
        assert.equal(true,userReg.emailRegistration("pranali.lembhe77@gmail.com"));
    }),
    it('given email is in number should return false',function(){
        assert.equal(false,userReg.emailRegistration("1234"));
    }),
    it('given email address should not contains special letter at starting position',function(){
        assert.equal(false,userReg.emailRegistration("@pranali.lembhe@gmail.com"))
    }),
    it('given email should have contain a . + - or _ between two words',function(){
        assert.equal(true,userReg.emailRegistration("pranali_lembhe@gmail.com"))
    })
})

describe('Password Validation',function(){
    it('given password should not be undefined',function(){
        assert.equal(false,userReg.passWordReg())
    }),
    it('given password name is null should return false',function(){
        assert.equal(false,userReg.passWordReg(null));
    }),
    it('given password is empty should return false',function(){
        assert.equal(false,userReg.passWordReg(""));
    }),
    it('given password is undefined should return false',function(){
        assert.equal(false,userReg.passWordReg(undefined));
    }),
    it('given password name is correct',function(){
        assert.equal(true,userReg.passWordReg("Pranali#123"));
    }),
    it('given password is in number should return false',function(){
        assert.equal(false,userReg.passWordReg("1234"));
    }),
    it('given password contains no special letter should return false',function(){
        assert.equal(false,userReg.passWordReg("pranali122"))
    })
})