import mongoose from 'mongoose'
import { ENV_VARS } from './envVARS.js';



export const connectDB = async () => {
    try {
        const con = await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log("CONNECTED TO momgoDB" + con.connection.host);
    } catch (error) {
        console.error("MONGODB NOT CONNECTED "+error.message);
        process.exit(1);
    }
    
} ;