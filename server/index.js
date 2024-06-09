require('dotenv').config();
const express=require('express');
const nodemailer=require('nodemailer');
const PORT=process.env.PORT;
const sendEmail=require('./controller/sendEmail');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

app.post('/submit',sendEmail);

app.listen(PORT,()=>{
    console.log('app is listening at port ',PORT);
});