import React from "react";
import "../src/fonts/fonts.css";
import "./App.css";
import {
  Card,
  Contents,
  Features,
  Footer,
  Header,
  Gallery,
  Partners,
  Testimonials,
} from "./containers";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="App background__bg">
      <Navbar />
      <Header />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
