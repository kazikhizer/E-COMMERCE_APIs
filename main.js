import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/userRoute.js';
import bodyparser from "express";
import { productRouter } from './Routes/productRoute.js';
import { cartRouter } from './Routes/cartRoute.js';
import addressRouter from './Routes/addressRoute.js';
import { paymentRouter } from './Routes/paymentRoute.js';
const app= express();
const port= 5000;
app.use(bodyparser.json());


//testing route
app.get("/",(req,res)=>{
    res.json({message:"this is home route"})
})


//user router 
app.use('/api/user',userRouter)

////product Rotuer
app.use('/api/product',productRouter)

///cart Routers
app.use("/api/cart",cartRouter);

///address router
app.use("/api/address", addressRouter)

//payment routers 
app.use("api/payment",paymentRouter)

mongoose.connect("mongodb+srv://kazikhizeroddin8852:h5cqQ0Ss1BYb93OC@cluster0.bx7m2nv.mongodb.net/",{
    dbName: "E-Commerce-API"
}).then(()=>{
    console.log("MongoDB Connected succefully....!");
}).catch((err)=>{
console.log(err);

})



app.listen(port,()=>{
    console.log("server strarted 5000 port ");
    
});
