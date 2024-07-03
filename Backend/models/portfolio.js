import mongoose, { mongo } from "mongoose";
//to define diffrent schemas to store my details in the database

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

const aboutSchema=new mongoose.Schema({
    aboutImgURL:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const techSchema=new mongoose.Schema({
    skills:{
        type:Array,
        required:true 
    }
})

const experienceSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    period:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    technologies:{
        type:Array,
        required:true
    }
})

const contactSchema=new mongooseSchema({
    greetText:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    }
})

export const Intro=mongoose.model('Intro',introSchema);
export const About=mongoose.model('About',aboutSchema);
export const Experience=mongoose.model('About',experienceSchema);
export const Projects=mongoose.model('About',projectSchema);
export const Tech=mongoose.model('About',techSchema);
export const Contact=mongoose.model('About',contactSchema);

