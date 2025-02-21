import express from 'express'
import { Login, Logout, Signup } from '../controllers/Auth.controllers.js';

const router = express.Router();

//  auth router 

router.post("/signup", Signup);
router.post("/logout",Logout);
router.post("/login", Login);


export default router;