import { Payment } from "../Models/paymentModel.js";
import Razorpay from 'razorpay';
import dotenv from 'dotenv'
dotenv.config();
// rzp_test_jMgBY81wOysj0c=id
// xEk5HJKLfrhHG8IV2hOBebK7=secratecls
// const Razorpay = require('razorpay');
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.envRAZORPAY_KEY_SECRET
});

///checkout
export const checkOut = async (req, res) => {
    const { amount, cartitems, userShipping, userId } = req.body;

    var options = {
        amount: amount * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: `receipt_${Date.now}`
    };
    const order = await razorpay.orders.create(options,);
    res.json({
        order_id: order.id,
        amount: amount,
        cartitems,
        userShipping,
        userId,
        payStatus: "created"
    })
}

//verify , save to db
export const verify = async (req, res) => {
    const { orderId,
        paymentId,
        signature,
        amount,
        orderItems,
        userId,
        userShipping } = req.body;

    let orderConfirm= await Payment.create({
        orderId,
        paymentId,
        signature,
        amount,
        orderItems,
        userId,
        userShipping,
         payStatus: "Paid"
    });
    res.json({
        message:'payment successfulll.....',
        success: true,
        orderConfirm
    })
}


///user specific order
export const userOrder = async(req,res)=>{
    let userId= req.user._id.toString();
    let orders = await Payment.find({userId:userId}).sort({orderDate :-1})

}

///alll orders
///user specific order
export const allOrder = async(req,res)=>{
    let userId= req.user._id.toString();
    let orders = await Payment.find().sort({orderDate :-1})

}