import React from "react";

const Title: React.FC = () => {
  return (
    <>
      <div className="title-container">
        <div className="title-wrapper">
          <h1 className="title">
            <span style={{ fontWeight: 800, color: "rgba(246,161,24,1)" }}>
              Chef
            </span>{" "}
            <span style={{ fontWeight: 300, color: "rgba(232,69,54,1)" }}>
              admin
            </span>
          </h1>
        </div>
      </div>
      <style jsx>{`
        .containter {
          background-color: #111;
          padding: 60px 190px 90px 70px;
        }
        .our-solutions-section {
          display: flex;
          width: 551px;
          max-width: 100%;
          flex-direction: column;
          justify-content: start;
        }
        .our-solutions-title {
          color: #fff;
          letter-spacing: -1.92px;
          font: 400 73px/1 Clash Display Variable, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .our-solutions-description {
          color: #95979e;
          letter-spacing: -0.77px;
          margin-top: 17px;
          font: 600 19px/26px Sora, sans-serif;
        }
        @media (max-width: 991px) {
          .our-solutions-title {
            max-width: 100%;
            font-size: 40px;
          }
          .our-solutions-description {
            max-width: 100%;
          }
        }

        .container2 {
          align-self: end;
          display: flex;
          margin-top: 0px;
          width: 100%;
          max-width: 100%;
          flex-direction: column;
          background-color: #000;
          padding: 60px 190px 90px 70px;
        }

        @media (max-width: 991px) {
          .container2 {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .content-wrapper {
          gap: 20px;
          display: flex;
        }

        @media (max-width: 991px) {
          .content-wrapper {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .left-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 45%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .left-column {
            width: 100%;
          }
        }

        .info-container {
          display: flex;
          width: 100%;
          flex-direction: column;
          font-family: Inter, sans-serif;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .info-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .title-container {
          display: flex;
          width: 100%;
          flex-direction: column;
          color: #000;
          justify-content: start;
          font: 600 34px/1.5 "Visby CF", -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .title-container {
            max-width: 100%;
          }
        }

        .title-wrapper {
          display: flex;
          width: 100%;
          align-items: start;
          gap: -48px;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .title-wrapper {
            max-width: 100%;
          }
        }

        .title {
          font-size: 32px;
        }

        .description-container {
          display: flex;
          margin-top: 19px;
          width: 100%;
          flex-direction: column;
          font-size: 18px;
          color: #95979e;
          font-weight: 300;
          letter-spacing: -0.36px;
          line-height: 25px;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .description-container {
            max-width: 100%;
          }
        }

        .description-wrapper {
          position: relative;
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: start;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .description-wrapper {
            max-width: 100%;
          }
        }

        .description {
          align-self: stretch;
          z-index: 0;
          color: #fff !important;
        }

        @media (max-width: 991px) {
          .description {
            max-width: 100%;
          }
        }

        .icon {
          aspect-ratio: 5.62;
          object-fit: contain;
          object-position: center;
          width: 101px;
          position: absolute;
          z-index: 0;
          max-width: 100%;
          left: 0;
          top: 0;
          height: 18px;
        }

        .icon-2 {
          aspect-ratio: 5.62;
          object-fit: contain;
          object-position: center;
          width: 101px;
          position: absolute;
          z-index: 0;
          max-width: 100%;
          left: 66px;
          top: 124px;
          height: 18px;
        }

        .cta-container {
          align-self: start;
          display: flex;
          margin-top: 19px;
          align-items: start;
          gap: 17px;
          font-size: 13px;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.13px;
          justify-content: start;
        }

        .cta-button {
          position: relative;
          display: flex;
          min-width: 240px;
          min-height: 38px;
          align-items: flex-start;
          gap: 19px;
          justify-content: center;
          padding: 9px 19px;
        }

        .cta-background {
          border-radius: 11999px;
          background-color: #090a0c;
          align-self: start;
          position: absolute;
          z-index: 0;
          display: flex;
          min-width: 240px;
          height: 38px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 254px;
        }

        .cta-text {
          z-index: 0;
          margin: auto 0;
        }

        .right-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 55%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .right-column {
            width: 100%;
          }
        }

        .image-container {
          border-radius: 16px;
          background-color: #0c0c0d;
          box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.4);
          display: flex;
          min-height: 562px;
          flex-direction: column;
          overflow: hidden;
          justify-content: start;
          width: 100%;
        }

        @media (max-width: 991px) {
          .image-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .footer {
          align-self: end;
          display: flex;
          margin-top: 51px;
          width: 639px;
          max-width: 100%;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .footer {
            margin-top: 40px;
          }
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          justify-content: start;
        }

        .footer-icon-wrapper {
          display: flex;
          width: 100%;
          align-items: start;
          gap: -31px;
          justify-content: start;
        }

        .footer-icon-container {
          display: flex;
          width: 192px;
          flex-direction: column;
          align-items: start;
          justify-content: start;
        }

        .footer-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 30px;
        }

        .footer-heading {
          margin-top: 12px;
          width: 71px;
          color: #fff;
          letter-spacing: -0.48px;
          font: 400 17px/1 Menlo, sans-serif;
        }

        .footer-links {
          align-self: end;
          display: flex;
          margin-top: 22px;
          align-items: center;
          gap: 9px;
          justify-content: start;
        }

        .footer-link {
          transform: rotate(3.141592653589793rad);
          align-self: stretch;
          display: flex;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          margin: auto 0;
        }

        .footer-link-background {
          border-radius: 11999px;
          background-color: #090a0c;
          align-self: stretch;
          display: flex;
          min-height: 38px;
          width: 63px;
          margin: auto 0;
        }

        .footer-link-2 {
          align-self: stretch;
          display: flex;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          margin: auto 0;
        }

        .footer-link-background-2 {
          border-radius: 11999px;
          background-color: #090a0c;
          align-self: stretch;
          display: flex;
          min-height: 38px;
          width: 63px;
          margin: auto 0;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
};

export default Title;
