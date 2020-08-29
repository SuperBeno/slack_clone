import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Cleaver Programmer</h2>
          <h3>
            <FiberManualRecordIcon></FiberManualRecordIcon>
            Benjamin Malingre
          </h3>
        </div>
        <CreateIcon></CreateIcon>
      </div>
    </div>
  );
}

export default Sidebar;