import img__1 from '../assets/images/homepage/img1.png'
import img__2 from '../assets/images/homepage/img2.png'
import img__3 from '../assets/images/homepage/img3.png'
import img__4 from '../assets/images/homepage/img4.png'
import img__5 from '../assets/images/homepage/img5.jpg'
import img__6 from '../assets/images/homepage/img6.jpg'
import img__7 from '../assets/images/homepage/img7.jpg'

function randomNum() {
    return Math.floor(Math.random() * 7);
}

const images = [img__1, img__2, img__3, img__4, img__5, img__6,img__7];

const data = [
    { "description": "Celebrity Photoshoots", "type": "Images", "price": "100$", "image": images[randomNum()] },
    { "description": "Fashion Show Clips", "type": "Video", "price": "150$", "image": images[randomNum()] },
    { "description": "Street Food Documentary", "type": "Video", "price": "80$", "image": images[randomNum()] },
    { "description": "Animal Soundscapes", "type": "Audio", "price": "120$", "image": images[randomNum()]},
    { "description": "Nature Scenery Wallpapers", "type": "Images", "price": "90$", "image": images[randomNum()] },
    { "description": "Sports Event Highlights", "type": "Video", "price": "110$", "image": images[randomNum()] },
    { "description": "City Skyline Timelapses", "type": "Video", "price": "130$", "image": images[randomNum()]},
    { "description": "Vintage Car Engine Sounds", "type": "Audio", "price": "70$", "image": images[randomNum()]},
    { "description": "Movie Soundtracks", "type": "Audio", "price": "140$", "image": images[randomNum()]},
    { "description": "Cartoon Character Designs", "type": "Images", "price": "100$", "image": images[randomNum()]},
    { "description": "Abstract Digital Art", "type": "Other", "price": "160$", "image": images[randomNum()] },
    { "description": "Historical Landmark Guides", "type": "Other", "price": "180$", "image": images[randomNum()]},
    { "description": "Music Artist Interviews", "type": "Video", "price": "200$", "image": images[randomNum()]},
    { "description": "Travel Destination Podcasts", "type": "Audio", "price": "100$", "image": images[randomNum()] },
    { "description": "Technology Gadgets Review", "type": "Video", "price": "150$", "image": images[randomNum()] },
    { "description": "Wildlife Photography Collection", "type": "Images", "price": "120$", "image": images[randomNum()]},
    { "description": "Space Exploration VR Experiences", "type": "Other", "price": "90$", "image": images[randomNum()]},
    { "description": "Fantasy Creature Illustrations", "type": "Images", "price": "110$", "image": images[randomNum()] },
    { "description": "Famous Landscape Posters", "type": "Images", "price": "130$", "image": images[randomNum()]},
    { "description": "Cultural Festival Recordings", "type": "Audio", "price": "70$", "image": images[randomNum()]}
  ];
  

export default data;