const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');
const axios = require("axios");
const bodyParser = require("body-parser");
 
 
 
app.get("/",(req,resp)=>{
    resp.send("app is working..")  //http://localhost:8000
}
);

const  userid = "108392535241800"
const access_token = "EAAKa7EyVgTABAA50Lg4ahPBQYHG7VcGVNSAhZADAIMKsy1MFSpCvPanCVZBbF2n5Fiyw6MomvMOzIkMCgzjLwTgsF1vGzVVri0a7M9fBVWJbnyaVUJfVzIGPCoGLavs1lq7N98KZB1ZCwiPJxeOI0UTFpItPKAnzPKmgMcAoX9vvqfbKnF1ch5yRVxcDLZBk9N5QsdU0uUiStsdVz6eym"
 
app.post("/fb",(req,res) =>{

    const text = req.body.text;
    const img = req.body.img;

    axios
    .post(`  ${userid}  ${img}   ${access_token} ${text}  `,
    null)
    .then(function(response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });
});




const port = process.env.PORT || 8000;

app.listen(port, ()=> {
    console.log(`server started on port ${port}`)
});

//db

mongoose.connect(process.env.MONGO_URI,{

    useNewUrlParser: true
    
    
})
.then(() => console.log("DB connected"));




 