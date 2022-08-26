import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <h1 className="text-3xl font-bold underline bg-slate-700 text-cyan-500 py-10">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
