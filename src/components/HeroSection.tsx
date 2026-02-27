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
    <section className="relative min-h-screen flex items-center section-padding pt-24 sm:pt-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Mobile: stacked, Desktop: grid */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 sm:space-y-6 w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-border bg-secondary text-xs sm:text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Opportunities
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
              Dharshini G S
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-gradient">
              AI | Web Development
            </p>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
              Building intelligent, AI and data-driven web systems and scalable architecture. A pre-final year IT student exploring the intersection of Artificial Intelligence and Web Development.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:brightness-110 transition text-sm sm:text-base"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition text-sm sm:text-base"
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
            className="flex justify-center lg:justify-end w-full"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />

              {/* Image card */}
              <div className="relative glass-panel glow-border p-2 sm:p-3 rounded-2xl">
                <img
                  src={profileImg}
                  alt="Dharshini G S"
                  className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 rounded-xl object-cover aspect-[3/4]"
                />
              </div>

              {/* Floating stat cards - hidden on very small, shown from sm */}
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="hidden sm:block absolute glass-panel glow-border px-3 sm:px-4 py-2 sm:py-3 rounded-xl"
                  style={{
                    top: i === 0 ? "5%" : i === 1 ? "40%" : "75%",
                    ...(i % 2 === 0
                      ? { right: "-15%", maxWidth: "fit-content" }
                      : { left: "-15%", maxWidth: "fit-content" }),
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  <p className="text-xl sm:text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile stats row */}
            <div className="flex sm:hidden gap-4 justify-center absolute -bottom-2 left-0 right-0">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel px-4 py-2 rounded-xl text-center">
                  <p className="text-lg font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
