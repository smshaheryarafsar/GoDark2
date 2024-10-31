import React from "react";
import Gradient_bg from "../images/gradient_bg.png";

const CTAButton: React.FC = () => {
  return (
    <>
      <div className="cta-container">
        {/* <div className="cta-wrapper">
          <button>
            <div className="left"></div>
            Hover me!
            <div className="right"></div>
          </button>
        </div> */}
        {/* <div className="cta-wrapper">
          <button className="cta-button">
            <div className="cta-background" />
            <span className="cta-text">Discover Our Solutions</span>
          </button>
        </div> */}
        <div id="Wrap">
          <div className="Button-txt">Discover Our Solutions</div>
          <img
            className="FollowBox"
            // src="https://source.unsplash.com/Pd8tLVGx2O4/200x250"
            src={Gradient_bg.src}
            alt=""
            style={{ opacity: 0.9 }}
          />
        </div>
      </div>
      {/* 
      <div id="Wrap">
        <div className="Button-txt">Discover Our Solutions</div>
        <img
          className="FollowBox"
          src={Gradient_bg.src}
          alt=""
          style={{ opacity: 0.8 }}
        />
      </div> */}

      <style jsx>{`
        .Button-txt {
          font-size: 18px;
          width: 100%;
          z-index: 4;
          display: block;
          color: #6e422b;
          text-transform: uppercase;
          text-align: center;
          font-weight: bolder;
          font-family: Menlo, sans-serif !important;
        }
        button {
          position: relative;
          padding: 10px 20px;
          border: none;
          background: none;
          cursor: pointer;

          font-family: "Source Code Pro";
          font-weight: 900;
          text-transform: uppercase;
          font-size: 30px;
          color: var(--text-color);

          background-color: var(--btn-color);
          box-shadow: var(--shadow-color) 2px 2px 22px;
          border-radius: 4px;
          z-index: 0;
          overflow: hidden;
        }

        button:focus {
          outline-color: transparent;
          box-shadow: var(--btn-color) 2px 2px 22px;
        }

        .right::after,
        button::after {
          content: var(--content);
          display: block;
          position: absolute;
          white-space: nowrap;
          padding: 40px 40px;
          pointer-events: none;
        }

        button::after {
          font-weight: 200;
          top: -30px;
          left: -20px;
        }

        .right,
        .left {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
        }
        .right {
          left: 66%;
        }
        .left {
          right: 66%;
        }
        .right::after {
          top: -30px;
          left: calc(-66% - 20px);

          background-color: var(--bg-color);
          color: transparent;
          transition: transform 0.4s ease-out;
          transform: translate(0, -90%) rotate(0deg);
        }

        button:hover .right::after {
          transform: translate(0, -47%) rotate(0deg);
        }

        button .right:hover::after {
          transform: translate(0, -50%) rotate(-7deg);
        }

        button .left:hover ~ .right::after {
          transform: translate(0, -50%) rotate(7deg);
        }

        /* bubbles */
        button::before {
          content: "";
          pointer-events: none;
          opacity: 0.6;
          background: radial-gradient(
              circle at 20% 35%,
              transparent 0,
              transparent 2px,
              var(--text-color) 3px,
              var(--text-color) 4px,
              transparent 4px
            ),
            radial-gradient(
              circle at 75% 44%,
              transparent 0,
              transparent 2px,
              var(--text-color) 3px,
              var(--text-color) 4px,
              transparent 4px
            ),
            radial-gradient(
              circle at 46% 52%,
              transparent 0,
              transparent 4px,
              var(--text-color) 5px,
              var(--text-color) 6px,
              transparent 6px
            );

          width: 100%;
          height: 300%;
          top: 0;
          left: 0;
          position: absolute;
          animation: bubbles 5s linear infinite both;
        }

        @keyframes bubbles {
          from {
            transform: translate();
          }
          to {
            transform: translate(0, -66.666%);
          }
        }

        .cta-container {
          display: flex;
          margin-top: 42px;
          width: 331px;
          max-width: 100%;
          align-items: center;
          color: #5a250a;
          text-transform: uppercase;
          letter-spacing: -0.22px;
          justify-content: start;
          font: 14px Inter, sans-serif;
        }

        @media (max-width: 991px) {
          .cta-container {
            margin-top: 40px;
          }
        }

        .cta-wrapper {
          align-self: stretch;
          display: flex;
          min-width: 395px;
          width: 331px;
          flex-direction: column;
          justify-content: center;
          margin: auto 0;
          padding: 6px 5px;
        }

        .cta-button {
          border-radius: 11999px;
          background-color: #d1d1d1;
          padding: 13px 61px 13px 62px;
          position: relative;
          display: flex;
          min-height: 48px;
          align-items: flex-start;
          gap: 40px 60px;
          overflow: hidden;
          justify-content: center;

          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 991px) {
          .cta-button {
            padding: 0 20px;
          }
        }

        .cta-background {
          align-self: start;
          position: absolute;
          z-index: 0;
          display: flex;
          min-width: 240px;
          width: 289px;
          height: 145px;
          right: -109px;
          bottom: 0;
        }

        .cta-text {
          z-index: 0;
          margin: auto 0;
          font-family: Menlo, sans-serif !important;
          font-size: 18px;
          padding: 6px 0px;
        }
      `}</style>
    </>
  );
};

export default CTAButton;
