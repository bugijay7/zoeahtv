// data.jsx

// Import images for portraits
import port1 from './assets/images/port1.jpg';
import port2 from './assets/images/port2.jpg';
import port3 from './assets/images/port3.jpg';
import port4 from './assets/images/port4.jpg';
import port5 from './assets/images/port5.jpg';
import port6 from './assets/images/port6.jpg';

// Import images for properties
import house1 from './assets/images/house1.jpg';
import house2 from './assets/images/house2.jpg';
import house3 from './assets/images/house3.jpg';
import house4 from './assets/images/house4.jpg';
import house5 from './assets/images/house5.jpg';
import house6 from './assets/images/house6.jpg';

// Import images for Zoeah TV crew
import crew1 from './assets/images/crew1.jpg';
import crew2 from './assets/images/crew2.jpg';
import crew3 from './assets/images/crew3.jpg';
import crew4 from './assets/images/crew4.jpg';
import crew5 from './assets/images/crew5.jpg';
import crew6 from './assets/images/crew6.jpg';

// Import images for adverts
import ad1 from './assets/images/ad1.jpg';
import ad2 from './assets/images/ad2.jpg';
import ad3 from './assets/images/ad3.jpg';
import ad4 from './assets/images/ad4.jpg';
import ad5 from './assets/images/ad5.jpg';
import ad6 from './assets/images/ad6.jpg';

// Import images for events
import ev1 from './assets/images/ev1.jpg';
import ev2 from './assets/images/ev2.jpg';
import ev3 from './assets/images/ev3.jpg';
import ev4 from './assets/images/ev4.jpg';
import ev5 from './assets/images/ev5.jpg';
import ev6 from './assets/images/ev6.jpg';

// Define gallery data with imported images
const galleryData = [
    {
        category: 'Portraits',
        images: [
            { src: port1, alt: 'Portrait 1' },
            { src: port2, alt: 'Portrait 2' },
            { src: port3, alt: 'Portrait 3' },
            { src: port4, alt: 'Portrait 4' },
            { src: port5, alt: 'Portrait 5' },
            { src: port6, alt: 'Portrait 6' },
        ],
        description: "A collection of portrait photographs I've taken."
    },
    {
        category: 'Properties',
        images: [
            { src: house1, alt: 'Property 1' },
            { src: house2, alt: 'Property 2' },
            { src: house3, alt: 'Property 3' },
            { src: house4, alt: 'Property 4' },
            { src: house5, alt: 'Property 5' },
            { src: house6, alt: 'Property 6' },
        ],
        description: "Images of properties I've photographed."
    },
    {
        category: 'Zoeah TV Crew',
        images: [
            { src: crew1, alt: 'Zoeah Crew 1' },
            { src: crew2, alt: 'Zoeah Crew 2' },
            { src: crew3, alt: 'Zoeah Crew 3' },
            { src: crew4, alt: 'Zoeah Crew 4' },
            { src: crew5, alt: 'Zoeah Crew 5' },
            { src: crew6, alt: 'Zoeah Crew 6' },
        ],
        description: "Photos of the crew from Zoeah TV."
    },
    {
        category: 'Adverts',
        images: [
            { src: ad1, alt: 'Advert 1' },
            { src: ad2, alt: 'Advert 2' },
            { src: ad3, alt: 'Advert 3' },
            { src: ad4, alt: 'Advert 4' },
            { src: ad5, alt: 'Advert 5' },
            { src: ad6, alt: 'Advert 6' },
        ],
        description: "Advertisements I've created and photographed."
    },
    {
        category: 'Events',
        images: [
            { src: ev1, alt: 'Event 1' },
            { src: ev2, alt: 'Event 2' },
            { src: ev3, alt: 'Event 3' },
            { src: ev4, alt: 'Event 4' },
            { src: ev5, alt: 'Event 5' },
            { src: ev6, alt: 'Event 6' },
        ],
        description: "Images from various events I have captured."
    }
];

export default galleryData;
