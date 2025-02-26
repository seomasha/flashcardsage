import express from "express";
import {
  createDeck,
  deleteDeckById,
  getAllDecks,
} from "../controllers/deckController";

const router = express.Router();

router.post("/", createDeck);
router.get("/", getAllDecks);
router.delete("/:id", deleteDeckById);

export default router;
