import { User } from "../Models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


////user register 
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        let user = await User.findOne({ email });
        if (user) return res.json({
            success: false,
            message: "User already existing" 
        })
        const hashpassword = await bcrypt.hash(password, 10);

        user = await User.create({ name, email, password:hashpassword })
        res.json({
            message: "user register successfully....!",
            success: true,
            user
        })


    } catch (error) {
        res.json({ message: error.message })
    }

}


///user login
export const login = async (req,res)=>{

const {email, password}=req.body;
    try {
         let userlg = await User.findOne({email});
         if(!userlg) return res.json({
            message:"user not found",
             success:false
            })

const validpassword= await bcrypt.compare(password, userlg.password);

if(!validpassword) return res.json({
    message: "invalid creditial ", 
    success :false
})
const token= jwt.sign({userId:userlg._id},"!@#$%^&*()",{
    expiresIn:"365d"
})
 res.json({message:`welcome ${userlg.name}`,token, success:true,})

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}


////Get All Users
export const users= async (req,res)=>{
    try {
        let users= await User.find().sort({createdate:-1})
        res.json(users)
    } catch (error) {
        res.json(error.message)
    }
}

export const profile= async(req,res)=>{
    res.json({user:req.user});
}