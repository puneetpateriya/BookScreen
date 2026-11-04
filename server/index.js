const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const Booking = mongoose.model("Booking", new mongoose.Schema({
 movie:{type:String,required:true}, date:String, time:String,
 seats:[Number], amount:Number, createdAt:{type:Date,default:Date.now}
}));
app.get("/api/health",(_,res)=>res.json({status:"ok",service:"IMovies API"}));
app.post("/api/bookings",async(req,res)=>{
 try {
  const {movie,date,time,seats,amount}=req.body;
  if(!movie || !Array.isArray(seats) || seats.length===0) return res.status(400).json({error:"Movie and seats are required"});
  const booking=await Booking.create({movie,date,time,seats,amount});
  res.status(201).json({message:"Booking confirmed",booking});
 } catch(error){res.status(500).json({error:"Unable to save booking"});}
});
const port=process.env.PORT||5000;
if(process.env.MONGODB_URI){mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("MongoDB connected")).catch(err=>console.error("MongoDB connection failed:",err.message));}
app.listen(port,()=>console.log("IMovies API running on port "+port));
