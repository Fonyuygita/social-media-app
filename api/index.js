import express from "express";
import {} from "dotenv/config"
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js"
import cookieParser from "cookie-parser";
import cors from "cors"



const app=express();
app.use(express.json())
// to make sure cookies are being send effectively
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true);
    next();
})

app.use(cookieParser());
app.use(
    cors({
    origin: "http://localhost:3000"
    }
))


app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)



const PORT=process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
