const mongoose =require("mongoose");
const User=mongoose.model("user",{
    name: String ,
    lastname:String
})
module.exports=User;