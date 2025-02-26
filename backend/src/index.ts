import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";

const app = express();

app.use(express.json());

const PORT = 3000;

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

const db = mongoose
  .connect(
    "mongodb+srv://maseticsead:VTV27VGbofok90fx@cluster0.lijiq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}.`);
    });
  });
