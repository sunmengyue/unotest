import React from "react";
import {
  BsSearch,
  BsChevronLeft,
  BsChevronRight,
  BsBell,
  BsThreeDotsVertical
} from "react-icons/bs";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar_left">
        <p>Stats, monthly updates 📈</p>
        <BsSearch className="navbar_icon" />
      </div>
      <div className="navbar_right">
        <div className="navbar_right_adjust">
          <BsChevronLeft className="navbar_icon" />
          <BsChevronRight className="navbar_icon" />
        </div>
        <p className="navbar_right_date">Today, 05 Aug</p>
        <div className="navbar_right_notice">
          <BsBell className="navbar_icon" />
          <BsThreeDotsVertical className="navbar_icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
