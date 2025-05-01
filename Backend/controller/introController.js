const Intro=require('../models/Intro');
const redisClient=require('../config/redisClient')

const CACHE_KEY='portfolio:intro';

exports.getIntro=async(req,res)=>{
    try{
        const cached=await redisClient.get(CACHE_KEY);
        if(cached){
            return res.json(JSON.parse(cached));
        }
        const intro=await Intro.find({});
        await redisClient.set(CACHE_KEY,JSON.stringify(intro),{EX:2592000});
        res.json(intro);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"});
    }
}