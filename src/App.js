import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Character from "./components/character/character";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Character} />
    </div>
  );
}

export default App;
