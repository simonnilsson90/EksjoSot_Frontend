import React from 'react';
import Footer from "../components/footer/FooterComponent";


const HallbarhetPage = () => {

    
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
      <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen"> 
<div>
    <h1 className=' text-5xl text-gray-100  '>Hållbarhet</h1>
</div>
<Footer/>
</div>
</div>
    )
}

export default HallbarhetPage