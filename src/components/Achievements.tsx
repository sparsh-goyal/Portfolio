import { motion } from "motion/react";
import { Trophy, Star } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4"
          >
            Recognition
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Awards & Achievements
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                <Trophy size={20} />
              </div>
              <p className="font-bold text-primary">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
