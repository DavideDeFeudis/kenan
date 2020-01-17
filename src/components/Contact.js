import React from 'react'
import '../index.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {
    return (
        <div className='Contact'>
            <Navbar />
            <div className="container">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name"></input>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary mb-2">Send</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
