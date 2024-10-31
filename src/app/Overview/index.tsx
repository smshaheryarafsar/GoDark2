const CompanyOverview: React.FC = () => {
  return (
    <>
      <div className="overview-contaimer">
        <section className="company-overview">
          <div className="content-wrapper">
            <h1 className="title">Company Overview</h1>
            <p className="description">
              Founded with a vision to transform the{" "}
              <span className="highlight2">F&B industry,</span>{" "}
              <span className="highlight">Godark.ai</span> is a leader in
              delivering digital solutions that empower businesses to thrive in
              a competitive landscape. Our flagship product, ChefAdmin,
              symbolises our commitment to innovation, operational excellence,
              and sustainability.
            </p>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .overview-contaimer {
            background-color: #000;
            padding: 60px 100px 60px 0px;
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
            right: 90px;
            top: 113px;
            height: 45px;
            display: none;
          }

          .title {
            width: 100%;
            letter-spacing: -1.92px;
            font: 73px/1 Clash Display Variable, -apple-system, Roboto,
              Helvetica, sans-serif;
          }

          .description {
            z-index: 0;
            margin-top: 17px;
            font: 32px/51px Sora, sans-serif !important;
          }

          .highlight {
            color: #ff5100;
          }

          .highlight2 {
            background: #ff5100;
            color: #fff;
          }

          @media (max-width: 991px) {
            .content-wrapper {
              max-width: 100%;
            }

            .title {
              max-width: 100%;
              font-size: 30px;
            }

            .description {
              max-width: 100%;
              font: 16px / 30px Sora, sans-serif !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default CompanyOverview;
