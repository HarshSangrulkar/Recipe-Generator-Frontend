import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";

function App() {
  const [activeTab, setActiveTabe] = useState("image-generator");

  const handleTabChange = (tab) => {
    alert(tab);
    setActiveTabe(tab);
  };

  return (
    <div className="App">
      <button onClick={() => handleTabChange("image-generator")}>
        Image Generator
      </button>
      <button onClick={() => handleTabChange("chat")}>Ask AI</button>
      <button onClick={() => handleTabChange("recipe-generator")}>
        Recipe Generator
      </button>

      <div>
        {activeTab === "image-generator" && <h2>Image Generator</h2>}
        {activeTab === "chat" && <h2>Chat</h2>}
        {activeTab === "recipe-generator" && <h2>Recipe Generator</h2>}
      </div>
    </div>
  );
}

export default App;
