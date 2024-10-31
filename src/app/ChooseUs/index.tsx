import React from "react";
import FeatureCard from "./FeatureCard";
import StrategicExpertise from "./SecondCard";
import SustainabilitySection from "./Sustain";
import technologyImg from "../images/technology.png";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: technologyImg.src,
    title: "Innovative Technology",
    description:
      "Our solutions are built on cutting-edge neural technology and advanced machine learning algorithms, ensuring our partners stay ahead of the competition",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="why-choose-us" id="why-us">
      <div className="content-wrapper">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-list">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <StrategicExpertise />
      <SustainabilitySection />
      <style jsx>{`
        .why-choose-us {
          display: flex;
          width: 100%;
          max-width: 1551px;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 60px 60px;
          max-width: 100%;
          background: #000;
        }
        .content-wrapper {
          align-self: start;
          display: flex;
          min-height: 87px;
          flex-direction: column;
          justify-content: start;
        }
        .section-title {
          color: #fff;
          font: 500 64px/1 Clash Display Variable, -apple-system, Roboto,
            Helvetica, sans-serif;
          width: 100%;
          max-width: 660px;
        }
        .feature-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          right: 0;
          position: absolute;
          z-index: 9;
          margin: -60px 60px auto auto;
        }
        @media (max-width: 991px) {
          .why-choose-us {
            max-width: 100%;
          }
          .section-title {
            max-width: 100% !important;
            font-size: 34px !important;
            z-index: 999 !important;
            position: relative !important;
            margin-bottom: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;
