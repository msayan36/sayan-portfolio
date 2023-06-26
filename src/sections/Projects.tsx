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
      image: "/project1.png",
      projectName: "Pokedex",
      projectLink: "https://pokedex-by-blank.netlify.app",
      projectDescription:
        "This is a web application that uses the PokeAPI to desplay information about different Pokemon.",
      projectTech: ["React", "Redux Toolkit", "PokeAPI", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/msayan36/PokeDex",
        externalLink: "https://pokedex-by-blank.netlify.app",
      },
    },
    {
      image: "/project2.jpg",
      projectName: "Spotify Clone",
      projectLink: "https://pokedex-by-blank.netlify.app",
      projectDescription:
        "This is a web application that uses the PokeAPI to desplay information about different Pokemon.",
      projectTech: ["React", "Redux Toolkit", "PokeAPI", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/msayan36/PokeDex",
        externalLink: "https://pokedex-by-blank.netlify.app",
      },
    },
    {
      image: "/project3.png",
      projectName: "Mario Web Version",
      projectLink: "https://pokedex-by-blank.netlify.app",
      projectDescription:
        "This is a web application that uses the PokeAPI to desplay information about different Pokemon.",
      projectTech: ["React", "Redux Toolkit", "PokeAPI", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/msayan36/PokeDex",
        externalLink: "https://pokedex-by-blank.netlify.app",
      },
    },
  ];

  const otherProjectData = [
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "Link",
      githubLink: "Link",
      projectName: "Project Title",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus maiores dolores officia? Iure aliquid consectetur libero amet deleniti provident?",
      projectTech: ["React", "Javascript", "CSS"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "Link",
      githubLink: "Link",
      projectName: "Project Title",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus maiores dolores officia? Iure aliquid consectetur libero amet deleniti provident?",
      projectTech: ["React", "Javascript", "CSS"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "Link",
      githubLink: "Link",
      projectName: "Project Title",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus maiores dolores officia? Iure aliquid consectetur libero amet deleniti provident?",
      projectTech: ["React", "Javascript", "CSS"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "Link",
      githubLink: "Link",
      projectName: "Project Title",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus maiores dolores officia? Iure aliquid consectetur libero amet deleniti provident?",
      projectTech: ["React", "Javascript", "CSS"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "Link",
      githubLink: "Link",
      projectName: "Project Title",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus maiores dolores officia? Iure aliquid consectetur libero amet deleniti provident?",
      projectTech: ["React", "Javascript", "CSS"],
    },
    {
      titleIcon: <CgWebsite className="left-icon" />,
      projectLink: "Link",
      githubLink: "Link",
      projectName: "Project Title",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus maiores dolores officia? Iure aliquid consectetur libero amet deleniti provident?",
      projectTech: ["React", "Javascript", "CSS"],
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
                <div
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
                </div>
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
