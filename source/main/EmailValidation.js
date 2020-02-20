
function emailReg(email){
    var emailIdPattern = "^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$";

    var emailIds = {
        1: "abc@yahoo.com",
        2: "abc-100@yahoo.com",
        3: "abc.100@yahoo.com",
        4: "abc111@abc.com",
        5: "abc-100@abc.net",
        6: "abc.100@abc.com.au",
        7: "abc@1.com",
        8: "abc@gmail.com.com",
        9: "abc@.com.my",
        10: "abc123@gmail.a",
        11: "abc123@.com",
        12: "abc123@.com.com",
        13: ".abc@abc.com",
        14: "abc()*@gmail.com",
        15: "abc@%*.com",
        16: "abc..2002@gmail.com",
        17: "abc.@gmail.com",
        18: "abc@abc@gmail.com",
        19: "abc12@gmailcom.1a",
        20: "abcgmail.com.aa.au"
    }
    
    for (var email in emailIds) {        
        if (emailIds[email].match(emailIdPattern)) {
            console.log('emails------------>',emailIds[email]);
            console.log(true);
        }
        else{
            console.log('emails------------>',emailIds[email]);
            console.log(false);
            
        }
    }
}
emailReg();