import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  BsSearch,
  BsChevronLeft,
  BsChevronRight,
  BsBell,
  BsThreeDotsVertical,
  BsFillCaretRightFill,
  BsFillCaretLeftFill
} from "react-icons/bs";
import "../style/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { sidebarRef } = useContext(AppContext);

  const showSidebar = () => {
    sidebarRef.current.classList.add("showSelf");
    setShowMenu(false);
  };

  const hideSidebar = () => {
    sidebarRef.current.classList.remove("showSelf");
    setShowMenu(true);
  };

  return (
    <div className="Navbar">
      <div className="navbar_left">
        <div>
          <p>Stats, monthly updates 📈</p>
          {showMenu ? (
            <BsFillCaretRightFill
              className="navbar_icon navbar_expand"
              onClick={showSidebar}
            />
          ) : (
            <BsFillCaretLeftFill
              className="navbar_icon navbar_expand"
              onClick={hideSidebar}
            />
          )}
        </div>
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
