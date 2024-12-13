import "../footer.css";
import PhoneIcon from '../icons/phoneIcon.svg';

export const CallButton = () => {
  return (
    <div className="call-button">
      <img src={PhoneIcon} className="phone-icon" alt="" />
      <p className="phone-number">(973) 068 2300</p>
    </div>
  );
};
