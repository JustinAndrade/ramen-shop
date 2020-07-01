import React from "react";

import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Preview from "./components/menu-preview/preview";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Preview />
    </div>
  );
}

export default App;
