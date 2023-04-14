import React, { useState } from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import SocialIcons from "../components/SocialIcons";
import Email from "../components/Email";
import Loader from "../components/Loader";
import Head from "next/head";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Sayan Munshi</title>
        <link rel="shortcut icon" href="/Logo.svg" />
      </Head>
      {showContent ? (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>{" "}
        </>
      ) : (
        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
      )}
    </div>
  );
};

export default Index;
