import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Cleaver Programmer</h2>
          <h3>
            <FiberManualRecordIcon></FiberManualRecordIcon>
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon></CreateIcon>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"></SidebarOption>
      <SidebarOption Icon={InboxIcon} title="Mentions"></SidebarOption>
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel"></SidebarOption>
      <SidebarOption Icon={AppsIcon} title="Apps"></SidebarOption>
      <SidebarOption Icon={ExpandLessIcon} title="Show Less"></SidebarOption>
      <hr></hr>
      <SidebarOption Icon={ExpandMoreIcon} title="Channel"></SidebarOption>
      <hr></hr>
      <SidebarOption
        Icon={AddIcon}
        addChannelOption
        title="Add Channel"
      ></SidebarOption>

      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id}></SidebarOption>
      ))}
    </div>
  );
}

export default Sidebar;
