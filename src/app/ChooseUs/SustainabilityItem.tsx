import React from "react";
import leaveImg from "../images/Layer_1.png";

interface SustainabilityItemProps {
  title: string;
  description: string;
  icon: string;
}

const SustainabilityItem: React.FC<SustainabilityItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <>
      <article className="sustainability-item">
        <img src={leaveImg.src} className="leaveImg" />
        <div className="icon-wrapper">
          <img loading="lazy" src={icon} alt="" className="icon-image" />
        </div>
        <h3 className="title">{title}</h3>
        <div className="description-container">
          <p className="description">{description}</p>
        </div>
        <style jsx>{`
          .icon-image {
            aspect-ratio: 1.03;
            object-fit: contain;
            width: 100%;
          }
          .leaveImg {
            float: right;
            max-width: 310px;
            z-index: 10;
            position: absolute;
            right: 0;
            margin-top: -10%;
          }
          .sustainability-item {
            display: flex;
            min-height: 100%;
            width: 100%;
            max-width: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .icon-wrapper {
            display: flex;
            width: 48px;
            flex-direction: column;
            overflow: hidden;
            align-items: center;
            height: 48px;
          }
          .icon {
            background-blend-mode: color;
            background-color: #fff;
            display: flex;
            width: 100%;
            height: 48px;
          }
          .title {
            width: 100%;
            margin-top: 24px;
            max-width: 100%;
            color: #fff;
            letter-spacing: 0px;
            padding-right: 0px;
            font: 500 24px/1.3 "Clash Display Variable", -apple-system, Roboto,
              Helvetica, sans-serif;
          }
          .description-container {
            align-self: stretch;
            display: flex;
            margin-top: 24px;
            width: 100%;
            flex-direction: column;
            color: #fff;
            letter-spacing: -0.36px;
            justify-content: flex-start;
            font: 600 18px/25px Sora, sans-serif;
          }
          .description {
            margin: 0;
          }
          @media (max-width: 991px) {
            .title,
            .description-container,
            .description {
              max-width: 100%;
            }
          }
        `}</style>
      </article>
    </>
  );
};

export default SustainabilityItem;
