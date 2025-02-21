import mongoose from "mongoose";


const  userschema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    }, username:{
        type:String,
        required:true,
    },
    image:{
        type:string,
        default:""
    },
    searchHistroy:{
        type:Array,
        default:[]
    }
})

 export const User = mongoose.model("User",userschema);