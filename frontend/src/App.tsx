import { useEffect, useState } from "react";
import "./App.css";

type TDeck = {
  title: string;
  _id: string;
};

function App() {
  const [decks, setDecks] = useState<Array<TDeck>>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getAllDecks = async () => {
      const response = await fetch("http://localhost:3000/decks");
      const newDecks = await response.json();
      setDecks(newDecks);
    };

    getAllDecks();
  }, []);

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/decks", {
        method: "POST",
        body: JSON.stringify({
          title,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const deck = await response.json();
      setDecks([...decks, deck]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDeck = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/decks/${id}`, {
        method: "DELETE",
      });
      setDecks(decks.filter((deck) => deck._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Title</label>
        <input
          id="deck-title"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <button>Create deck</button>
      </form>

      <ul>
        {decks.map((deck) => (
          <>
            <li key={deck._id}>{deck.title}</li>
            <button
              style={{
                color: "red",
              }}
              onClick={() => deleteDeck(deck._id)}
            >
              Delete
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
