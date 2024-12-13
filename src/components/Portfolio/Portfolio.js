import { Circle } from "../Circle";
import { PortfolioList } from "./components/PortfolioList";
import "./portfolio.css";
import shape from './icons/shape-portfolio.svg'
import { Team } from "./components/Team";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-title">
            <p className="title">PORTFOLIO</p>
            <p className="places">We create places that connect, sustain & inspire</p>
          </div>
          <div className="portfolio-lorem"> 
             <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Circle text='VIEW ALL PORTFOLIO'/>
          </div>
          <img src={shape} alt="shape" className="portfolio-shape" />
         
        </div>
       
      </div>
       <div className="portfolio-content">
            <PortfolioList/>
        </div>
        <div className="portfolio-team">
          <Team />
        </div>
    </div>
  );
};
