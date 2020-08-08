import React, { forwardRef } from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIco from "@material-ui/icons/VerifiedUser";
import PublishIcon from "@material-ui/icons/Publish";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const Post = forwardRef(
	(
		{ displayname, username, verified, text, avatar, time, imageContent },
		ref
	) => {
		return (
			<div className="post" ref={ref}>
				<div className="post__body">
					<div className="post__header">
						<div className="post__avatar">
							<Avatar src={avatar} className="post__icon" />
						</div>
						<div className="post__headerText">
							<h3>
								{username}
								<span>
									{verified && <VerifiedUserIco className="post__badge" />}
									{displayname} . {time}
								</span>
							</h3>
							<div className="post__headerDescription">
								<p>{text}</p>
							</div>
						</div>
					</div>

					{imageContent && <img src={imageContent} alt="post avatar" />}

					<div className="post__footer">
						<ChatBubbleOutlineIcon className="post__footer__icons post__icon__bluecolor" />
						<RepeatIcon className="post__footer__icons post__icon__greencolor" />
						<FavoriteBorderIcon className="post__footer__icons post__icon__redcolor" />
						<PublishIcon className="post__footer__icons post__icon__bluecolor" />
					</div>
				</div>
			</div>
		);
	}
);

export default Post;
