import React from "react";

const HeroImage: React.FC = () => {
  return (
    <>
      <div className="image-column">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4efa3d45af9a17c2e96dae8c2162f1ec7a458482861d39e7c55342dea3ed4f61?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63"
          className="hero-image"
          alt="GoDark.ai hero visual representation"
        /> */}
      </div>
      <style jsx>{`
        .image-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 45%;
          margin-left: 20px;
          top: 59px;
          position: absolute;
          right: 0;
        }

        @media (max-width: 991px) {
          .image-column {
            width: 100%;
          }

          .image-column {
            margin-left: 0px !important;
            top: 20px !important;
          }
        }

        .hero-image {
          aspect-ratio: 0.81;
          object-fit: contain;
          object-position: center;
          width: 100%;
          border-radius: 0;
          flex-grow: 1;
        }

        @media (max-width: 991px) {
          .hero-image {
            max-width: 100%;
            margin-top: 40px;
          }
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

export default HeroImage;
