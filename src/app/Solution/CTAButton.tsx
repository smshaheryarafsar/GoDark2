import React from "react";

const CTAButton: React.FC = () => {
  return (
    <div className="cta-container">
      <button className="cta-button">
        <div className="cta-background" />
        <span className="cta-text">Learn More About ChefAdmin</span>
      </button>
    </div>
  );
};

export default CTAButton;
