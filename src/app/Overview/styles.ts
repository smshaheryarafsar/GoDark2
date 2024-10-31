import css from "styled-jsx/css";

export const styles = css`
  .overview-container {
    background-color: #111;
    padding: 60px 190px 90px 70px;
  }

  .content-wrapper {
    display: flex;
    gap: 20px;
  }
  .company-overview {
    display: flex;
    max-width: 849px;
    flex-direction: column;
    color: #fff;
    font-weight: 400;
    background-color: #000;
  }

  .content-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: start;
  }

  .highlight-bar {
    background-color: #ff5100;
    position: absolute;
    z-index: 0;
    min-height: 45px;
    width: 213px;
    max-width: 100%;
    right: 10px;
    top: 104px;
    height: 45px;
  }

  .title {
    width: 100%;
    letter-spacing: -1.92px;
    font: 73px/1 Clash Display Variable, -apple-system, Roboto, Helvetica,
      sans-serif;
  }

  .description {
    z-index: 0;
    margin-top: 17px;
    font: 32px/51px Sora, sans-serif !important;
  }

  .highlight {
    color: #ff5100;
  }

  @media (max-width: 991px) {
    .content-wrapper {
      max-width: 100%;
    }

    .title {
      max-width: 100%;
      font-size: 30px !important;
    }

    .description {
      max-width: 100%;
      font: 18px / 36px Sora, sans-serif !important;
    }

    .right-column {
      padding: 0px !important;
      margin-left: 0px !important;
    }
  }
`;
