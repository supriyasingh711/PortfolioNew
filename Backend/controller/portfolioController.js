import {
    intro,
    about,
    techs,
    experiences,
    projects,
    contact
  } from '../models/portfolioModel.js';
  import redisClient from '../config/redisClient.js';
  
  export const getPortfolioData = async (req, res) => {
    const CACHE_KEY = 'portfolio:data';
    try {
      const cached = await redisClient.get(CACHE_KEY);
      if (cached) {
        console.log('✅ Served from Redis');
        return res.status(200).json(JSON.parse(cached));
      }
  
    
      const intros = await intro.find();
      const abouts = await about.find();
      const project = await projects.find();
      const tech = await techs.find();
      const contacts = await contact.find();
      const experience = await experiences.find();
    
      const data={
        intro: intros[2],
        about: abouts[0],
        projects: project,
        contact: contacts[0],
        experiences: experience,
        techs: tech
    }
    if (cached) {
        console.log("✅ Served from Redis");
        return res.status(200).json(JSON.parse(cached));
      }
      await redisClient.set(CACHE_KEY, JSON.stringify(data), { EX: 60 * 60 * 24 * 30 });
  
      console.log('⏳ Served from MongoDB and cached');
      res.status(200).json(data);
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server Error' });
    }
  };
  