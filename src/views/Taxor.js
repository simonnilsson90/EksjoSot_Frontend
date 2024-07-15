import React from 'react';
import LayoutComponent from '../components/layout';
import './aboutUs.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TaxorPage = () => {
    return (
        <div
            id="background-element"
            className="lg:min-h-screen md:min-h-screen h-screen relative bg-cover bg-center md:bg-top md:bg-fixed lg:bg-fixed"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/istockphoto1.jpg)`,
                backgroundPosition: 'center top',
                '@media (max-width: 768px)': {
                    backgroundPosition: 'right bottom',
                },
            }}
        >
            <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10">
                <LayoutComponent
                    title="Sotningstaxa"
                    pretext="Sotningstaxan är fastställd av kommunen och baseras på fastighetens typ och omfattning av sotningsarbetet."
                    sections={[
                        {
                            text: (
                                <div>
                                    <h2 className='text-2xl mb-2 mt-4'>Länkar till respektive kommun:</h2>
                                    <Link to={"https://eksjo.se/bo-miljo-och-trafik/ditt-boende/brandskyddskontroll-och-rengoring-sotning"}>
                                        <div className="flex">
                                            <h2 className="pr-2">Eksjö</h2>
                                            <ArrowForwardIcon className="text-sotOrange mb-1" />
                                        </div>
                                    </Link>
                                    <Link to={"https://www.vastervik.se/Bygga-bo-och-miljo/Brandskydd-sotning/Sotning/"}>
                                        <div className="flex">
                                            <h2>Västervik</h2>
                                            <ArrowForwardIcon className="text-sotOrange" />
                                        </div>
                                    </Link>
                                </div>
                            ),
                            bild: <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover' />
                        },
                        // Lägg till fler sektioner här om det behövs
                    ]}
                />
            </div>
        </div>
    );
}

export default TaxorPage;


