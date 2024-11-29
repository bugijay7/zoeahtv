import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';
import '../styles/footer.css'

function Footer() {
    return (
        <div className='footer-box'>
        <div className='footer-container' id='footer'>
            <h1>Stay Connected</h1>
            <div className='footer-content'>
                <div className='contact-info'>
                    <h3>Contact Us</h3>
                    <p>jeandedushimimana@gmail.com</p>
                    <p>Phone: +254 712-396-722</p>
                    <p>Address: 123 Kinoo,<br></br> Kikuyu, Kiambu, Kenya</p>
                </div>
                <div className='socials'>
                    <h3>Follow Us</h3>
                    <div className='social-icons'>
                        <a href="https://www.instagram.com/jonte_the_comedian/"  target='_blank' rel='noopener noreferrer'>
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/bonfire.dushime" target='_blank' rel='noopener noreferrer'>
                            <FaFacebook />
                        </a>
                      
                        <a href="https://www.youtube.com/results?search_query=zoeah+tv+official" target='_blank' rel='noopener noreferrer'>
                            <FaYoutube />
                        </a>
                        <a href="https://www.tiktok.com/search?lang=en&q=zoeah%20tv&t=1732667141749" target='_blank' rel='noopener noreferrer'>
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; {new Date().getFullYear()} Bugi solutions. All rights reserved.</p>
            </div>

            <nav>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/services">Services</Link>
            <Link to="/contactpage">Contact</Link> 
        </nav>
        </div>
        </div>
    );
}

export default Footer;
