import express from "express";
import deckRoutes from "./routes/deckRoutes";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/decks", deckRoutes);

export default app;