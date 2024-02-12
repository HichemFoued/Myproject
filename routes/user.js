
const express =require ("express");
const router=express.Router();



//************CREATE USERCRUD****************

const user = require("../modules/user");

router.post("/add",(req ,res)=>{
    const data=req.body;
    const usr=new User(data);
usr.save()
.then((usersaved)=>{
    res.send(usersaved)
    console.log(usr)
}).catch((error)=>{
    res.send(error)

})
})

    

//*******************GET ALL LES REQUESTES*********************************

router.get("/getall", async (req, res) => {
    try {
        const users = await User.find(); // Wait for the query to complete
        res.send(users);
    } catch (error) {
        res.status(500).send(error); // Send error with status code 500
    }
});
// ************GET BY ID*************************************************
router.get("/getbyid/:id",async(req,res)=>{
    try{
    myid=req.params.id;
    idd= await User.findOne({_id : myid})
    res.send(idd)
    }catch(error){
        res.send(error);
    }

})
// ***********************UPDATE REQUESTE********************************
router.put("/apdate/:id",async(req,res)=>{
    try {
        id =req.params.id
    newdata=req.body
   const updated=  await User.findByIdAndUpdate({_id :id } ,newdata)
   res.send(updated)
    } catch (error) {
        res.send(error)
    }
    
})

//******************* */ DELETE REQUESTE*********************
router.delete("/delete/:id",async(req, res)=>{
    try {
        id  = req.params.id;
       const  delteduser= await User.findByIdAndDelete({_id:id})
        res.send(delteduser)
    } catch (error) {
        res.send(error)
        
    }
})
module.exports=router ;