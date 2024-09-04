import { Address } from "../Models/addressModel.js";

export const addAdress = async (req, res) => {
    let { fullname, address, city, state, country, pincode, phonenumber } = req.body;
    let userId = req.user;
    let userAddress = await Address.create(
       {
        userId,
        fullname,
        address,
        city,
        state,
        country,
        pincode,
        phonenumber
       }
    );
    res.json({message:'address added succefully',userAddress})
}


export const getAdress= async (req,res)=>{
    let userId = req.user._id || req.user.id || req.user; 
        let address=await Address.find({userId}).sort({createdate:-1})
        console.log(address)
    res.json({
        message: address[0] 
      
        
         
    })
}