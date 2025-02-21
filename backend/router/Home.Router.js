
import express from 'express'
import { Homepage } from '../controllers/Home.controller.js';

const router = express.Router();

//  auth router 

router.get("/homepage", Homepage);



export default router;


