import { AboutPricing } from "./components/AboutPricing";
import { CallButton } from "./components/CallButton";
import { Copyright } from "./components/Copyright";
import { FooterLogo } from "./components/FooterLogo";
import { FooterNumber } from "./components/FooterNumber";
import { SocialLinks } from "./components/SocialLinks";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <FooterLogo />
      <div className="footer-content">
        <div>
          <FooterNumber />
          <CallButton />
        </div>
        <AboutPricing />
        <SocialLinks />
      </div>

      <div>
        <Copyright />
      </div>
    </div>
  );
};
