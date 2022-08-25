import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span> {props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Qualification", logoSrc: "education.svg" },
    { label: "Experience", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "Adobe Creative Suite", ratingPercentage: 90 },
    { skill: "MSOffice", ratingPercentage: 85 },
    { skill: "SEO", ratingPercentage: 75 },
    { skill: "SEM", ratingPercentage: 75 },
    { skill: "Photo & Video Skill", ratingPercentage: 80 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"The Hong Kong Polytechnic University"}
        subHeading={"Bachelor of Arts (Honors) in Digital Media"}
        fromDate={"2011"}
        toDate={"2013"}
      />
      <br />
      <br />
      <ResumeHeading
        heading={"The Hong Kong Polytechnic University"}
        subHeading={"Higher Diploma in Multimedia Design and Technology"}
        fromDate={"2009"}
        toDate={"2011"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Hutchison Telecom"}
          subHeading={"Assistant Manager"}
          fromDate={"04/22"}
          toDate={"07/22"}
        />
        <div className="experience-description">
          <span className="resume-heading-text">Online Media Management</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">🔹 IG management </span>
          <br />
          <span className="resume-description-text">
            🔹 Inhouse video promotion channel{" "}
          </span>
          <br />
          <span className="resume-description-text">🔹 Content writing </span>
          <br />
          <br />
        </div>

        <ResumeHeading
          heading={"World Wide Stationery"}
          subHeading={"Senior Marketing and Strategy Officer"}
          fromDate={"09/19"}
          toDate={"04/22"}
        />
        <div className="experience-description">
          <span className="resume-heading-text">Online Media Management</span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">🔹 SEO, SEM </span>
          <br />
          <span className="resume-description-text">
            🔹 Facebook, IG management{" "}
          </span>
          <br />
          <span className="resume-description-text">
            🔹 E-commerce management- Wechat store, Taobao, Alibaba, PDD,
            HKTVMALL{" "}
          </span>
          <br />
          <span className="resume-description-text">🔹 Content Creation </span>
          <br />
          <br />
        </div>

        <ResumeHeading
          heading={"Fighting Arts Center Ltd"}
          subHeading={"Marketing & Design Manager"}
          fromDate={"07/17"}
          toDate={"09/19"}
        />
        <div className="experience-description">
          <span className="resume-heading-text">Online Media Management</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">🔹 SEO, SEM </span>
          <br />
          <span className="resume-description-text">
            🔹 Facebook, IG management{" "}
          </span>
          <br />
          <span className="resume-description-text">🔹 Content Creation </span>
          <br />
        </div>

        {/* Design Management */}
        <div className="experience-description">
          <span className="resume-heading-text">Design Management</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            🔹Poster/Flyer Design{" "}
          </span>
          <br />
          <span className="resume-description-text">
            🔹 Online graphic design{" "}
          </span>
          <br />
          <span className="resume-description-text">
            🔹 Short Video of the promotion{" "}
          </span>
          <br />
        </div>

        {/* Event Management */}

        <div className="experience-description">
          <span className="resume-heading-text">Event Management</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            🔹Innovative ideas for events {" "}
          </span>
          <br />
          <span className="resume-description-text">
            🔹 Increase brand awareness & potential business{" "}
          </span>
          <br />

        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    ,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Blockchain💲" description="Investor" />
      <ResumeHeading heading="Pet Lover🐶" description="A Dog owner" />
      <ResumeHeading
        heading="Smart Home Lover💡"
        description="Lifestyle pursuits"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
