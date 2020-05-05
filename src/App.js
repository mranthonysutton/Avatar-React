import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import Character from "./components/character/character";

function App() {
  return (
    <div className="container content-center px-10">
      <Route exact path="/" component={Character} />
    </div>
  );
}

export default App;
