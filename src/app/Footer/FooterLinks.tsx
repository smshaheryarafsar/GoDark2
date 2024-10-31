import React from "react";

interface FooterLink {
  text: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { text: "Terms of Service", href: "#" },
  { text: "Privacy Policy", href: "#" },
];

const FooterLinks: React.FC = () => {
  return (
    <nav className="footer-links">
      <ul className="link-list">
        {footerLinks.map((link, index) => (
          <li key={index} className="link-item">
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .footer-links {
          display: flex;
          align-items: center;
        }
        .link-list {
          display: flex;
          gap: 31px;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .link-item {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .footer-link {
          color: #c9cbcf;
          letter-spacing: -0.34px;
          text-decoration: none;
          font: 400 17px/1 Inter, sans-serif;
          padding: 2px 0;
        }
      `}</style>
    </nav>
  );
};

export default FooterLinks;
