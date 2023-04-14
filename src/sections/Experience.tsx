import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");

      underline!.style.top = `${selected * 4}rem`;
    };

    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: "MindWebsVenture",
      role: "Full Stack Developer (MERN) Intern",
      url: "https://www.mindwebs.org",
      start: "January 2023",
      end: "March 2023",
      shortDescription: [
        "API call optimization in the frontend (React + TypeScript) making the application response time faster.",
        "Built the API (Node + TypeScript) for an application storing data as per the location.",
        "Clients included Artelus, SCLAB, NDA - National Defence Academy, and more",
      ],
    },
    {
      name: "IEM-IETE Students' Forum",
      role: "Core Member",
      url: "https://iem-iete-students-forum.netlify.app",
      start: "August 2022",
      end: "Present",
      shortDescription: [
        "IEM-IETE Students' Forum organizes technical events, talks and competitions on trending topics in the technical fields. This Students' Forum is a wing of the The Institution of Electronics and Telecommunication Engineers (IETE) which is India's leading recognized professional society devoted to the advancement of Science and Technology of Electronics, Telecommunication & IT.",
        "Built the official website of the Forum.",
        "Organized handful of Technicial Events and Competitions.",
      ],
    },
    {
      name: "BookNabe",
      role: "Backend Developer (Node JS) Intern",
      url: "https://www.booknabe.com",
      start: "July 2022",
      end: "December 2022",
      shortDescription: [
        "BookNabe is an application through which we can exchange and re-sell books in our locality.",
        "Built the backend (Node + JavaScript) and implemented Payment Gateway for the Sell feature of the application.",
        "Fixed authentication bugs and tested the already existing backend for the Exchange feature of the application.",
      ],
    },
  ];

  return (
    <>
      <div id="experience"></div>
      <motion.div
        className="experience"
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
          <h2>Work Experience.</h2>
        </div>
        <div className="container">
          <ul className="exp-slider">
            <div className="underline"></div>
            {experiences.map((experience, index) => {
              return (
                <li
                  key={index}
                  className={`exp-slider-item ${
                    index === selected && "exp-slider-item-selected"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <span>{experience.name}</span>
                </li>
              );
            })}
          </ul>
          <div className="exp-details">
            <div className="exp-details-position">
              <h3>
                <span>{experiences[selected].role}</span>
                <span className="experience-details-position-company">
                  &nbsp;@&nbsp;
                  <Link className="link" href={experiences[selected].url}>
                    {experiences[selected].name}
                  </Link>
                </span>
              </h3>
              <p className="exp-details-range">
                {experiences[selected].start} - {experiences[selected].end}
              </p>
              <ul className="exp-details-list">
                {experiences[selected].shortDescription.map(
                  (description, index) => (
                    <li key={index} className="exp-details-list-item">
                      {description}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
