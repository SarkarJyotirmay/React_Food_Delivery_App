import { useState } from "react";
import axios from "axios";

const FindRecipe = () => {
  const [dish, setDish] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRecipe = async () => {
    if (!dish.trim()) return;
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
      setRecipe("Failed to fetch recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h2 style={{ color: "tomato", marginBottom: "1rem" }}>AI Recipe Generator</h2>
      <input
        type="text"
        placeholder="Enter a dish name (e.g., Paneer Butter Masala)"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      />
      <button
        onClick={fetchRecipe}
        disabled={loading}
        style={{
          background: "#6b69b2",
          color: "white",
          padding: "0.75rem 1.5rem",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {loading ? "Loading..." : "Get Recipe"}
      </button>

      {recipe && (
        <div
          style={{
            marginTop: "2rem",
            whiteSpace: "pre-wrap",
            background: "#fefefe",
            padding: "1.5rem",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          {recipe}
        </div>
      )}
    </div>
  );
};

export default FindRecipe;
