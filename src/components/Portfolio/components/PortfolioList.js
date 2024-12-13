import "../portfolio.css";
import { PortfolioPageConstant } from "../../../constants/PortfolioPageConstant";
import ListImage from "../images/listImage.svg";

export const PortfolioList = () => {
  return (
    <div className="list-container">
      {PortfolioPageConstant.portfolioList?.map((list) => (
        <>
          <div className="list-contnet" key={list.id}>
            <div className="num-text">
              <p className="list-number">{list.number}</p>
              <p className="list-title">{list.text}</p>
            </div>
            <img src={list.icon} alt="" className="list-arrow" />
          </div>
          <hr className="list-line" />
        </>
      ))}
      <img src={ListImage} className="list-image" alt="" />
    </div>
  );
};
