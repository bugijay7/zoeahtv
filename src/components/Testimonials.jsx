import React from 'react';
import '../styles/testimonials.css'; // Ensure this file contains styles for the component
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';

function Testimonials() {
    return (
        <div className="Testimonials-container" id="testimonials">
            <h1 className="Testimonials-title">What Clients Are Saying About ZoeahTv</h1>
            <div className="Testimonials-grid">
                {/* Photography Testimonial */}
                <div className="Testimonial-card">
                    <img 
                        src={person1} 
                        alt="Photography Client" 
                        className="Testimonial-image"
                    />
                    <h2 className="Testimonial-name">Jane Njeri</h2>
                    <p className="Testimonial-role">Photography Client</p>
                    <p className="Testimonial-text">
                        "Zoeahtv's photography captured the most beautiful moments of my graduation. 
                        The shots were breathtaking, and they truly went above and beyond!"
                    </p>
                </div>

                {/* Event MC Testimonial */}
                <div className="Testimonial-card">
                    <img 
                        src={person2} 
                        alt="Event MC Client" 
                        className="Testimonial-image"
                    />
                    <h2 className="Testimonial-name">Mc Smith</h2>
                    <p className="Testimonial-role">Event MC Client</p>
                    <p className="Testimonial-text">
                        "The event MC service from Zoeahtv was outstanding! They kept the crowd engaged 
                        and made the event memorable for everyone. I highly recomend Jean and his ZoeahTv crew."
                    </p>
                </div>

                {/* Advertisement Testimonial */}
                <div className="Testimonial-card">
                    <img 
                        src={person3} 
                        alt="Advertisement Client" 
                        className="Testimonial-image"
                    />
                    <h2 className="Testimonial-name">Kibugi Maina</h2>
                    <p className="Testimonial-role">Advertisement Client</p>
                    <p className="Testimonial-text">
                        "Zoeahtv created an amazing advertisement for my Salon business. 
                        It was creative, professional, and helped increase my brand
                        visibility significantly!"
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
