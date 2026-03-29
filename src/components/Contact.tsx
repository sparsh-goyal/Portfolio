import { motion } from "motion/react";
import type { FormEvent, SVGProps } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO } from "../constants";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.185 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.655 1.655.245 2.88.12 3.185.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.9-.015 3.295 0 .32.21.695.825.577C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.119 20.452H3.554V9h3.565v11.452zM5.337 7.433c-1.1 0-1.994-.896-1.994-1.999 0-1.102.894-1.999 1.994-1.999 1.101 0 1.995.897 1.995 1.999 0 1.103-.894 1.999-1.995 1.999zM20.447 20.452h-3.554v-5.568c0-1.328-.028-3.037-1.849-3.037-1.85 0-2.133 1.444-2.133 2.936v5.669h-3.565V9h3.416v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.371 4.267 5.455v6.285z" />
    </svg>
  );
}

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(
      `Contact from ${name || "Website visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
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
                  icon: LinkedInIcon,
                  href: CONTACT_INFO.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: GitHubIcon,
                  href: CONTACT_INFO.github,
                  label: "GitHub",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-all hover:-translate-y-1 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
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
