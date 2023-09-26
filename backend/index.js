const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const cors=require('cors');
const Razorpay = require('razorpay');
const app=express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'armscon'
})





/*const razorpay = new Razorpay({
    key_id: 'rzp_test_u461OiTH8F0HK7',
    key_secret: '5ERW59RJAIwW9r3gZIWxUc1b',
  });*/

app.get('/',(Req,res)=>{
    res.sendFile(__dirname + '/index.html');
    
})
app.post('/r',(req,res)=>{
    res.send(req.body);
    connection.connect(function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log('connected')
            const sql=`INSERT INTO userdata (fullname,college,contact,plan) VALUES('${req.body.fullname}','${req.body.college}','${req.body.contact}','${req.body.plan}')`;
            connection.query(sql,function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    console.log('done')
                }
            })
        }
    })
    res.end()
})


  
app.listen(8000)