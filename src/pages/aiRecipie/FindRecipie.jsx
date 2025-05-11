import { useState } from "react";
import axios from "axios";
import styles from './find_recipie.module.css'; // Import the CSS module


const FindRecipe = () => {
  const [dish, setDish] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastCalled, setLastCalled] = useState(0); // For throttling
  const apiKey2 = "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"

  const fetchRecipe = async () => {
  if (!dish.trim()) return;

  const now = Date.now();
  const cooldown = 5000;

  if (now - lastCalled < cooldown) {
    setRecipe("Please wait a few seconds before trying again.");
    return;
  }

  setLastCalled(now);
  setLoading(true);
  setRecipe("");

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Give me a simple recipe for "${dish}". Include ingredients and steps.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_openAiApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data.choices[0].message.content;
    setRecipe(result);
  } catch (err) {
    if (err.response && err.response.status === 429) {
      setRecipe("Rate limit hit. Retrying in 5 seconds...");
      setTimeout(fetchRecipe, 5000);
    } else {
      setRecipe("Failed to fetch recipe. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className={styles.findRecipeContainer}>
      <h2 className={styles.findRecipeTitle}>AI Recipe Generator</h2>
      <input
        type="text"
        placeholder="Enter a dish name (e.g., Paneer Butter Masala)"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        className={styles.findRecipeInput}
      />
      <button
        onClick={fetchRecipe}
        disabled={loading}
        className={styles.findRecipeButton}
      >
        {loading ? "Loading..." : "Get Recipe"}
      </button>

      {recipe && (
        <div className={styles.findRecipeResult}>
          {recipe}
        </div>
      )}
    </div>
  );
};

export default FindRecipe;
