var express=require('express');
var path=require('path');
const app=express();
app.set("view engine","ejs");
app.set("views","./src/views");
app.use(express.static(path.join(__dirname,"/Public")));

app.get("/",function(req,res){
    res.render("index",{nav:[{link:"/book",title:"Book"},{link:"/Author",title:"Author"}],title:"Library"})
})

app.listen(8080,function(){
    console.log("server started listening...")
})