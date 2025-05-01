const mongoose=require('mongoose')

const introSchema=new mongoose.Schema({

    greetingText:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    }
    ,
    lastName:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    }
}
)

export const intro=mongoose.model('intro',introSchema);