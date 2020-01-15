import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    Kenan Dinkelmann
                </Link>
                <button className="navbar-toggler" data-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/choreography" className="nav-link">
                                Choreography
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
                    </ul>
                </div>
            </nav>
        </>
    )
}
