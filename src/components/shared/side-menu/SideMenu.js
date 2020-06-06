import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  const [sidenavClass, setSidenavClass] = useState("sidenav sidenavHide");
  const [openStyleClass, setOpenStyleClass] = useState("openStyleShow");
  function openCloseNav() {
    if (sidenavClass === "sidenav sidenavHide") {
      setSidenavClass("sidenav sidenavShow");
      setOpenStyleClass("openStyleHide");
    } else {
      setSidenavClass("sidenav sidenavHide");
      setOpenStyleClass("openStyleShow");
    }
  }
  const activeStyle = { color: "#ccefff", fontStyle: "italic" };
  return (
    <>
      <div className={sidenavClass}>
        <NavLink to="#" className="closebtn" onClick={openCloseNav}>
          &times;
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/activities">
          Activities
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/goals">
          Goals
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/reports">
          Reports
        </NavLink>
      </div>

      <span className={openStyleClass} onClick={openCloseNav}>
        &#9776;
      </span>
    </>
  );
}

export default SideMenu;
