import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const internships = [
  {
    role: "MERN Stack Developer",
    company: "Codec Technologies",
    period: "Feb 2026 – Mar 2026",
    highlights: [
      "Built a real-time collaborative document editor with Socket.IO & JWT auth",
      "Developed an AI-powered blogging platform with SEO scoring & analytics",
      "Engineered role-based access control and version history systems",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Unified Mentor Pvt Ltd",
    period: "Jun 2025 – Jul 2025",
    highlights: [
      "Built ML models for heart disease & vehicle price prediction",
      "Improved prediction accuracy by 15% through feature engineering",
      "Automated reporting workflows for accelerated insights",
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase">About</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">Engineering My Future</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm intentionally building expertise across full-stack development, AI-powered systems, and automation-driven workflows. My goal is to transform ideas into intelligent digital products and scalable systems that solve real problems.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">B.Tech Information Technology (2023–2027)</p>
                  <p className="text-sm text-muted-foreground">Panimalar Engineering College · CGPA: 8.8 / 10</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Class XII — 89.6%</p>
                  <p className="text-sm text-muted-foreground">Maharishi Vidya Mandir, Hosur</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <p className="font-medium text-foreground">Chennai, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Internships */}
          <div className="space-y-6">
            {internships.map((intern, i) => (
              <motion.div
                key={intern.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <Briefcase size={18} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-foreground">{intern.role}</p>
                    <p className="text-sm text-muted-foreground">{intern.company} · {intern.period}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 pl-8">
                  {intern.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground relative before:content-['→'] before:absolute before:-left-5 before:text-primary">
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
