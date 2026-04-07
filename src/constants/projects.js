import employrix from "../Assets/Projects/employrix.png";
import codeTutor from "../Assets/Projects/codeTutor.png";
import bytrix from "../Assets/Projects/bytrix.png";
import scriptory from "../Assets/Projects/scriptory.png";
import studentCompanion from "../Assets/Projects/studentCompanion.png";
import multiRetrieverRag from "../Assets/Projects/multiRetrieverRag.png";
import codeSage from "../Assets/Projects/codeSage.png";

export const PROJECTS = [
  {
    img: employrix,
    title: "Employrix",
    desc: "Full-stack job portal connecting seekers with employers. Role-based access, real-time updates, and seamless application tracking.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    gh: "https://github.com/anujchauhann09/job-listing-portal",
    demo: "https://employrix.vercel.app",
    badge: null,
  },
  {
    img: codeTutor,
    title: "CodeTutorAI",
    desc: "AI-powered programming tutor with contextual explanations, step-by-step reasoning, and debugging assistance via LLM APIs.",
    tags: ["Next.js", "LLM", "REST API", "TypeScript"],
    gh: "https://github.com/anujchauhann09/code-tutor-ai",
    demo: "https://codetutorai.vercel.app",
    badge: null,
  },
  {
    img: scriptory,
    title: "Scriptory",
    desc: "Elegant blogging platform with a focus on typography and reading experience. Inspired by Medium, built with a minimalist aesthetic.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    gh: "https://github.com/anujchauhann09/scriptory",
    demo: "https://scriptory.vercel.app",
    badge: null,
  },
  {
    img: studentCompanion,
    title: "Student Companion",
    desc: "Intent-driven Generative UI assistant that dynamically adapts its interface based on student goals — planning, revision, focus, progress.",
    tags: ["Next.js", "React", "Tambo", "Generative UI"],
    gh: "https://github.com/anujchauhann09/student-companion",
    demo: "https://mystudentcompanion.vercel.app",
    badge: null,
  },
  {
    img: bytrix,
    title: "Bytrix",
    desc: "File compression & conversion platform with AI-powered summaries. Supports PDF, DOCX, XLSX with Redis caching for performance.",
    tags: ["Next.js", "Django", "PostgreSQL", "Redis"],
    gh: "https://github.com/anujchauhann09/bytrix",
    demo: null,
    badge: null,
  },
  {
    img: multiRetrieverRag,
    title: "Multi Retriever RAG",
    desc: "Production-ready RAG system ingesting PDFs, CSVs, and websites. Answers natural language queries with source-isolated vector namespaces.",
    tags: ["FastAPI", "LangChain", "Pinecone", "Gemini"],
    gh: "https://github.com/anujchauhann09/multi-retriever-rag",
    demo: null,
    badge: "Production RAG",
  },
  {
    img: codeSage,
    title: "CodeSage",
    desc: "Query any GitHub repo or ZIP archive conversationally. Every answer is grounded in real source code with file-level citations.",
    tags: ["FastAPI", "Next.js", "Pinecone", "Gemini"],
    gh: "https://github.com/anujchauhann09/code-sage",
    demo: null,
    badge: "AI · RAG",
  },
];
