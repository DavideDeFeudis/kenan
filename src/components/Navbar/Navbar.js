import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { StateContext } from "../../context";
import app from "../../base";

export default function Navbar({ admin }) {
  const { videos } = useContext(StateContext);

  return (
    <nav className={classes.menu}>
      <ol>
        <li className={classes.menuItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/choreography">Choreography</Link>

          <ol className={classes.subMenu}>
            {videos.map((video) => (
              <li className={classes.menuItem}>
                <Link
                  key={video.id}
                  url={video.url}
                  info={video.info}
                  className="dropdown-item"
                  to={"/" + video.title.toLowerCase()}
                >
                  {video.title}
                </Link>
              </li>
            ))}
          </ol>
        </li>
        <li className={classes.menuItem}>
          <Link to="/online-coaching">Online Coaching</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/workshops">Workshops</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/contact">Contact</Link>
        </li>
        {admin && (
          <li className={classes.menuItem}>
            <Link
              to="/login"
              data-test="admin-nav-link"
              onClick={() => app.auth().signOut()}
            >
              Sign Out
            </Link>
          </li>
        )}
      </ol>
    </nav>
  );
}
