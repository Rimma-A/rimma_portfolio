import React from "react";
import "../styles/styles.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About />
    <Projects />
  </div>
);

export default IndexPage;
