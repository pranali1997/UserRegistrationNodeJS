assert=require('chai').assert;

var userReg=require('../main/UserRegistration.js');


describe('First Name Validation',function(){
    it('given parameter of function is empty should return false',function(){
        assert.equal(false,userReg.userRegistration());
    }),
    it('given first name is null should return false',function(){
        assert.equal(false,userReg.userRegistration(null,"firstName"));
    }),
    it('given first name is empty should return false',function(){
        assert.equal(false,userReg.userRegistration("","firstName"));
    }),
    it('given first name is undefined should return false',function(){
        assert.equal(false,userReg.userRegistration(undefined,"firstName"));
    }),
    it('given first name is correct',function(){
        assert.equal(true,userReg.userRegistration("Pranali","firstName"));
    }),
    it('given first name is in number should return false',function(){
        assert.equal(false,userReg.userRegistration("1234","firstName"));
    }),
    it('given second letter of first name if capital should return false',function(){
        assert.equal(false,userReg.userRegistration("PLembhe","firstName"))
    }),
    it('given first letter of capital is small of first name should return false',function(){
        assert.equal(false,userReg.userRegistration("pranali","firstName"))
    }),
    it('given first name have less than three letters should return false',function(){
        assert.equal(false,userReg.userRegistration("Pr","firstName"))
    }),
    it('given first name contains number should return false',function(){
        assert.equal(false,userReg.userRegistration("Pra23","firstName"))
    }),
    it('given first name should not contains special symbols',function(){
        assert.equal(false,userReg.userRegistration("Name@er","firstName"))
    }),
    it('given first name should not contain spaces',function(){
        assert.equal(false,userReg.userRegistration("Pranali lembhe","firstName"))
    })
})


describe('Last Name Validation',function(){
    it('given parameter of function is empty should return false',function(){
        assert.equal(false,userReg.userRegistration());
    }),
    it('given last name is null should return false',function(){
        assert.equal(false,userReg.userRegistration(null,"lastName"));
    }),
    it('given last name is empty should return false',function(){
        assert.equal(false,userReg.userRegistration("","lastName"));
    }),
    it('given last name is undefined should return false',function(){
        assert.equal(false,userReg.userRegistration(undefined,"lastName"));
    }),
    it('given last name is correct',function(){
        assert.equal(true,userReg.userRegistration("Pranali","lastName"));
    }),
    it('given last name is in number should return false',function(){
        assert.equal(false,userReg.userRegistration("1234","lastName"));
    }),
    it('given second letter of last name if capital should return false',function(){
        assert.equal(false,userReg.userRegistration("PLembhe","lastName"))
    }),
    it('given first letter of capital is small of last name should return false',function(){
        assert.equal(false,userReg.userRegistration("pranali","lastName"))
    }),
    it('given last name have less than three letters should return false',function(){
        assert.equal(false,userReg.userRegistration("Pr","lastName"))
    }),
    it('given last name contains number should return false',function(){
        assert.equal(false,userReg.userRegistration("Pra23","lastName"))
    }),
    it('given last name should not contains special symbols',function(){
        assert.equal(false,userReg.userRegistration("Name@er","lastName"))
    }),
    it('given last name should not contain spaces',function(){
        assert.equal(false,userReg.userRegistration("Pranali lembhe","lastName"))
    })
})

describe('Email Validation',function(){
    it('given email should not be undefined',function(){
        assert.equal(false,userReg.userRegistration())
    }),
    it('given email is null should return false',function(){
        assert.equal(false,userReg.userRegistration(null,"email"));
    }),
    it('given email is empty should return false',function(){
        assert.equal(false,userReg.userRegistration("","email"));
    }),
    it('given email is undefined should return false',function(){
        assert.equal(false,userReg.userRegistration(undefined,"email"));
    }),
    it('given email is correct',function(){
        assert.equal(true,userReg.userRegistration("pranali.lembhe77@gmail.com","email"));
    }),
    it('given email is in number should return false',function(){
        assert.equal(false,userReg.userRegistration("1234","email"));
    }),
    it('given email address should not contains special letter at starting position',function(){
        assert.equal(false,userReg.userRegistration("@pranali.lembhe@gmail.com","email"))
    }),
    it('given email should have contain a . + - or _ between two words',function(){
        assert.equal(true,userReg.userRegistration("pranali_lembhe@gmail.com","email"))
    })
})

describe('Password Validation',function(){
    it('given password should not be undefined',function(){
        assert.equal(false,userReg.userRegistration())
    }),
    it('given password name is null should return false',function(){
        assert.equal(false,userReg.userRegistration(null,"password"));
    }),
    it('given password is empty should return false',function(){
        assert.equal(false,userReg.userRegistration("","password"));
    }),
    it('given password is undefined should return false',function(){
        assert.equal(false,userReg.userRegistration(undefined,"password"));
    }),
    it('given password name is correct',function(){
        assert.equal(true,userReg.userRegistration("Pranali#123","password"));
    }),
    it('given password is in number should return false',function(){
        assert.equal(false,userReg.userRegistration("1234","password"));
    }),
    it('given password contains no special letter should return false',function(){
        assert.equal(false,userReg.userRegistration("pranali122","password"))
    })
})