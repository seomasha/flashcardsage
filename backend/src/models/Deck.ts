import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const DeckModel = mongoose.model("Deck", DeckSchema);

export default DeckModel;
