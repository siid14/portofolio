"use client";

// * REACT IMPORTS
import React, { useState } from "react";

// * ICONS
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// * INTERFACES
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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// * COMPONENT
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>
        <div className="prose dark:prose-invert max-w-none">{children}</div>
      </div>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({
  className = "",
  companyName = "Sidney Thomas",
  year = new Date().getFullYear(),
}) => {
  // const navigationLinks: NavigationLinks[] = [
  //   { name: "Projects", href: "#projects" },
  //   { name: "Skills", href: "#skills" },
  //   { name: "Contact", href: "#contact" },
  // ];

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

  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer
        className={`bg-gradient-to-r from-blue-900 to-purple-900 py-6 ${className}`}
      >
        <div className="container mx-auto px-4">
          {/* main footer content with horizontal layout */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
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
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <span className="text-gray-600">•</span>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Use
                </button>
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

      {/* Add Modals */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          {/* <h3 className="text-xl font-semibold">Privacy Policy</h3> */}
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-2">
            <h4 className="font-medium">Information Collection</h4>
            <p>
              This portfolio website collects minimal personal information. When
              you interact with the contact form or email link, you may
              voluntarily provide:
            </p>
            <ul className="list-disc pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-medium">Usage of Information</h4>
            <p>Any information you provide is used solely for:</p>
            <ul className="list-disc pl-5">
              <li>Responding to your inquiries</li>
              <li>Professional communication regarding opportunities</li>
              <li>Improving website functionality</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-medium">Analytics</h4>
            <p>
              This website may use basic analytics tools to understand visitor
              behavior. This data is anonymized and includes no personally
              identifiable information.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-medium">Contact</h4>
            <p>
              For any privacy-related questions, please contact me at
              sid.14boys@yahoo.fr
            </p>
          </section>
        </div>
      </Modal>

      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms of Use"
      >
        <div className="space-y-4">
          {/* <h3 className="text-xl font-semibold">Terms of Use</h3> */}
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-2">
            <h4 className="font-medium">1. Website Usage</h4>
            <p>
              This portfolio website is provided for informational and
              professional networking purposes. By accessing this website, you
              agree to use it only for its intended purpose.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-medium">2. Intellectual Property</h4>
            <p>
              All content on this website, including but not limited to text,
              graphics, logos, images, and code samples, is my intellectual
              property. While you may view and reference this content:
            </p>
            <ul className="list-disc pl-5">
              <li>
                You may not copy or reproduce it without explicit permission
              </li>
              <li>You may not use it for commercial purposes</li>
              <li>
                Attribution is required if referencing any work samples or
                projects
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-medium">3. External Links</h4>
            <p>
              This website contains links to external sites (GitHub, LinkedIn,
              etc.). I am not responsible for the content or privacy practices
              of these external sites.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-medium">4. Accuracy of Information</h4>
            <p>
              While I strive to keep all information current, I make no
              guarantees about the accuracy or completeness of the information
              provided on this website.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-medium">5. Contact</h4>
            <p>
              For any questions regarding these terms, please contact me at
              sid.14boys@yahoo.fr
            </p>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
