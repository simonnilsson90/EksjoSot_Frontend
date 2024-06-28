import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import besiktningarData from '../data/besiktningarData';
import './aboutUs.css';
import Footer from "../components/footer/FooterComponent";

const BesiktningarPage  = () => {
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
        <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen  pt-10"> 
    
        <div className="    text-white p-6 mx-6 space-y-2 bg-sot "  >
        <h1 className="lg:text-4xl text-4xl border-sotOrange  border-b-2 pb-2 ">{besiktningarData.title}</h1>
        <Card>
            <CardContent>
            <p className=" lg:text-2xl  text-center">{besiktningarData.description}</p>

            </CardContent>
        </Card>
        
    </div>
  

        <div className="content-grid">
            <div className="vision section bg-sot text-gray-100">
            <h2 className='border-b-2 border-sotOrange inline-block mb-1 text-xl'>{besiktningarData.vision.title}</h2>
            <Card>
            <CardContent>
             <p>{besiktningarData.vision.content}</p>
            </CardContent>
             </Card>
               
            </div>

            <div className="what-we-do normal-case section bg-sot text-gray-100">
                <div>
                    <h2 className='border-b-2 border-sotOrange inline-block mb-1 text-xl'>{besiktningarData.whatWeDo.title}</h2>
                    <Card>
            <CardContent>
            <p>{besiktningarData.whatWeDo.content}</p>
            </CardContent>
             </Card>
                   
                </div>
            </div>

            <div className="how-we-stand-out normal-case section bg-sot text-gray-100">
                <div>
                    <h2 className='border-b-2 border-sotOrange inline-block mb-1 text-xl'>{besiktningarData.howWeStandOut.title}</h2>
                    
                    <Card>
            <CardContent>
            <p>  {besiktningarData.howWeStandOut.content}</p>
            </CardContent>
             </Card>
                </div>
            </div>

            <div className="our-culture normal-case section bg-sot text-gray-100 text-xl">
                <div>
                    <h2 className='border-b-2 border-sotOrange inline-block mb-1'>{besiktningarData.ourCulture.title}</h2>
                   
                    <Card>
            <CardContent>
            <p>{besiktningarData.ourCulture.content}</p>
            </CardContent>
             </Card>
                </div>
            </div>

            <div className="community-outreach normal-case section bg-sot text-gray-100 text-xl">
                <div>
                    <h2 className='border-b-2 border-sotOrange inline-block mb-1'>{besiktningarData.communityOutreach.title}</h2>
               
                    <Card>
            <CardContent>
            <p>{besiktningarData.communityOutreach.content}</p>
            </CardContent>
             </Card>
                </div>
            </div>

            <div className="why-choose-us normal-case section bg-sot text-gray-100 text-xl">
                <div>
                    <h2 className='border-b-2 border-sotOrange inline-block mb-1'>{besiktningarData.whyChooseUs.title}</h2>
                   
                    <Card>
            <CardContent>
            <p>{besiktningarData.whyChooseUs.content}</p>
            </CardContent>
             </Card>
                </div>
            </div>
 
        </div>
        <Footer />
    </div>
    </div>
    );
  }
  
  export default BesiktningarPage;
  