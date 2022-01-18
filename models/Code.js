const mongoose=require('mongoose');

const codeSchema=new mongoose.Schema({
    code:{
        type:String,
        required:true
    },
    extension:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    }
})

const Code=new mongoose.model("code",codeSchema);
module.exports=Code;