import "../home.css";
import Scroll from "../icons/scroll.svg";
import Shape from "../icons/shape.svg";
import ShapeBG from "../icons/shapebg.svg";
import { HomePageConstants } from "../../../constants/HomePageConstants";

export const LeftSection = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="left-section">
      <img src={ShapeBG} alt="" className="shape"/>
      <div className="digital-agency">
        <p className="digital-solutions">Digital Agency Solution</p>
      </div>

      <div>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mail-call">
        {HomePageConstants.contactInfo.map((item, index) => (
          <div className="mail-to" key={index}>
            <img src={item.icon} alt={item.text} className="mail-icon" />
            <div className="mail-add">
              <p className="mail-text">{item.text}</p>
              <p className="mail-address">{item.address}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-section">
        <img
          src={Scroll}
          alt="scroll"
          className="scroll-shape"
          onClick={handleScrollToBottom}
        />
        <img
          src={Shape}
          alt="shape"
          className="scroll-shape"
          onClick={handleScrollToBottom}
        />
      </div>
    </div>
  );
};
