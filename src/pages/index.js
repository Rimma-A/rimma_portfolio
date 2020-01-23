import React from "react";
import "../styles/styles.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About />
    <Projects />
    <ContactMe />
  </div>
);

export default IndexPage;
