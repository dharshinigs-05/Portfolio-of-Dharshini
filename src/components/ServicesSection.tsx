import { motion } from "framer-motion";
import { Globe, Brain, Radio } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Application Development",
    description: "End-to-end MERN stack development with scalable backend architecture, RESTful APIs, authentication systems, and production-ready responsive UI.",
    position: "Building complete, scalable digital products.",
  },
  {
    icon: Brain,
    title: "AI-Integrated Application Development",
    description: "Machine learning model integration, NLP-based systems, intelligent recommendation engines, and AI-powered feature engineering for real-world use cases.",
    position: "Transforming applications into intelligent systems.",
  },
  {
    icon: Radio,
    title: "Real-Time & Collaborative Systems",
    description: "WebSocket-based real-time synchronization, multi-user collaboration platforms, secure access-controlled systems, and concurrent state management.",
    position: "Engineering high-performance real-time applications.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase">Services</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">What I Build</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel glow-border p-8 space-y-4 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              <p className="text-xs text-primary font-medium">{service.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
