require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const charge=require('./chargeCardForm.js')


//Handlebars Middleware
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('views/images')); 

app.get('/',(req,res)=>{
    charge.getAnAcceptPaymentPage((response)=>{
        res.render('index',{myVar:response.getToken()})
        
    })
})

app.get('/complete', function (req, res) {
   res.render('complete') 
})
 
app.listen(3000)