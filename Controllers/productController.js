import { Product } from "../Models/productModel.js";

/// add product
export const addProduct = async (req, res) => {
    const { title, description, price, category, qty, imgSrc } = req.body;
    try {
        let product = await Product.create({
            title,
            description,
            price,
            category,
            qty,
            imgSrc
        })
res.json({
message:"product added succefully...!",
product
})
    } catch (error) {
res.json(error.message)
    }
}


////get products
export const getProducts= async(req,res)=>{
    try {
        let product = await Product.find().sort({createdt:-1})
        res.json({message: "all products",product})
    
    } catch (error) {
        res.json(error.message)
    }
}

///find product by id 
export const getProductById= async(req,res)=>{
    const id= req.params.id;
    try {
        let product = await Product.findById({_id:id})
        if(!product) return res.json({message:'invalid id',})

            res.json({message:"specific product",product})

    
    } catch (error) {
        res.json(error.message)
    }
}


////update product by id 
export const updateProductById= async(req,res)=>{
    const id= req.params.id;
    try {
        let product = await Product.findByIdAndUpdate(id,req.body,{new:true})
        if(!product) return res.json({message:'invalid id',})

            res.json({message:"product has been updated",product})

    
    } catch (error) {
        res.json(error.message)
    }
}


////delete product by id 
export const deleteProductById= async(req,res)=>{
    const id= req.params.id;
    try {
        let product = await Product.findByIdAndDelete(id)
        if(!product) return res.json({message:'invalid id',})

            res.json({message:"product has been delete",product})

     
    } catch (error) {
        res.json(error.message)
    }
}


