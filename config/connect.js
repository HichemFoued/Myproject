const mongoose =require ("mongoose");
mongoose.connect("mongodb://localhost:27017/Ecomerce")
.then(()=>{
    console.log("mongodbi is conected......")
}).catch((error)=>{
    console.log(error);
})
module.exports=mongoose;