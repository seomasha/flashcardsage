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

export const getAllDecks = async (req: Request, res: Response) => {
  try {
    const decks = await Deck.find();
    res.status(200).json(decks);
  } catch (e) {
    res.status(500).json({ error: "Failed to get decks." });
  }
};

export const deleteDeckById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deck = await Deck.findByIdAndDelete(id);
    res.status(201).json(deck);
  } catch (e) {
    res.status(500).json({ error: "Failed to delete deck." });
  }
};
