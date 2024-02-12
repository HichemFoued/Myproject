const mongoose =require("mongoose");
const Prod=mongoose.model("Prod",{
    title:String,
    price:String,
    image:String

})
module.exports=Prod;