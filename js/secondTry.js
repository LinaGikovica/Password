
$(function() {
    let mail = $("#email");
    var pmail= $("#pmail");
    var myInput = $("#psw");
    var letter = $("#letter");
    var capital = $("#capital");
    var number = $("#number");
    var length = $("#length");
    var special = $("#special");
    
    
    let rules = [
        { r: /[a-z]/g, e: letter },
        {r: /[A-Z]/g, e: capital },
        { r: /[0-9]/g, e: number },
        { r: /[^A-Za-z0-9_]/g, e: special },
        { r: /.{8,}/g, e: length }
    ];

    function setValid(element, valid) {
        if(valid) {
            element.addClass("valid");
            element.removeClass("invalid");
        } else {
            element.addClass("invalid");
            element.removeClass("valid");
        }
    }
    
    function ihateyou() {
         for(var i = 0; i < rules.length; i++) {
            const rule = rules[i];
            let isMatch = myInput.val().match(rule.r)
            setValid(rule.e, isMatch);
        }
        
        let mailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g
        if(mail.val().match(mailRegex)) {
            setValid(pmail, true);
        } else {
            setValid(pmail, false);
        }
        
    }
    myInput.keyup(ihateyou);
    mail.keyup(ihateyou);
});

 // https://i.imgur.com/l0GFVKx.jpg
