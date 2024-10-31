import React from "react";

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  author: string;
  readTime: string;
  redirectURL: string;
  readTimeIcon: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  title,
  author,
  readTime,
  redirectURL,
  readTimeIcon,
}) => {
  return (
    <>
      <article className="article-card">
        <a href={redirectURL} target="_blank">
          <div className="image-wrapper">
            <img src={imageUrl} alt={title} className="article-image" />
          </div>
          <h2 className="article-title">{title}</h2>
        </a>
        <div className="article-meta">
          <div className="author-name">{author}</div>
          <div className="read-time">
            <div className="read-time-icon">
              <img src={readTimeIcon} alt="" className="read-time-icon" />
            </div>
            <div className="read-time-text">{readTime}</div>
          </div>
        </div>
      </article>
      <style jsx>{`
        .main-container {
          padding: 60px 60px;
          background: #000;
        }
        .blog-header {
          align-self: start;
          z-index: 10;
          margin-top: -67px;
        }
        .blog-title {
          color: #fff;
          font: 700 81px/1 Clash Display Variable, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .blog-title {
            max-width: 100%;
            font-size: 40px;
          }
        }

        .insights-container {
          display: flex;
          margin-top: 81px;
          width: 100%;
          flex-direction: column;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .insights-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .insights-header {
          display: flex;
          width: 100%;
          align-items: start;
          gap: 40px 100px;
          color: #fff;
          justify-content: space-between;
          flex-wrap: wrap;
          font: 500 28px/1 "Clash Display", -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .insights-header {
            max-width: 100%;
          }
        }

        .insights-grid {
          display: flex;
          margin-top: 29px;
          width: 100%;
          align-items: start;
          gap: 40px 94px;
          justify-content: start;
          flex-wrap: wrap;
        }

        @media (max-width: 991px) {
          .insights-grid {
            max-width: 100%;
          }
        }

        .article-card {
          display: flex;
          min-width: 28%;
          flex-direction: column;
          justify-content: start;
          width: 28%;
        }

        @media (max-width: 991px) {
          .article-card {
            max-width: 100%;
          }
        }

        .image-wrapper {
          display: flex;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .image-wrapper {
            max-width: 100%;
          }
        }

        .article-image {
          aspect-ratio: 1.9;
          object-fit: cover;
          object-position: center;
          width: 100%;
          border-radius: 14px;
        }

        @media (max-width: 991px) {
          .article-image {
            max-width: 100%;
          }
        }

        .article-title {
          display: flex;
          margin-top: 14px;
          width: 100%;
          flex-direction: column;
          color: #fff;
          justify-content: start;
          font: 600 29px/40px Sora, sans-serif;
        }

        @media (max-width: 991px) {
          .article-title {
            max-width: 100%;
          }
        }

        .article-meta {
          display: flex;
          margin-top: 14px;
          width: 100%;
          align-items: center;
          justify-content: start;
          flex-wrap: wrap;
        }

        @media (max-width: 991px) {
          .article-meta {
            max-width: 100%;
          }
        }

        .author-name {
          color: #fff;
          font: 600 19px/1 Inter, sans-serif;
          width: 100%;
          margin-bottom: 10px;
        }

        .read-time {
          display: flex;
          align-items: center;
          justify-content: start;
          height: 100%;
        }

        .read-time-icon {
          display: flex;
          min-height: 19px;
          width: 19px;
          flex-direction: column;
          overflow: hidden;
          justify-content: center;
        }

        .read-time-text {
          color: #fff;
          font: 400 17px/1 Inter, sans-serif;
          margin-left: 7px;
        }
      `}</style>
    </>
  );
};

export default ArticleCard;
