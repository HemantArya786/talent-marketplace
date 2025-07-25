
import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"
import AuthRouter from "./Routes/Auth.routes.js";

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api', AuthRouter)

mongoose.connect(process.env.MONGODB_CONNECTION).then(() => {
    console.log("Database connected succesfully!")

    app.listen(PORT, () => {
        console.log(`Server running succesfully on ${PORT}`)
    })
}).catch((err) => {

    // console.log("Mongo URI:", process.env.MONGODB_CONNECTION);
    throw new Error("database connection failed", err)
})

