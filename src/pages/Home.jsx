import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { mobile } from "../responsive";
import styled from "styled-components";

const Heading = styled.h1`
font-weight: bold;
color:rgb(4, 5, 58);
${mobile({ fontSize: "50px" })}
margin-Left:600px;
margin-Top:10px;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
     
      <Categories />
      <Heading>Popular Products</Heading>
      <Products/>
    
      <Footer/>

      
    </div>
  );
};

export default Home;
