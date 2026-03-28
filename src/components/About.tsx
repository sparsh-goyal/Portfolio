import { motion } from "motion/react";
import { Rocket, Target, Zap, GraduationCap } from "lucide-react";
import { EDUCATION } from "../constants";

export default function About() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation + Execution",
      description: "I don't just dream up big ideas; I build the systems that make them a reality."
    },
    {
      icon: Zap,
      title: "Problem-Solving Philosophy",
      description: "Complexity is just a puzzle waiting for a clean, scalable solution."
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description: "Every line of code should move the needle for the business and the user."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A builder at the intersection of <span className="text-accent">AI, product, and engineering.</span>
            </h3>
            <div className="space-y-6 text-lg text-secondary leading-relaxed mb-12">
              <p>
                With over 4 years of experience in software development and product innovation, I've dedicated my career to transforming complex challenges into elegant, data-driven solutions.
              </p>
              <p>
                My approach combines deep technical expertise in the .NET ecosystem and modern frontend frameworks with a strategic product mindset. I believe that the best software isn't just functional—it's transformative.
              </p>
            </div>

            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-accent" /> Education
            </h4>
            <div className="space-y-8">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="relative pl-6 border-l-2 border-accent/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-accent rounded-full" />
                  <div className="font-bold text-xl">{edu.degree}</div>
                  <div className="text-accent font-semibold">{edu.school}</div>
                  <div className="text-sm text-secondary mb-2">{edu.period} | GPA: {edu.gpa}</div>
                  {edu.coursework && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.coursework.map(course => (
                        <span key={course} className="text-[10px] px-2 py-1 bg-white border border-gray-100 rounded text-secondary">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 group hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <value.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-secondary">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
