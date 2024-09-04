import mongoose from "mongoose";

 //adress schema crate
const adressSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    fullname:{type:String,require:true},
    address:{type:String,require:true},
    city:{type:String,require:true},
    state:{type:String,require:true},
    country:{type:String,require:true},
    pincode:{type:String,require:true},
    phonenumber:{type:String,require:true},
    createdate:{type:Date,require:Date.now},

})

export const Address= mongoose.model('address', adressSchema)