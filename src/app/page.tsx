"use client";
import Slider from "./Slider/index";
import AboutUs from "./About/index";
// import Overview from "./Overview/index";
import Soltuions from ".//Solution/index";
import Choose from "./ChooseUs/index";
import Values from "./Value/index";
import Contact from "./Contact/index";
import Blog from "./Blog/index";
import Ending from "./Ending/index";
import Footer from "./Footer/index";
import Header from "./Header/index";
import { useState } from "react";
import contactBg from "./images/contact-bg.png";

export default function Home() {
  const [showPages, setshowPages] = useState(false);
  setTimeout(() => {
    setshowPages(true);
  }, 2000);

  return (
    <>
      {showPages ? (
        <>
          <div className="font-clash-display-variable">
            <Header />
            <Slider />
            <AboutUs companyName={"Godark.ai"} />
            {/* <Overview /> */}
            <Soltuions />
            <Choose />
            <Values />
            <Contact backgroundImageSrc={contactBg.src} />
            <Blog />
            <Ending
              title={"Whitepapers and Guides"}
              content={
                "Offer in-depth guides and white papers on key topics such as inventory management, digital marketing strategies for restaurants, and optimising kitchen operations using AI."
              }
              imageSrc={""}
            />
            <Footer copyrightYear={2024} companyName={"Godark.ai"} />
          </div>
        </>
      ) : (
        <>
          <div style={{ height: "100vh" }}>
            <div id="svg-container">
              <div className="loader"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
