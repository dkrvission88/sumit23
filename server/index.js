import dotenv from 'dotenv'
dotenv.config();
import express from "express";
const app = express();
import { connectDb } from "./utils/db.js";
import subscribeRouter from './routers/subscribe-router.js';
import contactUsRouter from './routers/contactUs-router.js';
import getInTouchRouter from './routers/getInTouch-router.js';
import contractorRouter from './routers/contractor-router.js';
import userRouter from './routers/user-router.js';
import cors from "cors"; 
import morgan from "morgan";

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(morgan("dev")); //logs which api route has been called and other info
app.use("/api/auth", userRouter);
app.use("/api/auth", contractorRouter)
app.use("/api/auth", subscribeRouter);
app.use("/api/auth", contactUsRouter);
app.use("/api/auth", getInTouchRouter)

const PORT = 8000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});


app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
