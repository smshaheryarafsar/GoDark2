import React from "react";
import github from "../images/github-icon.svg";
import twitter from "../images/twitter-icon.svg";
import linkedin from "../images/linkedin-icon.svg";

interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    icon: twitter.src,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: linkedin.src,
    href: "https://www.linkedin.com/company/godark/mycompany",
  },
  {
    name: "GitHub",
    icon: github.src,
    href: "#",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <nav className="social-links">
      <ul className="social-list">
        {socialLinks.map((link, index) => (
          <li key={index} className="social-item">
            <a
              href={link.href}
              className={`social-link social-link-${link.name.toLowerCase()}`}
              aria-label={link.name}
              target="_blank"
            >
              <img src={link.icon} alt="" className="social-icon" />
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .social-links {
          display: flex;
          padding-left: 84px;
        }
        .social-list {
          display: flex;
          gap: 22px;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .social-item {
          width: 22px;
        }
        .social-link {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        .social-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 21px;
          flex: 1;
        }
        .social-link-twitter .social-icon {
          aspect-ratio: 1.05;
          width: 22px;
        }
      `}</style>
    </nav>
  );
};

export default SocialLinks;
