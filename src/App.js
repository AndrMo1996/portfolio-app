import React from "react";

import { Header, About, Skills, Portfolio } from "./containers";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import NavBar from "./components/NavBar/NavBar";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <BottomMenu />
      <Header />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default App;
