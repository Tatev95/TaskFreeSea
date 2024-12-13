import "../home.css";
import AboutUsImg from "../images/aboutusimg.svg";
import bgTop from "../icons/aboutus1.svg";
import bgBottom from "../icons/aboutus2.svg";
import Shape from "../icons/shape(4).svg";
import { AboutContent } from "./AboutContent";

export const AboutUs = () => {
  return (
      <div className="about-us">
        <div className="about-container">
          <p className="about-us-text">ABOUT US </p>
          <img src={Shape} alt="" className="shape-right" />
          <div>
            <div className="about-content-text">
              <h2 className="digital-world">
                We Create Digital World Class Business Agency Marketplace
              </h2>
            </div>
            <AboutContent />
          </div>
        </div>
      </div>
  );
};
