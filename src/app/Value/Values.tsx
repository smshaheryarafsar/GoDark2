import React from "react";
import ValueCard from "./ValueCard";
import { ValueCardProps } from "./ValueCard";

interface ValuesProps {
  title: string;
  description: string;
  values: ValueCardProps[];
}

const Values: React.FC<ValuesProps> = ({ title, description, values }) => {
  return (
    <section className="values">
      <header className="values__header">
        <h2 className="values__title">{title}</h2>
        <p className="values__description">{description}</p>
      </header>
      <div className="values__cards">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
      <style jsx>{`
        .values {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background-color: #111;
          padding: 60px 40px;
        }
        .values__header {
          display: flex;
          width: 622px;
          max-width: 100%;
          flex-direction: column;
          font-weight: 400;
          justify-content: flex-start;
        }
        .values__title {
          color: #fff;
          letter-spacing: -1.92px;
          font: 73px/1 "Clash Display Variable", -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .values__description {
          color: #95979e;
          letter-spacing: -0.77px;
          margin-top: 17px;
          font: 19px/26px Sora, sans-serif;
        }
        .values__cards {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 59px;
        }
        @media (max-width: 991px) {
          .values__title {
            max-width: 100%;
            font-size: 40px;
          }
          .values__description {
            max-width: 100%;
          }
          .values__cards {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Values;
