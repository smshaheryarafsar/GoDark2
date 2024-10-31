import React from "react";

const BrandName: React.FC = () => {
  return (
    <>
      <h1 className="brand-name">
        <span
          className="font-clash-display-variable"
          style={{ fontWeight: 400 }}
        >
          Go
        </span>
        Dark.ai
      </h1>
      <style jsx>{`
        .brand-name {
          background-blend-mode: normal;
          align-self: start;
          /* background: -webkit-linear-gradient(#aeaeae, #000); */
          background: linear-gradient(180deg, #5c5c5c 64%, #000000 98%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font: 500 120px/1 Clash Display, -apple-system, Roboto, Helvetica,
            sans-serif;
          padding-top: 170px;
        }

        @media (max-width: 991px) {
          .brand-name {
            max-width: 100%;
            font-size: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default BrandName;
