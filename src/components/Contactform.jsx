import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import '../styles/contactform.css';
function Contactform() {
    return (
      <div className='ctbox'>
                    <div className="contactform-container" id="contactform">
                    <div className="contact-details">
                       <div className="contact-item">
                       <h2>Social Media</h2>
                       <div className="social-media">
                       <a href="https://www.facebook.com/bonfire.dushime" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
                       <a href="https://www.instagram.com/jonte_the_comedian/" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
                       <a href="https://www.youtube.com/results?search_query=zoeah+tv+official" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a>
                       <a href="https://www.tiktok.com/search?lang=en&q=zoeah%20tv&t=1732667141749" target="_blank" rel="noopener noreferrer"><FaTiktok /> Tiktok</a>
                       </div>
                    </div>

                <div className='contact-itembox'>
                    
                    <div className="contact-item">
                    <h2>Email</h2>
                    <a href="mailto:jeandedushimimana@gmail.com">info@zoeahtvmedia.com</a><br></br>
                    <a href="mailto:jeandedushimimana@gmail.com">support@zoeahtvmedia.com</a>
                    </div>

                    <div className="contact-item">
                    <h2>Phone</h2>
                    <p>+254 712-396-722</p>
                    <p>+254 107-528-862</p>
                    </div>

                    <div className="contact-item">
                    <h2>Address</h2>
                    <p>123 Kinoo, Kikuyu, Kiambu, Kenya</p>
                    </div>

                    <div className="contact-item">
                    <h2>Website</h2>
                    <a href="https://zoeahmedia.com" target="_blank" rel="noopener noreferrer">www.zoeahmedia.com</a>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
}

export default Contactform;
