"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiCss3,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me.</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! My name is Sayan Munshi and I like making things for the web.
            Currently I am pursuing my B.Tech degree on Information Technology
            from the Institute of Enginnering and Management, Kolkata. My
            interest in Web Development started back in 2021. At the very
            beginning I got my hands on HTML/CSS and JAVASCRIPT and from there
            my journey began.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I had the privilege to work with at amazing
            startups{" "}
            <Link
              href="https://www.mindwebs.org"
              className="link"
              target="_blank"
            >
              MindWebsVentures
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.booknabe.com"
              className="link"
              target="_blank"
            >
              BookNabe
            </Link>{" "}
            who were generous enough to provide me with the opportunity to work
            with them as an intern. My main focus these days is to work on my
            problem solving skills and upskill myself to build better digital
            prodcuts for the world !!
          </p>

          <p className="about-grid-info-text">
            Currently I am open for any opportunity to work on an amazing
            project. Feel free to{" "}
            <Link
              href="mailto:sayanmunshi36@gmail.com"
              className="link"
              target="_blank"
            >
              Contact Me
            </Link>{" "}
            for any such opportunities available.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">
              <SiJavascript />
              <span>Javascript</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiTypescript />
              <span>Typescript</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiReact />
              <span>React</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiNextdotjs />
              <span>Next.js</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiRedux />
              <span>Redux Toolkit</span>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandReactNative />
              <span>React Native</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiNodedotjs />
              <span>Node.js</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiCss3 />
              <span>CSS</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiFigma />
              <span>Figma</span>
            </li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/sayan.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
