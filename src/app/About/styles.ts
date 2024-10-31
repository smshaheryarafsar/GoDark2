import css from "styled-jsx/css";

export default css`
  .about-us {
    background-color: #000;
    padding: 60px 190px 90px 70px;
  }

  .content-wrapper {
    display: flex;
    gap: 20px;
  }

  .left-border {
    border-left: 2px solid #545252;
    margin-left: -15px;
    padding-left: 20px;
    margin-top: -10px;
    padding-top: 2px;
    padding-bottom: 30px;
  }

  .info-column {
    width: 62%;
    color: #fff;
  }

  .title {
    font: 73px/1 "Clash Display Variable", -apple-system, Roboto, Helvetica,
      sans-serif;
    letter-spacing: -1.92px;
  }

  .description {
    margin-top: 50px;
    font: 30px/44px Sora, sans-serif;
    padding-right: 100px;
  }

  .highlight {
    background-color: #ff5100;
    margin-left: -35px;
    display: block;
    padding: 20px 33px 9px 33px;
    width: max-content;
    margin-bottom: 10px;
  }

  .BrandName {
    background-color: #ff5100;
  }

  .mission-vision-column {
    width: 36%;
    margin-left: 20px;
    display: flex;
    flex-grow: 1;
    gap: 14px;
    margin-top: 129px;
  }

  .decorative-lines {
    align-self: flex-end;
    display: flex;
    margin-top: 52px;
    flex-direction: column;
  }

  .line {
    border: 1px solid #545252;
  }

  .line.short {
    height: 180px;
  }

  .line.long {
    height: 260px;
    margin-top: 110px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    flex-basis: 0;
  }

  .section-title {
    color: #fff;
    letter-spacing: -0.86px;
    font: 500 32px/44px "Clash Display Variable", -apple-system, Roboto,
      Helvetica, sans-serif;
  }

  .section-description {
    color: rgba(255, 255, 255, 0.65);
    letter-spacing: -0.38px;
    margin-top: 12px;
    font: 300 19px/26px Sora, sans-serif;
  }

  .vision {
    margin-top: 90px;
    padding-left: 7px;
  }

  @media (max-width: 991px) {
    .about-us {
      padding: 40px 20px;
    }

    .content-wrapper {
      flex-direction: column;
    }

    .info-column,
    .mission-vision-column {
      width: 100%;
      margin-left: 0;
      right: auto !important;
    }

    .title {
      font-size: 40px;
    }

    .mission-vision-column {
      margin-top: 40px;
      position: initial !important;
    }

    .line.long {
      margin-top: 40px;
    }

    .vision {
      margin-top: 40px;
    }
  }
`;
