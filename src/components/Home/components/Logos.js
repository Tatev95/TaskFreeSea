import { HomePageConstants } from "../../../constants/HomePageConstants";
import '../home.css'

export const Logos = () => {
  return (
    <div className="logos">
      {HomePageConstants.logos?.map((logo) => (
        <img alt={logo.text}
        key={logo.id}
         className={`logo-img ${logo?.text}`}
          src={logo.src} />

      ))}
    </div>
  );
};
