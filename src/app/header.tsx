import * as React from "react";

export default function Header() {
  return (
    <>
      <div className="nav">
        <div className="link">
          <div className="d-97-ea-0940-c-0302-a-26-ddd-7-c-1-b-56-cf-3346-svg">
            <div className="div" />
          </div>
        </div>
        <div className="gradient" />
        <div className="list">
          <div className="item-margin">
            <div className="text">About</div>
          </div>
          <div className="item-margin-2">
            <div className="text">Team</div>
          </div>
          <div className="item-margin-3">
            <div className="text">Solutions</div>
          </div>
          <div className="item-margin-4">
            <div>Why US</div>
          </div>
          <div className="item-margin-5">
            <div>Our Values</div>
          </div>
          <div className="item-margin-6">
            <div>Blogs And Resources</div>
          </div>
          <div className="item">
            <div className="div-2">
              <div className="background" />
              <div className="text-2">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .nav {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: rgba(0, 0, 0, 1);
          padding: 40px 95px 0;
        }
        @media (max-width: 991px) {
          .nav {
            padding: 0 20px;
          }
        }
        .link {
          align-self: stretch;
          z-index: 0;
          display: flex;
          min-height: 50px;
          flex-direction: column;
          justify-content: start;
          width: 85px;
          margin: auto 0;
        }
        .d-97-ea-0940-c-0302-a-26-ddd-7-c-1-b-56-cf-3346-svg {
          display: flex;
          width: 85px;
          flex-direction: column;
          overflow: hidden;
          align-items: start;
          justify-content: center;
          padding: 10px 7px;
        }
        .div {
          box-shadow: 2px -2px 3px 3px rgba(255, 81, 0, 1);
          border-radius: 50%;
          display: flex;
          width: 31px;
          height: 31px;
          border: 2px solid rgba(255, 81, 0, 1);
        }
        .gradient {
          align-self: start;
          position: absolute;
          z-index: 0;
          display: flex;
          min-height: 143px;
          width: 1728px;
          right: 0px;
          bottom: -52px;
          height: 143px;
        }
        @media (max-width: 991px) {
          .gradient {
            max-width: 100%;
          }
        }
        .list {
          align-self: stretch;
          z-index: 0;
          display: flex;
          min-width: 240px;
          align-items: center;
          color: rgba(255, 255, 255, 1);
          text-transform: uppercase;
          letter-spacing: 2.29px;
          justify-content: start;
          flex-wrap: wrap;
          margin: auto 0;
          font: 400 11px Sora, sans-serif;
        }
        @media (max-width: 991px) {
          .list {
            max-width: 100%;
          }
        }
        .item-margin {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: start;
          white-space: nowrap;
          justify-content: start;
          margin: auto 0;
          padding: 6px 45px 1px 0;
        }
        @media (max-width: 991px) {
          .item-margin {
            white-space: initial;
          }
        }
        .text {
        }
        @media (max-width: 991px) {
          .text {
            white-space: initial;
          }
        }
        .item-margin-2 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: start;
          white-space: nowrap;
          justify-content: start;
          margin: auto 0;
          padding: 6px 46px 1px 0;
        }
        @media (max-width: 991px) {
          .item-margin-2 {
            white-space: initial;
          }
        }
        .item-margin-3 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: start;
          white-space: nowrap;
          justify-content: start;
          margin: auto 0;
          padding: 6px 46px 1px 0;
        }
        @media (max-width: 991px) {
          .item-margin-3 {
            white-space: initial;
          }
        }
        .item-margin-4 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          margin: auto 0;
          padding: 6px 45px 1px 0;
        }
        .item-margin-5 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          margin: auto 0;
          padding: 6px 46px 1px 0;
        }
        .item-margin-6 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          margin: auto 0;
          padding: 6px 46px 1px 0;
        }
        .item {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          color: rgba(0, 0, 0, 1);
          white-space: nowrap;
          line-height: 31px;
          justify-content: start;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .item {
            white-space: initial;
          }
        }
        .div-2 {
          position: relative;
          display: flex;
          align-items: start;
          gap: 28px;
          justify-content: start;
          padding: 2px 29px 1px 28px;
        }
        @media (max-width: 991px) {
          .div-2 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .background {
          background-color: rgba(255, 255, 255, 1);
          position: absolute;
          z-index: 0;
          display: flex;
          height: 35px;
          left: 0px;
          right: 0px;
          top: 0px;
          bottom: 0px;
          width: 130px;
        }
        .text-2 {
          z-index: 0;
        }
      `}</style>
    </>
  );
}
