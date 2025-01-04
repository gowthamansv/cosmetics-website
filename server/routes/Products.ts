import express from "express"
const Router=express.Router();
Router.get('/',async(req,res)=>{
    res.send("test")
})
export default Router