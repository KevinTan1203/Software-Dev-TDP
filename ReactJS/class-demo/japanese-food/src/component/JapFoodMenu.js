import React from "react";
import "./JapFoodMenu.css";

function JapFoodMenu(props) {
  return (
    <nav>
      <ul id="menu">
        <li>
          <a href="/">{props.home}</a>
        </li>
        <li>
          <a href="/about-us">{props.aboutUs}</a>
        </li>
        <li>
          <a href="/our-menu">{props.menu}</a>
        </li>
        <li>
          <a href="/contact-us">{props.contactUs}</a>
        </li>
      </ul>
    </nav>
  );
}

export default JapFoodMenu;
