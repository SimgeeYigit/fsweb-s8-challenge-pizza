import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Siparis from "./Siparis";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

import "./HomePage.css";

export default function HomePage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order"); 
  };

  return (
    <>
      <Header handleClick={handleClick}/>
      <Navbar />
      <Siparis handleClick={handleClick}/>
      <Footer />
    </>
  );
}
