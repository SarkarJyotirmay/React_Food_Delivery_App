import { useState, useRef } from "react";
import axios from "axios";
import styles from './find_recipie.module.css';

const FindRecipe = () => {
  const [dish, setDish] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

  const fetchRecipe = async () => {
    if (!dish.trim()) return;

    setLoading(true);
    setRecipe("");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", // ✅ matches your cURL
        {
          contents: [
            {
              parts: [
                {
                  text: `Give me a simple recipe for "${dish}". Include ingredients and steps.`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            key: import.meta.env.VITE_geminiApiKey, // ✅ use same API key as in your cURL
          },
        }
      );

      const result = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
      setRecipe(result || "No recipe found. Please try a different dish.");
    } catch (err) {
      console.error(err);
      setRecipe("❌ Failed to fetch recipe from Gemini API. Please check your API key and model.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchRecipe();
    }, 800);
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
        onClick={handleClick}
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
