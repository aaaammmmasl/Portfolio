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
      "Docker",
    ],
    liveDemo: "https://student-ai-study-assistant.vercel.app",
    note: "The live demo depends on external services (AI, database, etc.), which may occasionally experience downtime or limited availability.",
  },
  {
    title: "AWS EC2 Infrastructure with Terraform",
    desc: "Infrastructure as Code project that provisions an AWS EC2 instance using Terraform, automatically installs Docker, and deploys an Nginx container during instance initialization.",
    img: "/pics/terraform-ec2.png",
    link: "https://github.com/aaaammmmasl/terraform-docker-ec2",

    details:
      "This Infrastructure as Code (IaC) project automates the deployment of an AWS EC2 instance using Terraform. The infrastructure dynamically retrieves the latest Amazon Linux 2023 AMI, the default VPC, and an available subnet through AWS data sources, avoiding hardcoded resource IDs. During instance initialization, a user_data script installs Docker, enables the service, and automatically launches an Nginx container. The project is structured using Terraform variables, outputs, and tfvars files to improve configuration management and reusability. It demonstrates core cloud engineering concepts including infrastructure provisioning, security group configuration, automated server bootstrapping, and reproducible deployments on AWS.",

    features: [
      "Infrastructure provisioning with Terraform",
      "Automatic EC2 deployment on AWS",
      "Dynamic retrieval of latest Amazon Linux AMI",
      "Automatic Docker installation via user_data",
      "Automatic Nginx container deployment",
      "Security Group configuration for HTTP and SSH",
      "Configurable infrastructure using variables and tfvars",
      "Outputs public IP after deployment",
    ],

    tech: [
      "Terraform",
      "AWS EC2",
      "AWS VPC",
      "AWS Security Groups",
      "Amazon Linux 2023",
      "Docker",
      "Nginx",
    ],

    liveDemo: "",

    note: "This project provisions real AWS infrastructure and therefore does not include a public live demo. Running it requires an AWS account, configured AWS CLI credentials, and an existing EC2 Key Pair.",
  },
];
