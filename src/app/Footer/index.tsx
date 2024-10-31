import React from "react";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";

interface FooterProps {
  copyrightYear: number;
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightYear, companyName }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          © {copyrightYear} {companyName}. All rights reserved.
        </p>
        <div className="footer-content">
          <FooterLinks />
          <SocialLinks />
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #000;
          display: flex;
          justify-content: center;
          padding: 0 96px;
        }
        .footer-container {
          display: flex;
          width: 100%;
          max-width: 1536px;
          gap: 40px 100px;
          flex-wrap: wrap;
          padding: 33px 80px 33px 38px;
        }
        .copyright {
          color: #61656b;
          letter-spacing: -0.34px;
          margin: auto 0;
          font: 400 17px/1 Inter, sans-serif;
        }
        .footer-content {
          display: flex;
          gap: 1px;
        }
        @media (max-width: 991px) {
          .footer {
            padding: 0 20px;
          }
          .footer-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
