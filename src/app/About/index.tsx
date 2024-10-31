import React, { useEffect, useRef, useState } from "react";
import MissionVision from "./MissionVision";
import { AboutUsProps } from "./types";
import styles from "./styles";
import Overview from "../Overview/index";

const AboutUs: React.FC<AboutUsProps> = ({ companyName }) => {
  const [topPosition, setTopPosition] = useState<number>(0);
  const [currentPosition, setcurrentPosition] = useState<number>(0);
  const [endPosition, setendPosition] = useState<number>(0);
  const divRef = useRef<HTMLDivElement | null>(null);
  const stopTracking = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      // console.log("Start===tracking");
      // console.log(rect.top + window.scrollY);
      // console.log("CurrentTracking ===");
      // console.log(window.scrollY);
      setcurrentPosition(window.scrollY);
      setTopPosition(rect.top + window.scrollY); // Get the absolute top position
    }
    if (stopTracking.current) {
      const rect = stopTracking.current.getBoundingClientRect();
      // console.log("stopTracking===");
      // console.log(rect.top + window.scrollY - 300);
      setendPosition(rect.top + window.scrollY + 200); // Get the absolute top position
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-us" id="about" ref={divRef}>
      <div className="content-wrapper">
        <div className="info-column">
          <h1 className="title">About Us</h1>
          <p className="description">
            At <span className="BrandName">{companyName}</span>, we are
            pioneering food security through digital transformation in the F&B
            industry. ChefAdmin, our first product on this mission, leverages
            advanced neural technology, data analytics, and seamless integration
            to ensure resilient food supply chains, optimise kitchen operations,
            streamline inventory management, and enhance guest experiences
            across the GCC region. Our focus on efficiency, traceability, and
            resource optimisation supports the long-term sustainability and
            security of food systems.
          </p>
          <div ref={stopTracking} id="AboutusEnd" />
          <Overview />
        </div>
        {/* <div
          style={{
            position: "sticky",
            top: "0",
            zIndex: "1000",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        > */}
        {/* <div
          style={{
            background: "orange",
            color: "#fff",
            height: "200px",
            position:
              currentPosition > topPosition && currentPosition < endPosition
                ? "fixed"
                : "inherit",
            top:
              currentPosition > topPosition && currentPosition < endPosition
                ? "0px"
                : "auto",
            zIndex:
              currentPosition > topPosition && currentPosition < endPosition
                ? 999
                : 1,
          }}
        >
          This is sticky div
        </div> */}
        <MissionVision
          topPosition={topPosition}
          currentPosition={currentPosition}
          endPosition={endPosition}
        />
        {/* </div> */}
      </div>

      <style jsx>{styles}</style>
    </section>
  );
};

export default AboutUs;
