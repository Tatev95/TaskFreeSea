import { PortfolioPageConstant } from "../../../constants/PortfolioPageConstant";
import Line from "../images/feed-line.svg";
import Icon from "../icons/quote.svg";
import "../feedback.css";

export const Feedbacks = ({slidesPerView, currentIndex}) => {
 
  return (
    <div className="feed-slider-container">
      <div className="feed-slider">
        {PortfolioPageConstant.feedBacks
          ?.slice(currentIndex, currentIndex + slidesPerView)
          .map((slide) => (
            <>
              <div className="feed-slide" key={slide.id}>
                <div className="feed-slide-content">
                  <p className="slide-desc">"{slide.text}"</p>
                </div>

                <div>
                  <img src={Line} alt="line" className="feed-line" />

                  <div className="personal-info">
                    <div className="name-role">
                      <img src={slide.image} alt="person" />
                      <div className="person-name">
                        <p className="slide-name">{slide.name}</p>
                        <p className="slide-role">{slide.role}</p>
                      </div>
                    </div>
                    <img src={Icon} alt="" className="icon" />
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
   
    </div>
  );
};
