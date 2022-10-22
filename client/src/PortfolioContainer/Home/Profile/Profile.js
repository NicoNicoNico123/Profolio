import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import resume from "../../../assets/Resume/ChanChunSing_CV202210.pdf"
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/Nicholas.Chan852">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/nick-chan-b317aa182/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=85261264356">
                <i className="fa fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primart-text">
              Hello, I'm <span className="highlighted-text">Nicolas Chan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Idea💡",
                    2000,
                    "Design🖼️",
                    2000,
                    "Marketing📣",
                    2000,
                    "Crypto💲",
                    2000,

                  ]}
                />
              </h1>
              <span className="profile-role-tagline">Portfolio</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire me </button>
            <a href={resume} download="ChanChunSing_Nicolas_CV">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
