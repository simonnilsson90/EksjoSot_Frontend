import React from 'react';
import Footer from "../components/footer/FooterComponent";
import Image from 'mui-image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './aboutUs.css';

const HallbarhetPage = () => {
    return (
        <div className="min-h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }}>
                <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10">
                <div className="flex flex-col lg:flex-row lg:flex-wrap p-4 gap-4 mb-10 pb-10">
                    <div className="section bg-sot text-gray-100 lg:mx-16 mx-4">
                        <div>
                            <h1 className="lg:text-4xl text-4xl border-sotOrange border-b-2 pb-2 mb-6">Hållbarhet</h1>
                            <Card >
                                <CardContent >
                                    <p className='mb-1'>
                                        Hos oss är hållbarhet en central del av vårt dagliga arbete. Vi arbetar aktivt för att främja en hållbar framtid genom flera viktiga initiativ:
                                    </p>
                                    <h2 className='text-2xl mb-2 mt-4'>Arbetsmiljö</h2>
                                    <p className='mb-4'>
                                        Vi lägger stor vikt vid arbetsmiljön för våra medarbetare, särskilt när det gäller arbete på tak. Taksäkerhet är en prioritet, och vi följer strikta säkerhetsföreskrifter samt har kollektivavtal som säkerställer goda arbetsvillkor.
                                    </p>
                                    <h2 className='text-2xl mb-2 mt-4'>Miljöarbete</h2>
                                    <p className='mb-4'>
                                        Vårt engagemang för miljön reflekteras i vårt användande av elbilar och moderna sotsugare som minimerar utsläppen. Vi strävar alltid efter att använda miljövänliga metoder och verktyg i vårt arbete.
                                    </p>
                                    <h2 className='text-2xl mb-2 mt-4'>Certifieringar</h2>
                                    <p className='mb-4'>
                                        Vi är stolta över att vara ISO-certifierade, vilket bekräftar vårt engagemang för kvalitet och miljöstandarder. Vi är också medlemmar i Kommunal, vilket innebär att vi följer deras riktlinjer och standarder för arbetsmiljö och arbetsrätt.
                                    </p>
                                    <div className=" flex flex-row space-x-2">
                                       <div>
                                       <Image
                                       
                                       width={120}
                                  
                                       src={`${process.env.PUBLIC_URL}/kommunal.png`}
                                       sx={{
                                         
                                           borderColor: 'grey.100',
                                           fontFamily: 'monospace',
                                           fontWeight: 700,
                                           letterSpacing: '.0rem',
                                           color: 'inherit',
                                           textDecoration: 'none',
                                       }}
                                   />
                                       </div>
                                       <Image
                                            width={50}
                                       
                                            src={`${process.env.PUBLIC_URL}/ISO.png`}
                                            sx={{
                                         
                                                borderColor: 'grey.100',
                                                fontFamily: 'monospace',
                                                fontWeight: 700,
                                                letterSpacing: '.0rem',
                                                color: 'inherit',
                                                textDecoration: 'none',
                                            }}
                                        />
                                      <div>
                                        </div> 
                                        
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className=' w-full'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HallbarhetPage;
