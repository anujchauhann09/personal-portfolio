import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import codeTutor from "../../Assets/Projects/codeTutor.png";
import bytrix from "../../Assets/Projects/bytrix.png";
import brainTumor from "../../Assets/Projects/brainTumor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeTutor}
              isBlog={false}
              title="CodeTutorAI"
              description="CodeTutorAI is an AI-powered programming tutor designed to help learners understand complex coding concepts more effectively. It provides contextual explanations, step-by-step reasoning, and debugging assistance by analyzing user queries and code snippets. Built with Next.js and integrated with LLM-based APIs through REST services."
              ghLink="https://github.com/anujchauhann09/code-tutor-ai"
              demoLink="https://codetutorai.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bytrix}
              isBlog={false}
              title="Bytrix"
              description="Bytrix is a file compression and conversion platform that simplifies document handling while providing AI-powered summaries. The system is built using Next.js for the frontend and Django for the backend, with PostgreSQL and Redis used for data storage and caching. It supports converting and compressing files such as PDF, DOCX, and XLSX."
              ghLink="https://github.com/anujchauhann09/bytrix"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainTumor}
              isBlog={false}
              title="Brain Tumor Detection"
              description="Brain Tumor Detection is an AI-assisted medical imaging project focused on analyzing MRI scans to support early diagnosis. Using CNN-based models implemented in Python with NumPy and Scikit-learn, the system identifies and highlights potential tumor regions while generating confidence scores."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
