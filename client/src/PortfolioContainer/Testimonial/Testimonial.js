import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import "./Testimonial.css";
import "./carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Event1 from "../../assets/Testimonial/event3.jpg";
import Event2 from "../../assets/Testimonial/event1.jpg";
import Graphic1 from "../../assets/Testimonial/GraphicWedding.jpg";
import Graphic_herbalgy from "../../assets/Testimonial/herbalgy.jpg";
import IGfilter from "../../assets/Testimonial/IGfilter.jpg";
import FAC_video from "../../assets/Testimonial/snap4.jpg";
import wayway from "../../assets/Testimonial/snap2.jpg";
import kef from "../../assets/Testimonial/snap3.jpg";
import iscov from "../../assets/Testimonial/ISCOV.jpg";
import luckybag from "../../assets/Testimonial/luckybag.jpg";



export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading
        title={"Portfolio Reference"}
        subHeading={"What I have done before"}
      />
        <div className="container fade-in" id={props.id || ""}>
        
      <Carousel autoPlay={true} >

        <div>
          <img src={kef} />
        <a href = "https://youtu.be/WtYs-6Fa8bg">
          <p className="legend">3D production</p>
          </a>
        </div>

        <div>        
          <img src={Event1} />
          <p className="legend">Sport Expo</p>
        </div>

        <div>        
          <img src={Event2} />
          <p className="legend">D2place Yoga classes</p>
        </div>

        <div>
          <img src={FAC_video} />
        <a href = "https://youtu.be/MlBA4z8a7p0">
          <p className="legend">Promotion Video</p>
          </a>
        </div>

        <div>
          <img src={IGfilter} />
          <p className="legend">IG filter</p>
        </div>

        <div>
          <img src={wayway} />
        <a href = "https://youtu.be/MlBA4z8a7p0">
          <p className="legend">TVC production</p>
          </a>
        </div>

        <div>
          <img src={Graphic_herbalgy} />
          <p className="legend">Backdrop Design</p>
        </div>

        <div>
          <img src={iscov} />
          <p className="legend">Graphic Design</p>
        </div>

        <div>
          <img src={luckybag} />
          <p className="legend">Luckbag Promotion</p>
        </div>

        <div>
          <img src={Graphic1} />
          <p className="legend">Poster Design</p>
        </div>


      </Carousel>
        </div>
    </div>
  );
}
