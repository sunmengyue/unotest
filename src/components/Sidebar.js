import React from "react";
import "./Sidebar.css";
import SidebarProfile from "../assets/mark_havelar.jpg";
import {
  BsHouseDoor,
  BsPieChart,
  BsListTask,
  BsGear,
  BsPerson,
  BsBoxArrowRight
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <p className="appTitle">SemangQa</p>
      <div className="sidebar_profile">
        <img
          src={SidebarProfile}
          alt="sidebar_profile"
          className="sidebar_img"
        />
        <p className="sidebar_name">Mark Havelar</p>
        <p className="sidebar_title">Graphic Designer</p>
      </div>
      <div className="links">
        <a className="link" href="#">
          <BsHouseDoor className="link_icon" />
          <p>Home</p>
        </a>
        <a className="link" href="#">
          <BsPieChart className="link_icon" />
          <p>Dashboard</p>
        </a>
        <a className="link" href="#">
          <BsListTask className="link_icon" />
          <p>Task</p>
        </a>
        <a className="link" href="#">
          <BsGear className="link_icon" />
          <p>Settings</p>
        </a>
        <a className="link" href="#">
          <BsPerson className="link_icon" />
          <p>Profile</p>
        </a>
      </div>
      <div className="logout">
        <BsBoxArrowRight className="link_icon" />
        <p>Log out</p>
      </div>
    </div>
  );
};

export default Sidebar;
