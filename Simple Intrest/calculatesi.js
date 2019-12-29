express=require("express");
app=express();
fs=require("fs");
mymodule=require("./module");
bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("simpleinterest.html",{root:__dirname});
    console.log("file send to response");
});

app.post("/calculate",function(req,resp){
    result=mymodule.simpleinterest(req.body.num1,req.body.num2,req.body.num3);
	

     resp.send("simple interest: "+result);
	 console.log("o/p is send to  response");
});
app.listen(3000,function(){
	console.log("server started on port 2304");
})