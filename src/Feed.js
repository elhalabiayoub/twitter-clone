import React, { useState, useEffect } from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Stars from "@material-ui/icons/Stars";
import image from "./assets/ayoub.jpeg";
import db from "./firebase.js";
import FlipMove from "react-flip-move";

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("post").onSnapshot((snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => {
					return doc.data();
				})
			);
		});
	}, []);
	return (
		<div className="feed">
			{/*header */ console.log(image)}
			<div className="feed__header">
				<h2>Feed component</h2>

				<Stars className="feed__header__icon" />
			</div>
			{/*TweetBox */}
			<TweetBox />
			{/*TweetBox */}
			<FlipMove>
				{posts.map((post) => (
					<Post
						key={post.text}
						avatar={post.avatar}
						verified={post.verified}
						imageContent={post.imageContent}
						text={post.text}
						time={post.time}
						username={post.username}
						displayname={post.displayname}
					/>
				))}
			</FlipMove>

			<Post
				avatar="data:image/jpeg;base64,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"
				imageContent="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvkiBS4p2bGWHQsONDMRV-5tprerbec4nQww&usqp=CAU"
				text={`You can spell check very long text areas without compromising any performance hits. Regardless of the size of the text, UltimateSpell only sends small portions of the text to the server as needed, while the user spell checks through the text.

				Basically the spell check dialog box makes on-demand calls to a callback page on the server without refreshing the whole page or dialog. It keeps processing small blocks of text using the AJAX (Asynchronous JavaScript and XML) techniques.
				
				Note that UltimateSpell displays the text in the dialog box sentence-by-sentence just like Microsoft Word. This helps the user understand the actual context in which the spelling error occurs. 
						`}
				time="23h"
				username="mouadel"
				displayname="@mouad110"
			/>
			<Post
				avatar="https://www.publicbooks.org/wp-content/uploads/2019/11/joel-mott-LaK153ghdig-unsplash-scaled-e1574787737429-810x625.jpg"
				imageContent="https://myoffices.com/code/images/pictures/5.jpg"
				text={`The world did not do enough to prepare for a pandemic. 
				We can avoid making the same mistake with climate change 
						`}
				time="1j"
				username="user2"
				displayname="@user1120"
			/>
		</div>
	);
}

export default Feed;
