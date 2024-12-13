import { PortfolioPageConstant } from "../../../constants/PortfolioPageConstant";
import React, { useState } from "react";
import BackArrow from "../icons/backArrow.svg";
import NextArrow from "../icons/nextArrow.svg";
import FbIcon from "../icons/FbIcon.svg";
import TwIcon from "../icons/TwitterIcon.svg";
import InstaIcon from "../icons/InstaIcon.svg";
import InIcon from "../icons/InIcon.svg";
import "../portfolio.css";



const TeamSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredSlideIndex, setHoveredSlideIndex] = useState(null); 
  

  const slidesPerView = 3;
  const dotsCount = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesPerView < slides?.length ? prevIndex + slidesPerView : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? slides?.length - slidesPerView
        : prevIndex - slidesPerView
    );
  };

  const handleMouseOver = (index) => {
    setHoveredSlideIndex(index); 
  };

  const handleMouseLeave = () => {
    setHoveredSlideIndex(null);
  };

  const activeDot = Math.floor(currentIndex / slidesPerView) % dotsCount;

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slides">
          {PortfolioPageConstant.teamList
            ?.map((slide, index) => {
              const actualIndex = currentIndex + index; 
              return (
                <div
                  className="slide"
                  key={slide.id}
                  onMouseOver={() => handleMouseOver(actualIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                  <p className="slide-name">{slide.name}</p>
                  <p className="slide-role">{slide.role}</p>
                  {hoveredSlideIndex === actualIndex && (
                    <div className="social-links">
                      <a href='#'> <img src={FbIcon} alt="fb" className="fb-icon"/></a>
                     
                      <img src={TwIcon} alt="twitter"  className="tw-icon"/>
                      <img src={InstaIcon} alt="insta" className="insta-icon"/>
                      <img src={InIcon} alt="linkedin" className="in-icon"/>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <div className="slider-arrows">
          <img src={BackArrow} onClick={prevSlide} className="arrow-button" />
          <img src={NextArrow} onClick={nextSlide} className="arrow-button" />
        </div>
      </div>
      <div className="slider-dots">
        {Array?.from({ length: dotsCount })?.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeDot ? "active" : ""}`}
            onClick={() => setCurrentIndex(index * slidesPerView)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TeamSlider;
