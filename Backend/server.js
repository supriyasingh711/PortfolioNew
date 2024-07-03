
import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import connection from './config/dbConfig.js';

const app=express()
connection();

// mongoose.connect('mongodb+srv://singhsupriya90033:jEgG6kZgxY7T1sWk@mydata.hmwy570.mongodb.net/?retryWrites=true&w=majority&appName=MyData'
//    );
  
//   mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB Atlas');
//   });
  
//   mongoose.connection.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
//   });

app.get('/',(req,res)=>{
    res.send("server is ready");
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})
