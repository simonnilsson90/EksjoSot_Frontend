import React from "react";
import HomePage from "./views/HomePage";
import Navbar from "./components/NavbarComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
