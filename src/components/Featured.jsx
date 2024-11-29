import React from 'react';
import '../styles/featured.css';

// Importing images
import filmmakingImg from '../assets/filmmaking.jpg';
import travelImg from '../assets/travel.jpg';
import kenyaImg from '../assets/kenya.jpg';
import portraitImg from '../assets/portrait.jpg';

function Featured() {
    return (
        <div className="feature-container" id="feature">
            <h1 className="feature-title">Featured Content</h1>
            <div className="feature-grid">
                {/* First Featured Item */}
                <figure className="feature-itemc">
                    <img src={filmmakingImg} alt="Filmmaking" className="feature-img" />
                    <figcaption className="feature-text">
                        <h2 className="feature-item-title">Inside the Skit-making World</h2>
                        <p className="feature-item-description">
                            A behind the scenes look at your favorite <br></br> skits and the actors.
                        </p>
                    </figcaption>
                </figure>

                {/* Second Featured Item */}
                <figure className="feature-itemc">
                    <img src={travelImg} alt="Travel Destinations" className="feature-img" />
                    <figcaption className="feature-text">
                        <h2 className="feature-item-title">Top Travel Destinations</h2>
                        <p className="feature-item-description">
                            Explore beautiful landscapes and cultures <br></br>around the world.
                        </p>
                    </figcaption>
                </figure>

                {/* Third Featured Item */}
                <a href="https://www.youtube.com/watch?v=-yorXX-kTF4&t=5s"> <figure className="feature-itemc">
                    <img src={kenyaImg} alt="Jean's Journey to Kenya" className="feature-img" />
                    <figcaption className="feature-text">
                        <h2 className="feature-item-title">Jean's Journey to Kenya</h2>
                        <p className="feature-item-description">
                            Hosted by Julius Mgelwa enjoy Jean's <br></br>remarkable journey to Kenya.
                        </p>
                    </figcaption>
                </figure></a>

                {/* Fourth Featured Item */}
                <figure className="feature-itemc">
                    <img src={portraitImg} alt="Portrait Photography" className="feature-img" />
                    <figcaption className="feature-text">
                        <h2 className="feature-item-title">Portrait Photography</h2>
                        <p className="feature-item-description">
                            Capturing personalities and emotions <br></br>through stunning portrait shots.
                        </p>
                    </figcaption>
                </figure>
            </div>
            <a href="#all-content" className="view-all-button">View All</a>
        </div>
    );
}

export default Featured;
