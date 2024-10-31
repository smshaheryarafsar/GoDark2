import React from "react";
import SustainabilityItem from "./SustainabilityItem";
import Reduce from "../images/89357c3cf03b5166bac9c11fb5974ce2.png";

interface SustainabilityData {
  title: string;
  description: string;
  iconSrc: string;
}

const sustainabilityItems: SustainabilityData[] = [
  {
    iconSrc: Reduce.src,
    title: "Reducing waste and boosting sustainability",
    description:
      "We prioritise sustainability and efficiency, helping businesses reduce waste, optimise resources, and embrace eco-friendly practices.",
  },
];

const SustainabilitySection: React.FC = () => {
  return (
    <section className="sustainability-section">
      {sustainabilityItems.map((item, index) => (
        <SustainabilityItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.iconSrc}
        />
      ))}
      <style jsx>{`
        .sustainability-section {
          background-color: #45bb5b;
          display: flex;
          width: 558px;
          max-width: 100%;
          flex-direction: column;
          align-items: flex-start;
          padding: 39px 40px 39px 40px;
          margin-left: auto;
          margin-top: -100px;
          z-index: 10;
        }
        @media (max-width: 991px) {
          .sustainability-section {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilitySection;
