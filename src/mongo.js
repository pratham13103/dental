const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@13@dental.9jmol.mongodb.net/?retryWrites=true&w=majority&appName=dental")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection