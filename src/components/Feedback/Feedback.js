import { PortfolioPageConstant } from "../../constants/PortfolioPageConstant";
import { useState } from "react";
import Shape from "../Portfolio/icons/shape-portfolio.svg";
import { Feedbacks } from "./components/Feedbacks";
import "./feedback.css";
import BackArrow from "./icons/backArrow.svg";
import NextArrow from "./icons/nextArrow.svg";

export const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesPerView = 2;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesPerView < PortfolioPageConstant.feedBacks.length
        ? prevIndex + slidesPerView
        : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(PortfolioPageConstant.feedBacks.length - slidesPerView, 0)
        : prevIndex - slidesPerView
    );
  };

  return (
    <div className="feedback-container">
      <img src={Shape} className="shape" />
      <div className="feedBack-header">
        <div>
          <p className="feed-text">TESTIMONIALS</p>
          <p className="feed-title">Feedback From Our Clients</p>
        </div>

        <div className="feed-slider-arrows">
          <img
            src={BackArrow}
            onClick={prevSlide}
            className="feed-arrow-prev"
          />
          <img
            src={NextArrow}
            onClick={nextSlide}
            className="feed-arrow-next"
          />
        </div>
      </div>

      <Feedbacks slidesPerView={slidesPerView} currentIndex={currentIndex} />
    </div>
  );
};
