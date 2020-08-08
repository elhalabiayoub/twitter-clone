import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./tweetbox.css";
import image from "./assets/ayoub.jpeg";
import db from "./firebase";

function TweetBox() {
	const [inputValue, setInputValue] = useState("");
	const addPost = (e) => {
		e.preventDefault();
		db.collection("post").add({
			displayName: "@elhalabiayoub1",
			username: "elhalabiayoub",
			avatar: "http://localhost:3000/static/media/ayoub.4706335e.jpeg",
			verified: true,
			text: inputValue,
			time: "Now",
		});
		setInputValue("");
	};
	return (
		<div className="TweetBox">
			<form>
				<div className="TweetBox__input">
					<Avatar src={image} className="TweetBox__avatar" />
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="What's happening ?"
					/>
				</div>
				<Button onClick={addPost} type="submit" className="TweetBox__button">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
