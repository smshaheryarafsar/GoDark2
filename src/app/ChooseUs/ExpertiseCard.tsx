import React from "react";

interface ExpertiseCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <>
      <article className="expertise-item">
        <div className="expertise-icon">
          <img loading="lazy" src={iconSrc} alt="" className="icon-image" />
        </div>
        <h3 className="expertise-title">{title}</h3>
        <p className="expertise-description">{description}</p>
        <style jsx>{`
          .expertise-item {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: start;
            justify-content: start;
          }
          .expertise-icon {
            border-radius: 8px;
            background-color: #ffdece;
            display: flex;
            width: 48px;
            height: 48px;
            align-items: center;
            justify-content: center;
            padding: 0 7px;
          }
          .icon-image {
            aspect-ratio: 1.03;
            object-fit: contain;
            width: 100%;
          }
          .expertise-title {
            margin-top: 24px;
            width: 100%;
            max-width: 100%;
            color: #fff;
            letter-spacing: -0.67px;
            font: 500 24px/1 Clash Display, -apple-system, Roboto, Helvetica,
              sans-serif;
          }
          .expertise-description {
            align-self: stretch;
            margin-top: 24px;
            width: 100%;
            color: #fff;
            letter-spacing: -0.36px;
            font: 300 18px/25px Sora, sans-serif;
          }
          @media (max-width: 991px) {
            .expertise-item,
            .expertise-description {
              max-width: 100%;
              right: 10% !important;
            }
          }
        `}</style>
      </article>
    </>
  );
};

export default ExpertiseCard;
