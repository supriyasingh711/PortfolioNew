import express from 'express';
import { getPortfolioData } from '../controller/portfolioController';

const router=express.Router();

router.get('/get-portfolio-data',getPortfolioData);

export default router;