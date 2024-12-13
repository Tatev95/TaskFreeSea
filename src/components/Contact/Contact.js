import "./contact.css";
import contactImage from "./images/contactImage.svg";
import Arrowicon from './icons/arrow.svg'

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <img src={contactImage} alt="" className="contact-image" />
        <div className="contact-withUs">
          <div className="contact-text">
            <p className="make-smt">
              Let’s Make Something  <br/> Great{" "}
              <span className="together">Together!</span>
            </p>
          </div>
          <div className="round-contact">
            <p className="round-text">CONTACT WITH US</p>
            <img src={Arrowicon} alt="" className="round-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
