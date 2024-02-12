const express =require ("express");


require("./config/connect");
const app =express();
app.use(express.json())
const productRoute=require("./routes/product")
const userRoute=require("./routes/user")

//localhost:3003/product/create
app.use("/product",productRoute)
app.use("/user",userRoute)
app.use("/getimage", express.static("./uploadfile"));


app.listen(3003, ()=>{
    console.log("server  is running");
})
