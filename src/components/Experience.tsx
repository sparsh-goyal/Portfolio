import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4"
          >
            Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Professional Highlights
          </motion.h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 border-l-2 border-gray-200 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-4 border-accent rounded-full" />
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-primary">{exp.role}</h4>
                    <div className="flex flex-col gap-1 mt-1">
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary text-sm">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-secondary text-sm font-medium whitespace-nowrap">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-3 text-secondary leading-relaxed">
                      <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                      <span>
                        {highlight.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                          const match = part.match(/\[(.*?)\]\((.*?)\)/);
                          if (match) {
                            return (
                              <a
                                key={i}
                                href={match[2]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline font-medium"
                              >
                                {match[1]}
                              </a>
                            );
                          }
                          return part;
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
