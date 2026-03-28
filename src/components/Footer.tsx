import { Code2 } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Code2 className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">Sparsh Goyal</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="text-sm text-secondary font-medium">
          © {new Date().getFullYear()} Sparsh Goyal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
