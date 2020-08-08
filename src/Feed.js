import React from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
	return (
		<div className="feed">
			{/*header */}
			<div className="feed__header">
				<h2>feed component</h2>
			</div>
			{/*TweetBox */}
			<TweetBox />
			{/*TweetBox */}
			<Post />
		</div>
	);
}

export default Feed;
