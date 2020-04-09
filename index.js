var email = require('./Controle/nodemaile.js')

var content = require('./json/radio.json')

var timer = 10000

content.forEach(function (element1, index, array) {

    setTimeout(function(){
        email.enviarEmail(Object.values(element1)) 
    
    }, timer);
    timer = timer + 10000
})



