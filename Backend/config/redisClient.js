
const redis=require("redis")

//connect to MongoDB
// mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })

const redisClient=redis.createClient();

redisClient.connect()
redisClient.on("error",(err)=>console.error("Redis error",err));
redisClient.connect().then(()=>console.log("Connected to Redis"));

module.exports=redisClient

