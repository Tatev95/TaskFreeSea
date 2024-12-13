import "../header.css";
import cartIcon from "../../../assets/icons/cart.svg";
import searchIcon from "../../../assets/icons/search.svg";
import menuIcon from "../../../assets/icons/menu.svg";
import activearrowIcon from "../icons/ActiveArrowIcon.svg";
import arrowIcon from "../icons/ArrowIcon.svg";

export const Navbar = ({ menuOpen, menuItems, activeMenu, handleMenuClick }) => {
  return (
    <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
      <div className="navbar">
        {menuItems.map((item) => (
          <div key={item} className="navigation-menu">
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => handleMenuClick(item)}
              className={`menu ${activeMenu === item ? "active" : ""}`}
            >
              {item}
            </a>
            <img
              src={activeMenu === item ? activearrowIcon : arrowIcon}
              alt=""
              className="menu-arrow"
            />
          </div>
        ))}
        <div>
          <img src={cartIcon} alt="Cart" />
        </div>
        <div>
          <img src={searchIcon} alt="Search" />
        </div>
        <div>
          <img src={menuIcon} className="icon menu-toggle" alt="Menu" />
        </div>
      </div>
    </nav>
  );
};
