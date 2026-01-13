import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "User Authentication API (Symfony) – Recreated Project",
    description:
      "A Symfony-based authentication API recreated to demonstrate real-world experience with API key validation and OTP-based authentication, originally developed in a professional setting.",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: "https://github.com/CMLReplan/auth-api",
  },
  {
    title: "Gender and Development Section on DOST-FPRDI Website",
    description:
      "A Joomla-based web section built with HTML, CSS, Bootstrap, and JavaScript, featuring a left-side accordion navigation for organized and accessible content.",
    getImageSrc: () => require("../images/photo6.png"),
    link: "https://fprdi.dost.gov.ph/gad-corner",
  },
  {
    title: "Personal Project",
    description:
      "A React-based reservation app that allows users to book tables through an interactive form, deployed and hosted on Vercel.",
    getImageSrc: () => require("../images/photo7.png"),
    link: "https://my-app-phi-eight-47.vercel.app",
  },
  {
    title: "Professional Experience – DOST-FPRDI (Computer Operator II)",
    description:
      "Maintained and updated the DOST-FPRDI Gender and Development webpage, assisted with content updates on the main website, managed project tracking using Google Sheets, and provided planning and administrative support.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1e8545"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Projects & Professional Experience
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        alignItems="stretch"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
