export const projects = [
  {
    title: "StudyPilot",
    desc: "AI-powered learning assistant that helps students summarize study materials, chat with documents, and generate interactive quizzes from PDFs and text content.",
    img: "/pics/studypilot.png",
    link: "https://github.com/aaaammmmasl/Student-AI-Study-Assistant",
    details:
      "StudyPilot is a full-stack web application designed to improve the learning experience by integrating artificial intelligence into everyday study workflows. The system allows users to upload PDF files or enter text, then automatically generates summaries and interactive quizzes using an AI model via OpenRouter API. The application also supports chat-based interaction with study content, session management, and persistent message history stored in a PostgreSQL database using Prisma. The architecture follows a client-server model with a React frontend and a Node.js/Express backend. The system includes a service layer responsible for AI processing, PDF text extraction, authentication, and data persistence. The project also includes user authentication and a structured database schema with Users, Sessions, and Messages to support multi-session learning history. The application is containerized using Docker and Docker Compose to simplify development and deployment across environments.",
    features: [
      "AI-powered chat with study materials",
      "Automatic PDF text extraction",
      "AI-based summary generation",
      "Interactive quiz generation from content",
      "Multiple-choice quiz evaluation with scoring",
      "Session-based chat history management",
      "User authentication (login/register)",
      "Persistent storage using PostgreSQL (Prisma)",
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "OpenRouter API",
      "JWT Authentication",
      "docker",
    ],
    liveDemo: "https://student-ai-study-assistant.vercel.app",
    note: "The live demo depends on external services (AI, database, etc.), which may occasionally experience downtime or limited availability.",
  },
];
