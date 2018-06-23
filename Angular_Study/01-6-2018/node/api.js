let express=require('express');
let cors=require('cors');
let bodyParser=require('body-parser');

let app=express();
app.use(cors());
app.use(bodyParser.json());
//api
app.post('/contact',function(req,res)
 {
   let name=req.body.name;
   let email=req.body.email;
   let mobile=req.body.mobile;
   console.log(name);
   res.json({'error':0,'name':name});
 })
app.listen(5657,function()
{
    console.log("Work on 5657");
})