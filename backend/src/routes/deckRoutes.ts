import express from "express";
import { createDeck, getAllDecks } from "../controllers/deckController";

const router = express.Router();

router.post("/", createDeck);
router.get("/", getAllDecks);

export default router;
