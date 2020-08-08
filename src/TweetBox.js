import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./tweetbox.css";
function TweetBox() {
	return (
		<div className="TweetBox">
			<form>
				<div className="TweetBox__input">
					<Avatar src="" />
					<input placeholder="write a tweet ..." />
				</div>
				<Button className="TweetBox__button">Tweet</Button>
			</form>
		</div>
	);
}

export default TweetBox;
