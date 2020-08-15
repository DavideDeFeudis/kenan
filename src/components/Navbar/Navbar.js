import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { StateContext } from "../../context";
import app from "../../base";

export default function Navbar({ admin }) {
  const { videos } = useContext(StateContext);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-light">
      <Link to="/" className="navbar-brand">
        Kenan Dinkelmann
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Choreography
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {videos.map((video) => (
                <Link
                  key={video.id}
                  url={video.url}
                  info={video.info}
                  className="dropdown-item"
                  to={"/" + video.title.toLowerCase()}
                >
                  {video.title}
                </Link>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <Link to="/online-coaching" className="nav-link">
              Online Coaching
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/workshops" className="nav-link">
              Workshops
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          {admin && (
            <li className="nav-item">
              <Link
                to="/login"
                data-test="admin-nav-link"
                className="nav-link"
                onClick={() => app.auth().signOut()}
              >
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
