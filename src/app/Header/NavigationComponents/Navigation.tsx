import React, { useState } from "react";
import NavLink from "./NavLink";
import ContactButton from "./ContactButton";
import Logo from "../../images/godark-logo.png";

interface NavigationProps {
  navItems: Array<{ text: string; href: string }>;
}

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  const [showtoggle, setshowtoggle] = useState(false);

  const openMenu = async () => {
    console.log("open navigation");

    if (showtoggle) {
      setshowtoggle(false);
    } else if (!showtoggle) {
      setshowtoggle(true);
    }
  };

  return (
    <nav className="main-nav">
      {/* <div className="logo-container">
        <div className="logo">
          <img src={Logo.src} className="logo-img" />
        </div>
      </div> */}
      <div>
        <img src={Logo.src} className="logo-img" />
      </div>
      <div className="gradient-background" />
      <div className="topnav">
        {/* <!-- Navigation links (hidden by default) --> */}
        <div
          id="myLinks"
          style={{
            display: showtoggle ? "block" : "none",
          }}
        >
          {navItems.map((item, index) => (
            <a href={item.href} onClick={openMenu}>
              {item.text}
            </a>
          ))}
          <a href="#contact" onClick={openMenu}>
            Contact
          </a>
        </div>
        {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
        <a href="javascript:void(0);" className="icon" onClick={openMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <NavLink key={index} text={item.text} href={item.href} />
        ))}
        <ContactButton />
      </ul>
      <style jsx>{`
        .logo-img {
          width: 60px;
          padding-top: 20px;
        }
        .main-nav {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: transparent;
          padding: 0px 95px 0;
        }
        @media (max-width: 991px) {
          .main-nav {
            padding: 0 20px;
          }
        }
        .logo-container {
          align-self: stretch;
          z-index: 1;
          display: flex;
          min-height: 50px;
          flex-direction: column;
          justify-content: flex-start;
          width: 85px;
          margin: auto 0;
        }
        .logo {
          display: flex;
          width: 85px;
          flex-direction: column;
          overflow: hidden;
          align-items: flex-start;
          justify-content: center;
          padding: 10px 7px;
        }
        .logo-inner {
          box-shadow: 2px -2px 3px 3px #ff5100;
          border-radius: 50%;
          display: flex;
          width: 31px;
          height: 31px;
          border: 2px solid #ff5100;
        }
        .gradient-background {
          align-self: flex-start;
          position: absolute;
          z-index: 0;
          display: flex;
          min-height: 143px;
          width: 1728px;
          right: 0;
          bottom: -52px;
          height: 143px;
        }
        @media (max-width: 991px) {
          .gradient-background {
            max-width: 100%;
          }
        }
        .nav-list {
          align-self: stretch;
          z-index: 1;
          display: flex;
          min-width: 240px;
          align-items: center;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2.29px;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin: auto 0;
          font: 400 11px Sora, sans-serif;
          list-style-type: none;
          padding: 0;
        }
        @media (max-width: 991px) {
          .nav-list {
            max-width: 100%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
