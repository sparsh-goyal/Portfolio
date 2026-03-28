import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute -top-24 -right-24 -z-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-24 -z-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>Software Engineer & AI Specialist</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Building <span className="text-accent">intelligent</span> systems for large-scale impact
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border-2 border-primary/10 hover:border-accent hover:text-accent transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
            <div className="text-sm font-bold uppercase tracking-widest text-secondary">Expertise in</div>
            <div className="flex gap-6 font-bold text-xl">
              <span>GenAI</span>
              <span>Azure</span>
              <span>React</span>
              <span>C#</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://picsum.photos/seed/sparsh/800/1000"
              alt="Sparsh Goyal"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl -z-10 rotate-12" />
          <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-primary/10 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
