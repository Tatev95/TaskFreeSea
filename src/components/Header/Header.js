import React, { useState, useEffect, useMemo } from "react";
import "./header.css";
import logo from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/menu.svg";

import { Navbar } from "./components/Navbar";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("HOME");

  const menuItems = useMemo(
    () => ["HOME", "PAGES", "BLOG", "PORTFOLIO", "SHOP", "CONTACT"],
    []
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );
      let currentActive = "HOME";

      sections.forEach((section, index) => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentActive = menuItems[index];
        }
      });

      setActiveMenu(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  const handleMenuClick = (item) => {
    setTimeout(() => {
      const section = document.getElementById(item.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn(`Section ${item.toLowerCase()} not found`);
      }
      setMenuOpen(false);
    }, 100);
  };

  return (
    <header className="header">
      <div className="logo-img">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <Navbar
        menuOpen={menuOpen}
        activeMenu={activeMenu}
        menuItems={menuItems}
        handleMenuClick={handleMenuClick}
      />

      <div className="responsive-menu">
        <img
          src={menuIcon}
          className="icon menu-toggle"
          onClick={toggleMenu}
          alt=""
        />
      </div>
    </header>
  );
};
