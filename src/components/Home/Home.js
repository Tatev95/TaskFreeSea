import { LeftSection } from "./components/LeftSection";
import { Logos } from "./components/Logos";
import { RightSection } from "./components/RightSection";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-page">
        <LeftSection />
        <RightSection />
      </div>
      <Logos />
    </div>
  );
};
