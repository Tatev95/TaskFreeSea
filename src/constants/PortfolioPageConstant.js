import RightIcon from "../components/Portfolio/icons/arrowRight.svg";
import TopRightArrow from "../components/Portfolio/icons/arrowTopRight.svg";
import FirstPerson from "../components/Portfolio/images/image1.svg";
import SecondPerson from "../components/Portfolio/images/image2.svg";
import ThirdPerson from "../components/Portfolio/images/image3.svg";
import Chester from '../components/Feedback/images/Chester.svg'
import Malina from '../components/Feedback/images/Malina.svg'

export class PortfolioPageConstant {
  static portfolioList = [
    {
      id: 1,
      number: "01.",
      text: "Web & Mobile Development",
      icon: RightIcon,
    },
    {
      id: 2,
      number: "02.",
      text: "Interaction Design",
      icon: TopRightArrow,
    },
    {
      id: 3,
      number: "03.",
      text: "Digital Marketing",
      icon: RightIcon,
    },
    {
      id: 4,
      number: "04.",
      text: "Branding & Strategy",
      icon: RightIcon,
    },
  ];

  static teamList = [
    {
      id: 1,
      name: "Aimee Calderon",
      role: "Web Developer",
      image: FirstPerson,
    },
    {
      id: 2,
      name: "Raymond Horn",
      role: "Digital Marketer",
      image: SecondPerson,
    },
    {
      id: 3,
      name: "Linda Towner",
      role: "App",
      image: ThirdPerson,
    },
  ];

  static feedBacks = [
    {
      id: 1,
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      name: "Chester Feil",
      role: "customer",
      image: Chester,
    },
    {
      id: 2,
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      name: "Malina Willans",
      role: "customer",
      image: Malina,
    },
    {
      id: 3,
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      name: "Chester Feil",
      role: "customer",
      image: Chester,
    },
  ];
}
