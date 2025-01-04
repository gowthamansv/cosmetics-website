import express from "express";
import dotenv from "dotenv";
import ProductesRouter from "../routes/Products.js";
import { error } from "console";

dotenv.config();

const app = express();
app.use('/product',ProductesRouter)
const PORT = process.env.PORT|| 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}).on("error",(error)=>{
    throw new Error(error.message)
})