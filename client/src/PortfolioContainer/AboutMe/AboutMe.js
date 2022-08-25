import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import resume from "../../assets/Resume/ChanChunSing_CV20220824_month.pdf";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I build this porfilio website as my first react project. With a strong background in creative and experience in digital marketing and multimedia design, driving brand awareness and conversion through social media and marketing event. Boosted lead generation for current employer. A strong communicator with the ability to communicate ideas clearly to anyone. Also a Blockchain and cryptocurrency enthusiast with up-to-date knowledge of global blockchain and crypto activities.",
    highlights: {
      bullets: ["All-round Marketing", "Multimedia Creation", "Blockchain", "Software Engine"],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHightlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {" "}
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHightlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Hire me </button>
              <a href={resume} download="ChanChunSing_Nicolas_CV">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
