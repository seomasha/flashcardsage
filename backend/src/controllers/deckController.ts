import { Request, Response } from "express";
import Deck from "../models/Deck";

export const createDeck = async (req: Request, res: Response) => {
  try {
    const newDeck = new Deck({ title: req.body.title });
    const savedDeck = await newDeck.save();
    res.status(201).json(savedDeck);
  } catch (error) {
    res.status(500).json({ error: "Failed to create deck" });
  }
};
