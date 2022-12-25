//components
import ScoreBoard from "./components/ScoreBoard";
import Selections from "./components/Selections";

function App() {
  return <div className="App flex-col">
    <ScoreBoard/>
    <Selections/>
    <button className="rules-btn">Rules</button>
  </div>;
}

export default App;
