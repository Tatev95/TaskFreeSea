import "../home.css";
import { SectionRight } from "./SectionRight";
import { PeoplePart } from "./PeoplePart";

export const RightSection = () => {
  return (
    <div className="right-part">
      <SectionRight />
      <PeoplePart />
    </div>
  );
};
