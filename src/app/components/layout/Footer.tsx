"use client";

// * REACT IMPORTS
import React from "react";

// * ICONS
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// * INTERFACES
interface NavigationLinks {
  name: string;
  href: string;
}

interface SocialLinks {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  className?: string;
  companyName: string;
  year: number;
}

// * COMPONENT
const Footer: React.FC<FooterProps> = ({
  className = "",
  companyName = "Sidney Thomas",
  year = new Date().getFullYear(),
}) => {
  const navigationLinks: NavigationLinks[] = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks: SocialLinks[] = [
    {
      name: "GitHub",
      href: "https://github.com/siid14",
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sidney-thomas-8a745b221/",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: "X",
      href: "https://x.com/siid141414",
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      name: "Email",
      href: "mailto:sid.14boys@yahoo.fr",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <footer
      className={`bg-gradient-to-r from-blue-900 to-purple-900 py-6 ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* main footer content with horizontal layout */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          {/* navigation links */}
          <nav className="flex items-center space-x-6">
            {navigationLinks.map((link: NavigationLinks) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* social Media Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social: SocialLinks) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                <span className=" p-2  transition-colors">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* bottom bar with copyright and privacy links */}
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {year} {companyName}. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a
                href="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Use
              </a>
              <span className="text-gray-600">•</span>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
