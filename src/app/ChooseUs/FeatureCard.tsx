import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="feature-card">
      <div className="icon-wrapper">
        <img loading="lazy" src={icon} alt="" className="icon-image" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <style jsx>{`
        .icon-image {
          aspect-ratio: 1.03;
          object-fit: contain;
          width: 100%;
        }
        .feature-card {
          background-color: #111;
          display: flex;
          min-height: 100%;
          flex-direction: column;
          justify-content: center;
          padding: 39px 40px;
          max-width: 558px;
          width: 100%;
          margin-top: 15%;
        }
        .icon-wrapper {
          display: flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .icon {
          background-blend-mode: color;
          background-color: #ff5100;
          width: 100%;
          height: 100%;
        }
        .feature-title {
          margin-top: 24px;
          color: #fff;
          letter-spacing: -0.67px;
          font: 500 24px/1 Clash Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .feature-description {
          margin-top: 24px;
          color: #fff;
          letter-spacing: -0.36px;
          font: 300 18px/25px Sora, sans-serif;
        }
        @media (max-width: 991px) {
          .feature-card {
            max-width: 100%;
            padding: 20px;
          }
          .feature-title,
          .feature-description {
            max-width: 100%;
          }
        }
      `}</style>
    </article>
  );
};

export default FeatureCard;
