import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import readTimeIcon from "../images/read-time-icon.svg";

const BlogAndResources: React.FC = () => {
  const [blogArray, setblogArray] = useState<any[]>([]);
  // const databaseId = "122806e58a3e805b8bb0c9ce97b17775"; // Replace with your Notion database ID.

  useEffect(() => {
    const getBlogs = async () => {
      try {
        //Try content
        const res = await axios.get(
          "https://godark.sadaynaal.com/goDarkBlogs.php"
        );
        // const message = res.data
        console.log("Blog Data ===");
        console.log(res.data.results);
        const originalArray = res.data.results;
        const articlesArray: any[] = [];

        const filteredBlogs = originalArray.filter((item: any) => item.cover);
        console.log("filterBlogs ===");
        console.log(filteredBlogs);

        filteredBlogs.map((item: any, key: number) => {
          if (key > 0) {
            console.log("Remaining Article ===");
            const imageUrl = item.cover.file.url;
            const author = item.properties.Owner.people[0].name;
            const title = item.properties.Page.title[0].text.content;
            const redirectURL = item.public_url;
            const createdTime = key + 2 + " min read";
            console.log(imageUrl);
            console.log(author);
            console.log(title);
            console.log(redirectURL);
            console.log(createdTime);
            articlesArray.push({
              imageUrl: imageUrl,
              author: author,
              title: title,
              redirectURL: redirectURL,
              readTime: createdTime,
            });
          }
        });

        console.log("articlesArray =====");
        console.log(articlesArray);
        const topthreeArticles = articlesArray.slice(0, 3);
        console.log("topthreeArticles ==> ");
        console.log(topthreeArticles);
        setblogArray(topthreeArticles);

        // console.log("imageUrl => " + res.data.results.cover.external.url);
        // console.log('title => ' + res.data.results)
        // console.log('author => ' + res.data.results)
        // console.log('readTime => ' + res.data.results)
        // console.log('redirectUrl => ' + res.data.results)
      } catch (e) {
        console.log(e);
      }
    };

    getBlogs();
  }, []);

  return (
    <>
      <div className="main-container" id="blogs-resources">
        <h1 className="blog-title">Blog and Resources</h1>
        <section className="insights-container">
          <header className="insights-header">
            <h1>Insights and Trends</h1>
            {/* <nav>
              <a href="#" aria-label="See all insights and trends">
                See All
              </a>
            </nav> */}
          </header>
          <div className="insights-grid">
            {blogArray.map((article, index) => (
              <ArticleCard
                key={index}
                imageUrl={article.imageUrl}
                title={article.title}
                author={article.author}
                readTime={article.readTime}
                redirectURL={article.redirectURL}
                readTimeIcon={readTimeIcon.src}
              />
            ))}
          </div>
        </section>
      </div>
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
          background: linear-gradient(
            135deg,
            #fff 30%,
            #ecaa8b 80%,
            #fdf7fe 100%
          );
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          font: 1000 80px / 1 "Clash Display Variable", -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .blog-title {
            max-width: 100%;
            font-size: 40px;
          }
          .main-container {
            padding: 60px 31px !important;
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

        .insights-header > h1 {
          font-weight: 400 !important;
        }

        @media (max-width: 991px) {
          .insights-header {
            max-width: 100%;
          }
          .insights-header > h1 {
            font-weight: 400 !important;
            font-size: 20px !important;
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
          min-width: 240px;
          flex-direction: column;
          justify-content: start;
          width: 448px;
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
          object-fit: contain;
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
            font-size: x-large !important;
            line-height: normal !important;
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

export default BlogAndResources;
