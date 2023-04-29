import "./styles/App.css";
import leaf from "./assets/images/leaf.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <p>⚛ cra-template</p>
        <img height={100} width={100} src={leaf} alt="Image of a leaf" />
      </header>
    </div>
  );
}

export default App;
