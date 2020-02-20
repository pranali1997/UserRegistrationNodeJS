var assert = require('chai').assert;

var emailIds1 = {
    1: "abc@yahoo.com",
    2: "abc-100@yahoo.com",
    3: "abc.100@yahoo.com",
    4: "abc111@abc.com",
    5: "abc-100@abc.net",
    6: "abc.100@abc.com.au",
    7: "abc@1.com",
    8: "abc@gmail.com.com"
}
var emailIds2={
    1: "abc@.com.my",
    2: "abc123@gmail.a",
    3: "abc123@.com",
    4: "abc123@.com.com",
    5: ".abc@abc.com",
    6: "abc()*@gmail.com",
    7: "abc@%*.com",
    8: "abc..2002@gmail.com",
    9: "abc.@gmail.com",
    10: "abc@abc@gmail.com",
    11: "abc12@gmailcom.1a",
    12: "abcgmail.com.aa.au"
}
function checkTrue() {
    for (var i in emailIds1) {
        if (emailIds1[i].match(("^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$"))) {
            var emailStatus1 = true
        }
        else {
            var emailStatus1 = false
        }
    }
    return emailStatus1
}


function checkFalse() {
    for (var i in emailIds2) {
        if (emailIds2[i].match(("^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$"))) {
            var emailStatus2 = true
        }
        else {
            var emailStatus2 = false
        }
    }
    return emailStatus2
}

    describe('Email Validation', function () {
        it('Check true emails', function () {
            var a = checkTrue()
            assert.equal(true,a);
        }),
        it('Check false emails', function () {
            var a = checkFalse()
            assert.equal(false,a);
        })
    });