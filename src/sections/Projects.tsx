import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { CgWebsite } from "react-icons/cg";

const Projects = () => {
  const projectsData = [
    {
      image: "/pokedex.png",
      projectName: "Pokedex",
      projectLink: "https://pokedex-by-blank.netlify.app",
      projectDescription:
        "This is a web application that uses the PokeAPI to display information about different Pokemon.",
      projectTech: ["ReactJs", "PokeAPI", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/msayan36/PokeDex",
        externalLink: "https://pokedex-by-blank.netlify.app",
      },
    },
    {
      image: "/ecommerce.png",
      projectName: "Ecommerce Application",
      projectLink: "https://ecommerce-frontend-bay.vercel.app",
      projectDescription:
        "This is a Full-Stack Ecommerce web application where users can post products to sell and also can buy products from other users.",
      projectTech: ["NextJs", "NodeJs", "TailwindCSS", "MongoDB"],
      projectExternalLinks: {
        github: "https://github.com/msayan36/Ecommerce-frontend",
        externalLink: "https://ecommerce-frontend-bay.vercel.app",
      },
    },
    {
      image: "/space-invaders.png",
      projectName: "Space Invaders Web Version",
      projectLink: "https://space-invaders-by-sayan.netlify.app/",
      projectDescription:
        "This is a web version of the famous Space Invaders Arcade Game.",
      projectTech: ["HTML Canvas", "JavaScript"],
      projectExternalLinks: {
        github: "https://github.com/msayan36/Space-Invaders",
        externalLink: "https://space-invaders-by-sayan.netlify.app/",
      },
    },
  ];

  const otherProjectData = [
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "https://realtime-chat-app-dusky-ten.vercel.app/",
      githubLink: "https://github.com/msayan36/realtime-chat-app",
      projectName: "Real-Time Chat App",
      projectDescription:
        "Real-Time Chat Room where users can login or register and use the chat room to chat with other users in real-time. It is built using open source backend as service Appwrite.",
      projectTech: ["ReactJs", "Appwrite", "CSS"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "https://github.com/msayan36/Dotcast",
      githubLink: "https://github.com/msayan36/Dotcast",
      projectName: "DotCast",
      projectDescription:
        "DotCast is Web Based Podcast Sharing Application where every Data is decentalized. Here users can subscribe as well as invest in their favourite creators channel and creators can live-stream.",
      projectTech: ["Web 3.0", "WebRTC", "MERN"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "https://github.com/msayan36/code-sync",
      githubLink: "https://github.com/msayan36/code-sync",
      projectName: "Code Sync",
      projectDescription:
        "CodeSync is a real-time text-editor where users can share same room with other users and can collaborate in real-time. Can also execute JavaScript Code in the editor itself.",
      projectTech: ["ReactJS", "JavaScript", "Socket.io"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "https://github.com/msayan36/Spotify-App",
      githubLink: "https://github.com/msayan36/Spotify-App",
      projectName: "Spotify Clone",
      projectDescription:
        "Spotify Clone Mobile Application built using React Native and Spotify API.",
      projectTech: ["React Native", "JavaScript", "Spotify API"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "https://iem-iete-students-forum.netlify.app",
      githubLink: "https://github.com/msayan36/Iete-new",
      projectName: "IEM-IETE Students' Forum",
      projectDescription: "Official Website for IEM-IETE Students' Forum.",
      projectTech: ["ReactJS", "DaisyUI", "Strapi"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "https://github.com/msayan36/Weather-Mobile-App",
      githubLink: "https://github.com/msayan36/Weather-Mobile-App",
      projectName: "Weather App",
      projectDescription: "Weather Mobile Application built using React Native",
      projectTech: ["React Native", "JavaScript", "Weather API"],
    },
  ];

  return (
    <motion.div
      className="projects"
      id="work"
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
        <h2>Few Things I&apos;ve Built.</h2>
      </div>
      <div className="project-container">
        <div className="projects-container">
          {projectsData.map(
            ({
              image,
              projectDescription,
              projectLink,
              projectExternalLinks,
              projectName,
              projectTech,
            }) => {
              return (
                <motion.div
                  className="project"
                  key={projectName}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                  }}
                >
                  <Link href={projectLink} target="_blank">
                    <div className="project-image">
                      <div className="project-image-overlay"></div>
                      <div className="project-image-container">
                        <Image
                          src={image}
                          fill
                          alt={projectName}
                          quality={100}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="project-info">
                    <p className="project-info-overline">Featured Project</p>
                    <Link
                      style={{ textDecoration: "none" }}
                      href={projectLink}
                      target="_blank"
                    >
                      <h3 className="project-info-title">{projectName}</h3>
                    </Link>
                    <div className="project-info-description">
                      <p>{projectDescription}</p>
                    </div>
                    <ul className="project-info-tech-list">
                      {projectTech.map((tech) => (
                        <li className="project-info-tech-list-item" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <ul className="project-info-links">
                      <li className="project-info-links-item">
                        <Link
                          href={projectExternalLinks.github}
                          target="_blank"
                          className="project-info-links-item-link"
                        >
                          <FiGithub />
                        </Link>
                      </li>
                      <li className="project-info-links-item">
                        <Link
                          href={projectExternalLinks.externalLink}
                          target="_blank"
                          className="project-info-links-item-link"
                        >
                          <FiExternalLink />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
        <div className="other-projects-container">
          <h3>Other Noteworthy Projects</h3>
          <div className="other-projects-container-div">
            {otherProjectData.map(
              (
                {
                  titleIcon,
                  projectLink,
                  githubLink,
                  projectName,
                  projectDescription,
                  projectTech,
                },
                index
              ) => {
                return (
                  <div className="other-projects-container-div-div" key={index}>
                    {/* <div className="other-projects-container-div-icons"> */}
                    {titleIcon}
                    <Link
                      href={projectLink}
                      target="_blank"
                      className="right-icon"
                    >
                      <FiExternalLink />
                    </Link>
                    <Link
                      href={githubLink}
                      target="_blank"
                      className="right-icon right-icon-2"
                    >
                      <FiGithub />
                    </Link>
                    {/* </div> */}
                    <p className="project-cont project-head">{projectName}</p>
                    <p className="project-cont project-text">
                      {projectDescription}
                    </p>
                    <div className="project-cont">
                      {projectTech.map((tech, idx) => (
                        <span key={idx}>{tech}</span>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="view-more-btn" style={{ marginTop: "25rem" }}>
            <Button
              text="View More"
              link="https://github.com/msayan36?tab=repositories"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
