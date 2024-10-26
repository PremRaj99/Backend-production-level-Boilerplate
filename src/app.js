import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"))

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// import you API routers
import authRouter from './routes/auth.route.js'


// define your API routers
app.use("/api/v1/auth", authRouter)
// app.use("/api/v1/auth", authRouter)

export default app;
