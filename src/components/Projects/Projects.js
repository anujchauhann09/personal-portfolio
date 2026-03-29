import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import employrix from "../../Assets/Projects/employrix.png";
import codeTutor from "../../Assets/Projects/codeTutor.png";
import bytrix from "../../Assets/Projects/bytrix.png";
import scriptory from "../../Assets/Projects/scriptory.png";
import studentCompanion from "../../Assets/Projects/studentCompanion.png";
import multiRetrieverRag from "../../Assets/Projects/multiRetrieverRag.png";
import codeSage from "../../Assets/Projects/codeSage.png";

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
              imgPath={employrix}
              isBlog={false}
              title="Employrix"
              description="Employrix is a full-stack job portal system that connects job seekers with employers through an intuitive platform. It supports role-based access for candidates and recruiters, enabling job posting, application tracking, and profile management. Built with a focus on seamless user experience and real-time updates."
              ghLink="https://github.com/anujchauhann09/job-listing-portal"
              demoLink="https://employrix.vercel.app"
            />
          </Col>

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
              imgPath={scriptory}
              isBlog={false}
              title="Scriptory"
              description="A clean, elegant, and performant blogging platform built with React, Tailwind CSS, and Framer Motion. Designed with a focus on typography and reading experience, inspired by Medium but with a unique, minimalist aesthetic."
              ghLink="https://github.com/anujchauhann09/scriptory"
              demoLink="https://scriptory.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentCompanion}
              isBlog={false}
              title="Student Companion"
              description="Intent-driven Generative UI Student Assistant built with Tambo, React, and Next.js that dynamically adapts its interface based on student goals like planning, revision, focus, and progress tracking."
              ghLink="https://github.com/anujchauhann09/student-companion"
              demoLink="https://mystudentcompanion.vercel.app"
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
              imgPath={multiRetrieverRag}
              isBlog={false}
              title="Multi Retriever RAG"
              description="Production-ready Retrieval-Augmented Generation system that ingests multiple source types — PDFs, CSVs, and websites — and answers natural language queries. Built with FastAPI, LangChain, Pinecone, and Google Gemini, with vectors isolated per source type using Pinecone namespaces."
              ghLink="https://github.com/anujchauhann09/multi-retriever-rag"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeSage}
              isBlog={false}
              title="CodeSage"
              description="Full-stack RAG application that ingests a GitHub repository or ZIP archive and lets you query it conversationally in plain English. Every answer is grounded in your real source code with file-level citations. Built with FastAPI, Next.js, Pinecone, and Google Gemini."
              ghLink="https://github.com/anujchauhann09/code-sage"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
