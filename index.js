import express, { Router } from "express"
import connectDb from "./config/db.js"
import userRouter from "./routes/userRoutes.js"

const app = express();

const PORT = 3000;
app.use(express.json())

// call mongoDb function
connectDb();

app.use("/user",userRouter);

app.get("/", (req, res) => {
    res.send(`Home Page`);
});


app.listen(PORT, () => {
    console.log(`Server Is Running At Port : ${PORT}`);
});