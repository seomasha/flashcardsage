import express from "express";
import { createDeck } from "../controllers/deckController";

const router = express.Router();

router.post("/", createDeck);

export default router;
