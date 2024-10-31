import React from "react";
import ContentCard from "./ContentCard";

interface WhitepapersAndGuidesProps {
  title: string;
  content: string;
  imageSrc: string;
}

const WhitepapersAndGuides: React.FC<WhitepapersAndGuidesProps> = ({
  title,
  content,
  imageSrc,
}) => {
  return (
    <section className="whitepapers-guides">
      <div className="content-wrapper">
        <ContentCard title={title} content={content} imageSrc={imageSrc} />
      </div>
      <style jsx>{`
        .whitepapers-guides {
          background-color: #000;
          display: flex;
          width: 100%;
          flex-direction: column;
          color: #fff;
          justify-content: center;
          padding: 100px 60px 150px 60px;
        }
        .content-wrapper {
          display: flex;
          width: 100%;
          gap: 37px;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 991px) {
          .whitepapers-guides {
            max-width: 100%;
            padding: 40px 3px 0 0;
            padding: 0 20px;
            margin-bottom: 40px !important;
          }
          .content-wrapper {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default WhitepapersAndGuides;
