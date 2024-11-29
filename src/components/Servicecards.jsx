import React from 'react';
import { FaCamera, FaFilm, FaPenNib, FaBullhorn, FaPodcast, FaLaugh, FaMicrophone } from 'react-icons/fa';
import '../styles/servicecards.css';

function Servicecards() {
    const services = [
        { title: 'Photography', icon: <FaCamera />, description: 'Professional photography services capturing moments that matter.' },
        { title: 'Instrumentation', icon: <FaFilm />, description: 'Experienced, srums and guitar player for church worship teams' },
        { title: 'Content Creation', icon: <FaPenNib />, description: 'Creative content to boost your brand’s presence on social media and beyond.' },
        { title: 'Product Advertisement', icon: <FaBullhorn />, description: 'Engaging product advertisement videos to showcase your products.' },
        { title: 'Podcasting', icon: <FaPodcast />, description: 'Studio-quality podcasting services for various topics and niches.' },
        { title: 'Comedy Skits', icon: <FaLaugh />, description: 'Entertaining comedy skits that engage audiences and drive laughs.' },
        { title: 'Event MC Services', icon: <FaMicrophone />, description: 'Professional MC services for events of all types and sizes.' }
    ];

    return (
        <div className='servicecards-container' id='servicecards'>
            <h1>Our Services</h1>
            <div className='servicecards'>
                {services.map((service, index) => (
                    <div key={index} className='servicecard'>
                        <h2>{service.icon} {service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Servicecards;

