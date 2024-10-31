import React from "react";
import ContactForm from "./ContactForm";

interface GetInTouchProps {
  backgroundImageSrc: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ backgroundImageSrc }) => {
  return (
    <section className="get-in-touch" id="contact">
      <div className="content-wrapper">
        <img src={backgroundImageSrc} alt="" className="background-image" />
        <h1 className="title">Get In Touch</h1>
        <div className="contact-container">
          <p className="description">
            Let us know about your project & business from we will help you grow
            your scratch.
          </p>
          <ContactForm />
        </div>
      </div>

      <style jsx>{`
        .get-in-touch {
          border-radius: 0;
          padding-top: 61px;
          background: #000;
        }
        .content-wrapper {
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 739px;
          width: 100%;
          overflow: hidden;
          align-items: center;
          justify-content: flex-start;
          padding: 91px 151px;
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .title {
          position: relative;
          background: linear-gradient(
            135deg,
            #fff 30%,
            #ecaa8b 80%,
            #fdf7fe 100%
          );
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          font: 700 150px/1 "Clash Display Variable", -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        .contact-container {
          position: relative;
          border-radius: 14px;
          background-color: #111;
          box-shadow: 0 5px 107px -33px #ff5100;
          display: flex;
          margin-top: 21px;
          width: 552px;
          max-width: 100%;
          flex-direction: column;
          overflow: hidden;
          font-family: Sora, sans-serif;
          justify-content: flex-start;
          padding: 37px 36px 37px 37px;
        }
        .description {
          color: #fff;
          font-size: 19px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: -0.77px;
        }
        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
            padding: 0 0px;
          }
          .title {
            max-width: 100% !important;
            font-size: 40px !important;
            text-align: center !important;
          }
          .contact-container {
            padding: 0 20px;
            width: 90% !important;
            margin: 20px auto;
          }
          .description {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default GetInTouch;
