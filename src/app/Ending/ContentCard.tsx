import axios from "axios";
import React, { useEffect, useState } from "react";

interface ContentCardProps {
  title: string;
  content: string;
  imageSrc: string;
}

const ContentCard: React.FC<ContentCardProps> = () => {
  const [singleBlog, setsingleBlog] = useState([
    {
      imgURL: "",
      tag: "",
      title: "",
      redirectURL: "",
      createdTime: "",
    },
  ]);

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

        const filteredBlogs = originalArray.filter((item: any) => item.cover);
        console.log("filterBlogs ===");
        console.log(filteredBlogs);

        let finalArray = [];
        filteredBlogs.map((item: any, key: number) => {
          if (key == 0) {
            console.log("First Article ===");
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
            finalArray.push({
              imgURL: imageUrl,
              tag: author,
              title: title,
              redirectURL: redirectURL,
              createdTime: createdTime,
            });
            setsingleBlog(finalArray);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };

    getBlogs();
  }, []);

  return (
    <>
      {singleBlog[0].imgURL ? (
        <>
          <img
            src={singleBlog[0].imgURL}
            alt="Whitepaper or guide illustration"
            className="content-image"
          />
          <div className="content-text">
            <h2 className="content-title">{singleBlog[0].tag}</h2>
            <div className="content-description">
              <a href={singleBlog[0].redirectURL} target="_blank">
                <p className="description-text">{singleBlog[0].title}</p>
              </a>
              <a
                href={singleBlog[0].redirectURL}
                className="read-more"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <style jsx>{`
        .content-image {
          aspect-ratio: 1.46;
          object-fit: contain;
          object-position: center;
          width: 694px;
          border-radius: 14px;
          align-self: start;
          min-width: 240px;
        }
        .content-text {
          display: flex;
          min-width: 240px;
          flex-direction: column;
          justify-content: start;
          flex: 1;
          flex-basis: 0%;
        }
        .content-title {
          width: 100%;
          gap: 29px;
          letter-spacing: -0.77px;
          font: 400 28px/1 Menlo, sans-serif;
        }
        .content-description {
          display: flex;
          margin-top: 14px;
          width: 100%;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .description-text {
          flex: 1;
          width: 100%;
          font: 600 37px/49px Sora, sans-serif;
        }
        .read-more {
          align-self: stretch;
          margin-top: 141px;
          width: 100%;
          letter-spacing: -0.77px;
          flex-wrap: wrap;
          font: 700 23px/38px Menlo, -apple-system, Roboto, Helvetica,
            sans-serif;
          color: inherit;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .content-image,
          .content-text,
          .content-title,
          .description-text {
            max-width: 100%;
          }
          .description-text {
            max-width: 100%;
            font-size: x-large !important;
            line-height: normal !important;
          }
          .content-title {
            font: 600 19px / 1 Inter, sans-serif !important;
          }
          .read-more {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default ContentCard;
