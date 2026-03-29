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
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 transition-all group"
            >
              <div className="mb-5 overflow-hidden rounded-3xl bg-white shadow-sm h-48 flex items-center justify-center">
                <img
                  src={achievement.image ?? "/assets/awards/trophy-badge.svg"}
                  alt={achievement.alt ?? achievement.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <p className="font-bold text-primary">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
