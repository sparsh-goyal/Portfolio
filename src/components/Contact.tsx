import { motion } from "motion/react";
import type { FormEvent } from "react";
import { Mail, ExternalLink, Send, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Contact from ${name || "Website visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">
              Connect
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Let's build something{" "}
              <span className="text-accent">extraordinary</span> together.
            </h3>

            <div className="space-y-6">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-secondary uppercase tracking-wider">
                    Email Me
                  </div>
                  <div className="text-xl font-bold">{CONTACT_INFO.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-secondary uppercase tracking-wider">
                    Call Me
                  </div>
                  <div className="text-xl font-bold">{CONTACT_INFO.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-secondary uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-xl font-bold">
                    {CONTACT_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[
                {
                  icon: ExternalLink,
                  href: CONTACT_INFO.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: ExternalLink,
                  href: CONTACT_INFO.github,
                  label: "GitHub",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-accent hover:text-accent transition-all hover:-translate-y-1 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-secondary">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
