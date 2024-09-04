import mongoose from "mongoose";

//product schema crate
const productSchema= new mongoose.Schema({

    title:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:Number,require:true},
    category:{type:String,require:true},
    qty:{type:Number,require:true},
    imgSrc:{type:String,require:true},
    createdt:{type:Date,require:Date.now},

})

export const Product= mongoose.model("product",productSchema);