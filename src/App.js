import React from "react";

import { Header, About, Skills, Portfolio } from "./containers";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import NavBar from "./components/NavBar/NavBar";
import { images } from "./constants";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <img className="logo" src={images.digitalNetwork} alt="digital-brain" />
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
