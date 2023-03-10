import express from "express";
import {} from "dotenv/config"
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import multer from "multer"


// using multer for disk storage

export const storage=multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, '../frontEnd/public/upload')
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})




const app=express();
app.use(express.json())
// to make sure cookies are being send effectively
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true);
    next()
})


// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-origin", true);
//     next()
// })

app.use(cookieParser());
app.use(
    cors({
    origin: "http://localhost:3000"
    }
))


app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
// upload our image here

const upload=multer({storage:storage})

// end point here

app.post("/api/upload", upload.single("file"), (req, res)=>{
    const file=req.file;
    res.status(200).json(file.filename);
})


const PORT=process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
