import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIco from "@material-ui/icons/VerifiedUser";
import PublishIcon from "@material-ui/icons/Publish";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import image from "./assets/ayoub.jpeg";

function Post({ displayname, username, verified, text, avatar }) {
	return (
		<div className="post">
			<div className="post__header">
				<div className="post__avatar">
					<Avatar src={image} />
				</div>
				<div className="post__headerText">
					<h3>
						ElhalabiAyoub
						<span>
							<VerifiedUserIco className="post__badge" /> @elhalabiayoub1
						</span>
					</h3>
				</div>
				<div className="post__headerDescription">
					<p>there is some text</p>
				</div>
			</div>
			<div className="post__body">
				<img src="" alt="image for post" />

				<div className="post__footer">
					<ChatBubbleOutlineIcon fontsize="small" />
					<RepeatIcon fontsize="small" />
					<FavoriteBorderIcon fontsize="small" />
					<PublishIcon fontsize="small" />
				</div>
			</div>
		</div>
	);
}

export default Post;
