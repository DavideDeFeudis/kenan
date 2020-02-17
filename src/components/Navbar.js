import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import '../styles/index.scss';
import { Context } from "../context";

export default function Navbar() {
    const { videos } = useContext(Context)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-light">
            <Link to="/" className="navbar-brand">
                Kenan Dinkelmann
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link">
                            Admin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choreography
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                videos.map(video => <Link key={video.id} url={video.url} info={video.info} className="dropdown-item" to={'/' + video.title.toLowerCase()}>{video.title}</Link>)
                            }
                        </div>
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
    )
}
