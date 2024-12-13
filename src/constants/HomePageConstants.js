import MailIcon from "../components/Home/icons/mail-icon.svg";
import CallIcon from "../components/Home/icons/call-icon.svg";
import FirstLogo from "../components/Home/icons/1.svg";
import SecondLogo from "../components/Home/icons/2.svg";
import ThirdLogo from "../components/Home/icons/3.svg";
import ForthLogo from "../components/Home/icons/4.svg";
import FifthLogo from "../components/Home/icons/5.svg";
import SixthLogo from "../components/Home/icons/6.svg";

export class HomePageConstants {
  static contactInfo = [
    {
      icon: MailIcon,
      text: "MAIL US",
      address: "info@bisnext.com",
    },
    {
      icon: CallIcon,
      text: "CALL US",
      address: "+1500 233 466 24",
    },
  ];

  static subscribers = [
    { id: 1, name: "12K+", detail: "Project Complete" },
    { id: 2, name: "7K+", detail: "Happy Client" },
    { id: 3, name: "10+", detail: "Years Experience" },
    { id: 4, name: "270+", detail: "Win Awards" },
  ];

  static aboutContentText = [
    { id: 1, count: "300+", text: "Working Peoples" },
    { id: 2, count: "20+", text: "World Office" },
  ];

  static logos = [
    {
      id: 1,
      src: FirstLogo,
      text: "FirstLogo",
    },
    {
      id: 2,
      src: SecondLogo,
      text: "SecondLogo",
    },
    {
      id: 3,
      src: ThirdLogo,
      text: "ThirdLogo",
    },
    {
      id: 4,
      src: ForthLogo,
      text: "ForthLogo",
    },
    {
      id: 5,
      src: FifthLogo,
      text: "FifthLogo",
    },
    {
      id: 6,
      src: SixthLogo,
      text: "SixthLogo",
    },
  ];
}
