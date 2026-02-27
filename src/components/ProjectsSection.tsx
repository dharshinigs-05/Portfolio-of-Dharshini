import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "HackNect",
    tagline: "AI infrastructure for hackathon team formation and startup talent discovery.",
    problem: "Hackathon participants struggle to find compatible teammates and mentors, leading to inefficient team formation.",
    solution: "Designed an AI-driven matchmaking engine using vector embeddings and cosine similarity to connect individuals based on skills and project goals.",
    stack: ["Python", "ReactJS", "FastAPI", "MongoDB"],
    features: [
      "Smart Skill-Based Matching Engine",
      "Hackathon Events Hub with filters",
      "Skill Gap Heatmap",
      "Mentor Radar & Startup Discovery Layer",
    ],
    github: "https://github.com/dharshinigs-05",
  },
  {
    title: "Real-Time Collaborative Document Editor",
    tagline: "Google Docs–style real-time collaboration built from scratch.",
    problem: "Traditional document systems lack seamless multi-user collaboration and real-time synchronization.",
    solution: "Built a WebSocket-based synchronization system using Socket.IO for concurrent editing with consistent state management.",
    stack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
    features: [
      "Live multi-user document editing",
      "Role-based access control (Owner/Editor/Viewer)",
      "Version history & rollback",
      "Real-time state synchronization",
    ],
    github: "https://github.com/dharshinigs-05",
  },
  {
    title: "AI-Powered Blogging Intelligence Platform",
    tagline: "AI-assisted content optimization and publishing platform.",
    problem: "Content creators struggle with SEO optimization, readability scoring, and content improvement insights.",
    solution: "Developed a modular MERN-based platform integrating AI services for content analysis and intelligent suggestions.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "AI APIs"],
    features: [
      "Markdown-based editor",
      "AI content suggestions & SEO scoring",
      "Engagement analytics dashboard",
      "Modular AI-ready backend APIs",
    ],
    github: "https://github.com/dharshinigs-05",
  },
  {
    title: "AI-Based Resume Analyzer",
    tagline: "Intelligent resume screening and candidate-job matching assistant.",
    problem: "Manual resume screening is time-consuming and inefficient.",
    solution: "Built an NLP-powered resume parsing and scoring system to evaluate candidate-job alignment.",
    stack: ["Python", "NLP", "Machine Learning", "FastAPI"],
    features: [
      "Resume content extraction",
      "Job description comparison",
      "Match scoring algorithm",
      "Improvement recommendations",
    ],
    github: "https://github.com/dharshinigs-05",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">Building Intelligent Systems</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 sm:p-8 space-y-4 hover-lift group"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-heading font-bold text-lg text-foreground">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition shrink-0"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <p className="text-primary text-sm font-medium">{project.tagline}</p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground font-medium">Problem:</span> {project.problem}</p>
                <p><span className="text-foreground font-medium">Solution:</span> {project.solution}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {project.features.map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
