var express=require('express');
var path=require('path');
const app=express();
app.set("view engine","ejs");
app.set("views","./src/views");
app.use(express.static(path.join(__dirname,"/Public")));

app.get("/",function(req,res){
    res.render("index",{list:['book1','book2','book3'],title:"Library"})
})

app.listen(8080,function(){
    console.log("server started listening...")
})