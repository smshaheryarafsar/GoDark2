import React from "react";

const ContactButton: React.FC = () => {
  return (
    <li className="contact-item">
      <a className="contact-button" href="#contact">
        Contact
      </a>
      <style jsx>{`
        .contact-item {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          color: #000;
          white-space: nowrap;
          line-height: 31px;
          justify-content: flex-start;
          margin: auto 0;
        }
        .contact-button {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 28px;
          justify-content: flex-start;
          padding: 2px 29px 1px 28px;
          background: none;
          border: none;
          cursor: pointer;
          background: #fff;
        }
        .button-background {
          background-color: #fff;
          position: absolute;
          z-index: 0;
          display: flex;
          height: 35px;
          left: -6px;
          right: 0;
          top: -7px;
          bottom: 0;
          width: 130px;
        }
        .button-text {
          z-index: 1;
          position: relative;
        }
        @media (max-width: 991px) {
          .contact-item {
            white-space: initial;
          }
          .contact-button {
            padding: 0 20px;
          }
        }
      `}</style>
    </li>
  );
};

export default ContactButton;
