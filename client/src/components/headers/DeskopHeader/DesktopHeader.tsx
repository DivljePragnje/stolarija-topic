import React from "react";
import "../DeskopHeader/DesktopHeader.styles.scss";

const DesktopHeader: React.FC = () => {
  return (
    <div>
      <nav className="page-custom-settings menu">
        <ul className="menu-list r-list">
          <li className="menu-group">
            <a href="#0" className="menu-link r-link text-underlined">
              HOME
            </a>
          </li>
          <li className="menu-group">
            <a href="#0" className="menu-link r-link text-underlined">
              PRODUCTS
            </a>
          </li>
          <li className="menu-group">
            <a href="#0" className="menu-link r-link text-underlined">
              GALLERY
            </a>
          </li>
          <li className="menu-group">
            <a href="#0" className="menu-link r-link text-underlined">
              ABOUT US
            </a>
          </li>
          <li className="menu-group">
            <a href="#0" className="menu-link r-link text-underlined">
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopHeader;
