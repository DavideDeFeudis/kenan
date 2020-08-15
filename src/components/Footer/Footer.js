import React from "react";
import classes from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <SocialIcon
        target="_blank"
        rel="noopener noreferrer"
        className={classes.socialIcon}
        url="https://www.instagram.com/kenandinkelmann/"
        bgColor="#919191"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        target="_blank"
        rel="noopener noreferrer"
        className={classes.socialIcon}
        url="https://web.facebook.com/kenanchoreography"
        bgColor="#919191"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        target="_blank"
        rel="noopener noreferrer"
        className={classes.socialIcon}
        url="https://www.youtube.com/channel/UCHUoc2LX0yZAGkzrfoGoCMA"
        bgColor="#919191"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        target="_blank"
        rel="noopener noreferrer"
        className={classes.socialIcon}
        url="https://vimeo.com/user10326182"
        bgColor="#919191"
        style={{ height: 35, width: 35 }}
      />
    </footer>
  );
}
