

/*
module.exports.enviarEmail  = function (obj){
    console.log(`nome : `, obj[0])
    console.log(`email : `, obj[1])
    console.log(`plano: `, obj[2])
}*/

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});


module.exports.enviarEmail = function (obj) {
    
    var mailOptions = {
        from: 'Tv Cabo Mix',
        to: obj[1],
        subject: 'Tv Cabo Mix',
        html: '<html> <body style="width:100%;font-family:arial, ´helvetica neue´, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0; background-color: rgb(255, 255, 255);"> <div style="margin: auto;width: 70%;"> <img style="display: block; margin-left: auto; margin-right: auto; width: 100%; margin-bottom: 50px;" src="cid:header.png"/> <p style="margin-bottom: 20px;">Vimos, por meio deste instrumento, comunicar-lhe que conforme clausula 6.4 de seu CONTRATO, a OPERADORA no decorrer da prestação dos serviços de TV a cabo, poderá substituir, interromper, ter seus sinais suspensos ou ter sua numeração alterada, em decorrência  de problemas técnicos, verificação de pouca aceitação/interesse na maioria dos ASSINANTES ou até mesmo fatores que independem da vontade da OPERADORA. A ocorrência de tais fatos não gerará qualquer obrigação de aviso prévio ou responsabilidade de indenizar ou ressarcir o ASSINANTE.</p>     <p style="margin-bottom: 20px;">No entanto, comunicamos que deixaremos de transmitir alguns canais do seu plano a partir do dia 01 de maio de 2020, todavia, estamos em estudo para a inserção de novos canais na grade, como TV NOVO TEMPO, PRIME BOX BRASIL, MUSIC BRASIL e TRAVEL BOX BRASIL, que serão incluídos o mais breve possível. Segue a lista de canais que iremos transmitir a partir de 01 de maio de 2020: </p>       <p style="font-weight: bold;margin-bottom: 20px;">TV SENADO, TV CAMARA, TV GAZETA, CULTURA, NBR BRASIL, SBT, GLOBO, RECORD, BAND, SHOP TIME, TV ESCOLA, REDE TV, CANAL RURAL, TV BRASIL, TV CINE+, REDE VIDA, CANÇÃO NOVA, TV GENESIS, TV APARECIDA, FISH TV, NICKELODEON, EVANGELIZAR, RECORD NEWS, FUTURA, DISNEY JUNIOR, BOOMERANG, TNT, ESPN INTERNACIONAL, ESPN BRASIL, BAND SPORT, CARTOON NETWORK, DISNEY CHANNEL, DISCOVERY KIDS, DISCOVERY TURBO, ANIMAL PLANET, DISCONERY CHANNEL, ID DISCOVERY, TRAVEL & LIVING CHANNEL, DISCOVERY HOME & HEALTH, TCM, CINE BRASIL, CNN ESPANHOL, CNN INTERNACIONAL, VH1 e TV JUSTIÇA.</p>      <p style="font-weight: bold;margin-bottom: 20px;">É importante esclarecer que no mês de maio, seu plano terá novo valor, com desconto. Dessa maneira, certo de sua compreensão estamos a sua disposição para eventuais dúvidas. LIGUE ou venha nos visitar e saiba mais.</p>                            <img style="display: block; margin-left: auto; margin-right: auto; width: 100%; margin-bottom: 50px;" src="cid:footer.png"/> </div> </body> </html>', 
        attachments: [{
            filename: 'footer.png',
            path: './html/img/footer.png',
            cid: 'footer.png' //same cid value as in the html img src
        },{
            filename: 'header.png',
            path: './html/img/header.png',
            cid: 'header.png' //same cid value as in the html img src
        }
    ]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + obj[1]);
        }
    });

}
