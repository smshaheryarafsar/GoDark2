import React from "react";

export interface ValueCardProps {
  title: string;
  description: string;
  backgroundColor: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  backgroundColor,
}) => {
  return (
    <article className="value-card" style={{ backgroundColor }}>
      <h3 className="value-card__title">{title}</h3>
      <p className="value-card__description">{description}</p>
      <style jsx>{`
        .value-card {
          display: flex;
          min-height: 300px;
          width: 699px;
          max-width: 100%;
          flex-direction: column;
          align-items: flex-start;
          color: #fff;
          justify-content: flex-start;
          padding: 41px 49px 101px;
        }
        .value-card__title {
          width: 154px;
          max-width: 154px;
          white-space: nowrap;
          letter-spacing: -0.67px;
          font: 400 29px/1 "Clash Display Variable", -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .value-card__description {
          margin-top: 24px;
          width: 100%;
          letter-spacing: -0.36px;
          font: 300 18px/25px Sora, sans-serif;
        }
        @media (max-width: 991px) {
          .value-card {
            padding: 20px 20px 100px;
          }
          .value-card__title {
            white-space: initial;
          }
          .value-card__description {
            max-width: 100%;
          }
        }
      `}</style>
    </article>
  );
};

export default ValueCard;
