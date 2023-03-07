import express from "express";
import {} from "dotenv/config"
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors"



const app=express();
app.use(express.json())


app.use(cookieParser());
app.use(cors())


app.use("/api/auth", authRoute)


const PORT=process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
