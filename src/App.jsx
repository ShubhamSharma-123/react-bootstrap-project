
import React from "react";
import Hero_Section from "./components/Hero_Section";
import Packages from "./components/Packages";
import TeamCarousel from "./components/TeamCarousel";
import NewsletterForm from "./components/NewsletterForm";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";




function App() {
  return (
    <>
        <Hero_Section/>
        <Packages/>
        <TeamCarousel/>
        <NewsletterForm/>
        <Footer/>
        <FooterBottom/>
    </>
  );
}

export default App;

