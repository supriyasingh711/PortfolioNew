import mongoose from 'mongoose';

const connection=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`Error:${error.message
        }`)
        process.exit(1);
    }
}


export default connection;
