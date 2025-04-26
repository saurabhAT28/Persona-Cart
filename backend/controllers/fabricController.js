import { v2 as cloudinary } from "cloudinary";
import fabricModel from "../models/fabricModel.js";


// Function for add product
const addFabric = async (req, res, next) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        )

        // console.log(name, description, price, category, subCategory, sizes, bestseller);


        const fabricData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()

        }

        console.log(fabricData);

        const product = new fabricModel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


// Function for list products
const listFabric = async (req, res, next) => {
    try {
        const fabric = await fabricModel.find({});
        // console.log(products);
        res.json({ success: true, fabric });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        // next(error);
    }
}


// Function for remove product
const removeFabric = async (req, res, next) => {
    try {
        await fabricModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        // next(error);
    }
}


// Function for single product info
const singleFabric = async (req, res, next) => {
    try {
        const { fabricId } = req.body;
        const fabric = await fabricModel.findById(fabricId);

        res.json({ success: true, fabric })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        // next(error);
    }
}


export { addFabric, listFabric, removeFabric, singleFabric }








