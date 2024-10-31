import React from "react";

const Description: React.FC = () => {
  return (
    <>
      <div className="description-container">
        <h2 className="main-title">
          Revolutionising the F&B Ecosystem with Innovative Digital Solutions
        </h2>
        <p className="sub-title">
          Empowering the Future of Hospitality Through Cutting-Edge Technology
          and Data-Driven Insights
        </p>
      </div>
      <style jsx>{`
        .description-container {
          display: flex;
          margin-top: 100px;
          width: 100%;
          flex-direction: column;
          font-weight: 700;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .description-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .main-title {
          letter-spacing: 3px;
          font: 40px/55px Clash Display Variable, -apple-system, Roboto,
            Helvetica, sans-serif;
          background: linear-gradient(
            135deg,
            #ffffff 30%,
            #ecaa8b 80%,
            #fdf7fe 100%
          );
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          font-weight: 800;
        }

        @media (max-width: 991px) {
          .main-title {
            max-width: 100%;
            font-size: 40px;
            line-height: 54px;
          }
        }

        .sub-title {
          color: #e5e5e7;
          letter-spacing: -0.86px;
          margin-top: 42px;
          font: 400 22px/30px Sora, sans-serif;
        }

        @media (max-width: 991px) {
          .sub-title {
            max-width: 100%;
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Description;
