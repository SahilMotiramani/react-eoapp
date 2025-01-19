const express=require("express");
const cors=require("cors");

const app=express();
app.use(cors());

app.get("/check",(req,res)=>{
    let num=req.query.number;
    let n=parseInt(num);
    let r=n%2===0?"event":"odd";
    res.json({"msg":r});
});
app.listen(9000,()=>{console.log("Server listening at 9000");});