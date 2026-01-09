import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function greet() {
    const response = await invoke<string>("greet", { name });
    setMessage(response);
  }

  return (
    <div className="container">
      <h1>Tauri + React 🚀</h1>

      <input
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Enter your name"
      />

      <button onClick={greet}>Greet</button>

      <p>{message}</p>
    </div>
  );
}

export default App;
