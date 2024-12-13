import "../home.css";
import PeopleImage from "../images/PeopleImage.svg";

export const PeoplePart = () => {
  return (
    <div className="people-part">
      <img src={PeopleImage} alt="" className="people" />
      <div className="people-tex">
        <p className="business-people">240 Business Peoples</p>
        <p className="registered">Already registered</p>
      </div>
    </div>
  );
};
