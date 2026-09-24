import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero.jsx"
import Category from "./Pages/Category.jsx"
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
