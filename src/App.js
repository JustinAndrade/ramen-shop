import React from "react";

import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Preview from "./components/menu-preview/preview";
import Specials from "./components/Specials/specials";
import Takeout from "./components/Takeout/takeout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Preview />
      <Specials />
      <Takeout />
    </div>
  );
}

export default App;
