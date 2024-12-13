import "../home.css";
import AboutUsImg from "../images/aboutusimg.svg";
import bgTop from "../icons/aboutus1.svg";
import bgBottom from "../icons/aboutus2.svg";
import { HomePageConstants } from "../../../constants/HomePageConstants";
import { Circle } from "../../Circle";

export const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-images">
        <img src={bgTop} alt="shape" className="shape-about-top" />
        <img src={AboutUsImg} alt="" className="about-image" />
        <img src={bgBottom} alt="shape" className="shape-about-bottom" />
        <div className="about-bg">
          {HomePageConstants.aboutContentText?.map((text) => (
            <div key={text.id}>
              <h2 className="working-count">{text.count}</h2>
              <p className="working-people">{text.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <p className="sed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <Circle text="LEARN MORE" />
      </div>
    </div>
  );
};
