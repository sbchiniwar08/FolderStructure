const express = require('express');
const app =express();
const cors = require('cors');
const fs = require("fs");
const { ADDRCONFIG } = require('dns');
let list;
let files;
var url =  "../"

app.use(cors())
function getFiles(base,add){
    address = base + add;
fs.readdir(address,{withFileTypes:true},function(err,data){
    if(err) throw err;
    files = data.map((file)=>{
        console.log(file.name);
        return{
            name: file.name,
            type: file.isDirectory()
        }
    })
})
return files;
}
app.get('/',function(req,res){
    list =  getFiles(url,"");
    res.send(list);
});
app.listen(8080);

console.log("Hello World");