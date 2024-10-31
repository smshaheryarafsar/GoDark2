import React from "react";

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        {text}
      </a>
      <style jsx>{`
        .nav-item {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          margin: auto 0;
          padding: 6px 45px 1px 0;
        }
        .nav-link {
          color: inherit;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .nav-item {
            white-space: initial;
          }
        }
      `}</style>
    </li>
  );
};

export default NavLink;
