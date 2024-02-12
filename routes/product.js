const express =require ("express");
const router=express.Router();
const Prd = require("../modules/product");
const multer=require("multer");
const Prod = require("../modules/product");
// ****************UPLOADE FILE ***************************
let filename = "";

const MyStorage = multer.diskStorage({
    destination: "./uploadfile",
    filename: (req, file, callback) => {
        let date = Date.now(); // Fixed 'date' to 'Date'
        let fl = date + '-' + file.mimetype.split('/')[1];
        callback(null, fl);
        filename = fl;
    }
});

const upload = multer({ storage: MyStorage });

//****************CREATE PRODUCTCRUD****************
router.post("/createprod", upload.any("image") ,async (req, res) => {
    try {
        const data = req.body;
        const usr = new Prd(data);
        usr.image =filename;
        filename='';
        const saveduser = await usr.save();
        res.send(saveduser)
    } catch (error) {
        res.status(500).send(error);
    }
});
// *********GETPRODUCT********************************
router.get("/producttall", async (req, res) => {
    try {
        const users = await Prd.find(); // Wait for the query to complete
        res.send(users);
    } catch (error) {
        res.status(500).send(error); // Send error with status code 500
    }
});




module.exports=router ;