import { HomePageConstants } from "../../../constants/HomePageConstants";
import "../home.css";
import HomeImage from "../images/HomeImage.svg";

export const SectionRight = () => {
  return (
    <div className="right-section">
      <img src={HomeImage} className="home-image" alt="home" />
      <div className="subscribers">
        {HomePageConstants.subscribers.map((subscriber) => (
          <div key={subscriber.id} className="subscriber-item">
            <div className="subscriber-name">{subscriber.name}</div>
            <div className="subscriber-detail">{subscriber.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
