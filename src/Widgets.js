import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
	TwitterTweetEmbed,
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterMentionButton,
	TwitterHashtagButton,
	TwitterFollowButton,
	TwitterMomentShare,
	TwitterDMButton,
	TwitterVideoEmbed,
	TwitterOnAirButton,
} from "react-twitter-embed";
import "./widgets.css";
function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__searchInput">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="Search twitter" className="widgets__input" />
			</div>
			<div className="widgets__container">
				<h2>What's happening ?</h2>
				<TwitterTweetEmbed tweetId={"933354946111705097"} />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="saurabhnemade"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url={"https://facebook.com/saurabhnemade"}
					options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
