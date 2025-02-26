import express from "express";
import deckRoutes from "./routes/deckRoutes";
import connectDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/decks", deckRoutes);

export default app;
