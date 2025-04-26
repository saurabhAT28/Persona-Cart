import express from "express";
import {addFabric, listFabric, removeFabric, singleFabric} from '../controllers/fabricController.js';
import upload from '../middleware/multer.js'
import adminAuth from "../middleware/adminAuth.js";

const fabricRouter=express.Router();


fabricRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addFabric);
fabricRouter.post('/remove',adminAuth,removeFabric);
fabricRouter.post('/single',singleFabric);
fabricRouter.get('/list',listFabric);


export default fabricRouter;








