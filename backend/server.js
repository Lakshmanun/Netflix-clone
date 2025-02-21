import express from 'express'
import AuthRouter from "./router/Auth.router.js"
import homepage from "./router/Home.Router.js"
import { ENV_VARS } from './Config/envVARS.js';
import { connectDB } from './Config/db.js';

// app
const app = express();
app.use("/api/auth/v1/", AuthRouter);
app.use('/api/auth/v1', homepage)

// server

const PORT = ENV_VARS.PORT ; 
// const PORT = 4000; 
app.use(express.json())
app.listen(PORT, (req, res) => {
    console.log(`server is runnin in http//localhost:${PORT}`);  
    connectDB()
});
