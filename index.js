const express = require("express");
const { appendFile } = require("fs");
const mongoose = require("mongoose");

const aap = express();

const connect = ()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/practice");
} 

const userSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName :{type:String,required:false},
    email:{type:String,required:true},
    password:{type:String,required:true},
    createdAt:{type:Date,required:true,default:Date.now},
});

const userModel = mongoose.model("user",userSchema);

const TodoSchema = mongoose.Schema({
    title:{type:String,required:true},
    createdAt:{type:Date,required:true,default:Date.now},

    userid:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Todomodel = mongoose.model("todo", TodoSchema);

app.get("/todos", async (req,res)=>{
   let todo = await Todo.find({}).lean().exec();
    res.send(todo);

})

app.get("/todos/:id", async (req,res)=>{

    let todo = await findByid(req.params.id).lean().exec();
    res.send(todo);
})




app.listen(5000, ()=>{
    console.log("listening at 5000");
})