import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import { expertiseData } from "./expertiseData";
import expertiseBG from "../images/expertise-bg.png";

const StrategicExpertise: React.FC = () => {
  return (
    <section className="strategic-expertise">
      <div className="expertise-container">
        <div className="expertise-content">
          <div className="expertise-cards">
            {expertiseData.map((item, index) => (
              <ExpertiseCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="expertise-image-wrapper">
          <img
            loading="lazy"
            src={expertiseBG.src}
            alt="Strategic expertise illustration"
            className="expertise-image"
          />
        </div>
      </div>
      <style jsx>{`
        .strategic-expertise {
          align-self: start;
          z-index: 2;
          margin-top: -150px;
          width: 100%;
          max-width: 90%;
        }
        .expertise-container {
          display: flex;
          gap: 20px;
          margin-top: 175px;
        }
        .expertise-content {
          width: 35%;
        }
        .expertise-cards {
          background-color: #111;
          z-index: 10;
          display: flex;
          min-height: max-content;
          flex-direction: column;
          justify-content: center;
          margin: 161px -121px auto 0;
          padding: 39px 40px 39px 40px;
          z-index: 10;
          position: relative;
          margin-top: 60%;
        }
        .expertise-image-wrapper {
          width: 50%;
        }
        .expertise-image {
          aspect-ratio: 0.7;
          object-fit: contain;
          width: 75%;
          border-radius: 14px;
          flex-grow: 1;
          z-index: 2;
        }
        @media (max-width: 991px) {
          .strategic-expertise {
            max-width: 100%;
          }
          .expertise-container {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
          .expertise-content,
          .expertise-image-wrapper {
            width: 100%;
          }
          .expertise-cards {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
          .expertise-image {
            max-width: 100%;
            right: 10% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StrategicExpertise;
