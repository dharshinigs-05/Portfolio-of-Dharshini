import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile.png";

const stats = [
  { value: "8.8", label: "CGPA" },
  { value: "4+", label: "Projects" },
  { value: "2", label: "Internships" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Dharshini G S
          </h1>
          <p className="text-xl sm:text-2xl font-heading font-semibold text-gradient">
            AI | Web Development
          </p>

          <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
            Building intelligent, AI and data-driven web systems and scalable architecture. A pre-final year IT student exploring the intersection of Artificial Intelligence and Web Development.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:brightness-110 transition"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition"
            >
              Let's Collaborate
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/dharshinigs-05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/dharshinigs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right - Photo + Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            
            {/* Image card */}
            <div className="relative glass-panel glow-border p-3 rounded-2xl">
              <img
                src={profileImg}
                alt="Dharshini G S"
                className="w-64 sm:w-72 lg:w-80 rounded-xl object-cover aspect-[3/4]"
              />
            </div>

            {/* Floating stat cards */}
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="absolute glass-panel glow-border px-4 py-3 rounded-xl"
                style={{
                  top: i === 0 ? "8%" : i === 1 ? "45%" : "78%",
                  [i % 2 === 0 ? "right" : "left"]: "-20%",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              >
                <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
