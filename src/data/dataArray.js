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
const getRandomPrice = () => {
  // 20% chance the item is free
  return Math.random() < 0.2 ? "Free" : `${Math.floor(Math.random() * 150 + 50)}$`;
};

const getRandomSeller = () => {
  const sellers = ["Alice", "Bob", "Charlie", "Dana", "Eli", "Faith", "George", "Hannah"];
  return sellers[Math.floor(Math.random() * sellers.length)];
};


const data = [
  { "description": "Celebrity Photoshoots", "type": "Images", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Fashion Show Clips", "type": "Video", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Street Food Documentary", "type": "Video", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Animal Soundscapes", "type": "Audio", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Nature Scenery Wallpapers", "type": "Images", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Sports Event Highlights", "type": "Video", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "City Skyline Timelapses", "type": "Video", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Vintage Car Engine Sounds", "type": "Audio", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Movie Soundtracks", "type": "Audio", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Cartoon Character Designs", "type": "Images", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Abstract Digital Art", "type": "Other", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Historical Landmark Guides", "type": "Other", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Music Artist Interviews", "type": "Video", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Travel Destination Podcasts", "type": "Audio", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Technology Gadgets Review", "type": "Video", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Wildlife Photography Collection", "type": "Images", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Space Exploration VR Experiences", "type": "Other", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Fantasy Creature Illustrations", "type": "Images", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Famous Landscape Posters", "type": "Images", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() },
  { "description": "Cultural Festival Recordings", "type": "Audio", "image": images[randomNum()], "price": getRandomPrice(), "seller": getRandomSeller() }
];


export default data;