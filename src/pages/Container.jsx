import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Container() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default Container;
