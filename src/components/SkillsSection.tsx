import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Engineering",
    skills: ["ReactJS", "HTML5", "CSS3", "Responsive UI", "Markdown Rendering"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth", "RBAC"],
  },
  {
    title: "Real-Time Systems",
    skills: ["WebSockets", "Socket.IO", "State Synchronization"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL Plus"],
  },
  {
    title: "AI & Intelligence",
    skills: ["Machine Learning", "NLP Basics", "AI Integration", "SEO Scoring"],
  },
  {
    title: "Automation & Tools",
    skills: ["n8n", "Git", "VS Code", "Postman"],
  },
];

const expertiseAreas = [
  "AI-Integrated Full-Stack Applications",
  "Real-Time Web Systems Engineering",
  "Intelligent Automation Architecture",
  "Scalable Backend API Design",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">Technical Arsenal</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel p-5 space-y-3"
            >
              <h3 className="font-heading font-semibold text-sm text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel glow-border p-8"
        >
          <h3 className="font-heading font-semibold text-sm text-primary mb-4 tracking-widest uppercase">
            Primary Expertise
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {expertiseAreas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-foreground font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
