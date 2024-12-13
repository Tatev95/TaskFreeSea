import "../footer.css";
import { Mail } from "./Mail";

export const SocialLinks = () => {
  return (
    <div className="social">
      <div className="social-link">
        <p className="fb">Facebook &nbsp;| </p>
        <p className="tw">Twitter &nbsp; | </p>
        <p className="dr">Dribbble &nbsp; | </p>
        <p className="insta">Instagram</p>
      </div>
      <Mail />
    </div>
  );
};
