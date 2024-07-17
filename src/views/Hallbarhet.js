import React from 'react';
import LayoutComponent from '../components/layout';
import './aboutUs.css';

const HallbarhetPage = () => {
    return (
        <div
            id="background-element"
            className="lg:min-h-screen md:min-h-screen h-screen relative bg-cover bg-center md:bg-top md:bg-fixed lg:bg-fixed"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/fireplace.jpg)`,
                backgroundPosition: 'right top', // Default position för större skärmar
                '@media (max-width: 768px)': {
                    backgroundPosition: 'right bottom',
                },
            }}
        >
            <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10">
                <LayoutComponent
                    title="Hållbarhet"
                    pretext={
                        <p>
                            Hos oss är hållbarhet en central del av vårt dagliga arbete. Vi arbetar aktivt för att främja en hållbar framtid genom flera viktiga initiativ:
                        </p>
                    }
                    sections={[
                        {
                            text: (
                                <div>
                                    <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Arbetsmiljö</h2>
                                    <p>Vi lägger stor vikt vid arbetsmiljön för våra medarbetare, särskilt när det gäller arbete på tak. Taksäkerhet är en prioritet, och vi följer strikta säkerhetsföreskrifter samt har kollektivavtal som säkerställer goda arbetsvillkor.</p>
                                </div>
                            ),
                            bild: <img src={`${process.env.PUBLIC_URL}/chimney-day.jpg`} className='object-cover' />
                        },
                        {
                            text: (
                                <div>
                                    <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Miljöarbete</h2>
                                    <p className='mb-2'>Vårt engagemang för miljön reflekteras i vårt användande av elbilar och moderna sotsugare som minimerar utsläppen. Vi strävar alltid efter att använda miljövänliga metoder och verktyg i vårt arbete.</p>
                                </div>
                            ),
                            bild: <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover' />
                        },
                        {
                            text: (
                                <div>
                                    <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Certifieringar</h2>
                                    <p className='mb-4'> Vi är stolta över att vara ISO-certifierade, vilket bekräftar vårt engagemang för kvalitet och miljöstandarder. Vi är också medlemmar i Kommunal, vilket innebär att vi följer deras riktlinjer och standarder för arbetsmiljö och arbetsrätt.</p>
                                </div>
                            ),
                            bild:(<div className=' my-10 flex items-center justify-center gap-x-8'>
 <img src={`${process.env.PUBLIC_URL}/riks.png`} className='  my-4 h-60' />
 <img src={`${process.env.PUBLIC_URL}/kommunal.png`} className='py-2 h-28' />
                            </div>)

                        },
                        // Lägg till fler sektioner här om det behövs
                    ]}
                />
            </div>
        </div>
    );
}

export default HallbarhetPage;
