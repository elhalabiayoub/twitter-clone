import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import searchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Button } from "@material-ui/core";
import "./sidebar.css";

function Sidebar() {
	return (
		<div className="sideBar">
			<TwitterIcon className="sideBar__twitterIcon" />
			<SidebarOption active text="Home" Icon={HomeIcon} />
			<SidebarOption text="Search" Icon={searchIcon} />
			<SidebarOption text="Notification" Icon={NotificationsIcon} />
			<SidebarOption text="Home" Icon={HomeIcon} />
			<SidebarOption text="Messages" Icon={searchIcon} />
			<SidebarOption text="Bookmarks" Icon={NotificationsIcon} />
			<SidebarOption text="Lists" Icon={HomeIcon} />
			<SidebarOption text="Profile" Icon={searchIcon} />
			<SidebarOption text="More" Icon={NotificationsIcon} />
			<Button variant="outlined" className="sidebar__tweet" fullWidth>
				Tweet
			</Button>
		</div>
	);
}

export default Sidebar;
