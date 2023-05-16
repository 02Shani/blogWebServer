const router = require('express').Router();
let index=require('./server')
var nodemailer = require('nodemailer');


router.get('/sendMail',(req,res)=>{
    var transporter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port:587,
        secure:false,
        auth: {
            type: 'OAufdfdth2',
            user: 'za87879sdsd797911fsdfsd12f98@gmail.com',
            pass: '76767575fsdfsd76712',
            clientId: '818686816195-20m0i9879798798pr0dfsdfsdf5vro.apps.googleusercontent.com',
            clientSecret: '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dfyIn',
            refreshToken: '1//044w4SsADsnUoCgYIARAAGhjekrhgi87t954AQSNwF-LdfsdfsdfxD-oWPUfLCDljQGLrxKMD_JRfkmwLrjDQkq_ElUEi8JHDcfNTZl-A'
        }
      });
      
      var mailOptions = {
        from: 'zaynmauyazzzazasaasaszzzzzzzz8787611298@gmail.com',
        to: '78687687687ewrqw54234e3qwe23@edulab.in',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.json({
             status:404,
             message:error.message
          })
        } else {
         res.json(info);
        }
      });
})

module.exports=router
