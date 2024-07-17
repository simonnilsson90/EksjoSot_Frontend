import React from 'react';
import './aboutUs.css';
import Accordion from '../components/Accordion';
import { Link } from 'react-router-dom';
import LayoutComponent from '../components/layout';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SotningPage = () => {
    return (
        <div
            id="background-element"
            className="lg:min-h-screen md:min-h-screen h-screen relative bg-cover bg-center md:bg-top md:bg-fixed lg:bg-fixed"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)`,
                backgroundPosition: 'right top',
                '@media (max-width: 768px)': {
                    backgroundPosition: 'right bottom',
                },
            }}
        >
            <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10">
                <LayoutComponent
                    title="Sotning"
                    pretext=" Vår mångåriga erfarenhet och kompetens inom sotning gör att vi kan erbjuda dig en trygg och säker hantering av din eldstad. "
                    back={<Link className='flex items-center  '
                       
                        to={"/tjanster"}>
                              <ArrowBackIcon className=''/>
                            <p className=' text-sm '>Tjänster</p>
                           
                             </Link>
                            }
                    sections={[
                        {
                            text: (
                                <div>
                                    <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Eldstäder och rök</h2>
                                    <p className=''>
                                        Vid sotning av eldstäder och rökkanaler innebär detta att alla ytor som rökgaserna passerar rengörs. Sotning innebär att brännbara sotbeläggningar tas bort i sådan omfattning att risken för skorstensbrand 
                                        och skadeverkningarna vid en skorstensbrand minimeras.
                                    </p>
                                    
                                </div>
                            ),
                            bild: <img src={`${process.env.PUBLIC_URL}/istockphoto1.jpg`} className='object-cover' />
                        },
                        {
                            text: (
                                <div>
                                   <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Bestämmelser</h2>
                                    <p>
                                        Hur ofta sotning ska göras bestäms av kommunen. I varje kommun finns det lokala föreskrifter för rengöring (sotning). Imkanalen, köksfläktens anslutning till skorstenen/ ventilationssystemet i bostadshus, omfattas inte längre av kravet på sotning.
                                        Trots detta behöver imkanalen rengöras med jämna mellanrum, om inte annat av funktionsmässiga skäl. Ansvaret för rengöring av imkanalen ligger på fastighetsägaren.
                                    </p>
                                    <img src={`${process.env.PUBLIC_URL}/sotredskap.jpg`} className=' lg:hidden md:hidden object-cover mt-4' />
                                </div>
                            ),
                            bild: <img src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`} className='object-cover' />
                        },
                        {
                            text: (
                                <div>
                                    <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Säkerhet</h2>
                                    <p className=''>
                                        Säkerheten på ditt tak är viktig för oss. Du som fastighetsägare har ansvar för att de säkerhetsanordningar som finns föreskrivet i lag finns på plats och är väl underhållna.
                                    </p>
                                    <div className='lg:mb-6 md:mb-4 mb-10'>
                                        <Link to={"/tjanster"}>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    marginTop: "1rem",
                                                    textTransform: "none",
                                                    width: "20rem",
                                                    color: "white",
                                                    marginBottom: "8px",
                                                    
                                                    border: "0px",
                                                    fontSize: "1.5rem",
                                                    lineHeight: "2rem",
                                                    borderRadius: "0rem"
                                                }}
                                            >
                                                Mer om säkerhet →
                                            </Button>
                                        </Link>
                                    </div>
                                    <p className='italic'>
                                        Numera kan vi också i vissa fall sota din rökkanal underifrån.
                                    </p>
                                    <Link to={"/tjanster"}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                marginTop: "1rem",
                                                textTransform: "none",
                                                width: "20rem",
                                                color: "white",
                                                marginBottom: "2px",
                                             
                                                border: "0px",
                                                fontSize: "1.5rem",
                                                lineHeight: "2rem",
                                                borderRadius: "0rem"
                                            }}
                                        >
                                            Mer om stavsotning →
                                        </Button>
                                    </Link>
                                </div>
                            ),
                            bild: <img src={`${process.env.PUBLIC_URL}/feet.jpg`} className='object-cover' />
                        },
                        // Lägg till fler sektioner här om det behövs
                    ]}
                />
            </div>
        </div>
    );
}

export default SotningPage;
