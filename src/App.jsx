import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

//components
import ScoreBoard from "./components/ScoreBoard";
import Selections from "./components/Selections";
import Winner from "./components/Winner";

import rules from "./assets/image-rules.svg";

function App() {
  return (
    <div className="App flex-col">
      <ScoreBoard />
      <Routes>
        <Route path="/" element={<Selections />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>
      <button className="rules-btn">Rules</button>
    </div>
  );
}

export default App;
