import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

/**
 * A top navigation bar with appearance modes for mobile and desktop.
 */
export default function Navbar() {
    return (
        <nav className={classes.menu}>
            <ol>
                <li className={classes.menuItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={classes.menuItem}>
                    <Link to="/workshops">Workshops</Link>
                </li>
                <li className={classes.menuItem}>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className={classes.menuItem}>
                    <Link to="/admin">Admin</Link>
                </li>
            </ol>
        </nav>
    );
}
