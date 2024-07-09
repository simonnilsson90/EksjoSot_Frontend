import React from 'react';
import LayoutComponent from '../components/layout';
import './aboutUs.css';
import { useEffect } from 'react';

const HallbarhetPage = () => {
    useEffect(() => {
        const updateBackground = () => {
            const element = document.getElementById('background-element');
            if (window.innerWidth >= 768) {
                element.style.backgroundImage = `url(${process.env.PUBLIC_URL}/chimneys.jpg)`;
                element.classList.add('bg-cover', 'bg-fixed');
            } else {
                element.style.backgroundImage = 'none';
                element.classList.remove('bg-cover', 'bg-fixed');
            }
        };

        updateBackground();
        window.addEventListener('resize', updateBackground);

        return () => {
            window.removeEventListener('resize', updateBackground);
        };
    }, []);
    return (
        <div id="background-element" className="min-h-screen bg-sot">
            <div className="lg:bg-gradient-to-b lg:from-black/70 lg:via-transparent lg:to-transparent lg:min-h-screen pt-10 ">
        <LayoutComponent 
            title="Hållbarhet" 
            pretext={
                <p>Hos oss är hållbarhet en central del av vårt dagliga arbete. Vi arbetar aktivt för att främja en hållbar framtid genom flera viktiga initiativ:</p>
      
           }
            text1= { <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>Arbetsmiljö</h2><p className=''>Vi lägger stor vikt vid arbetsmiljön för våra medarbetare, särskilt när det gäller arbete på tak. Taksäkerhet är en prioritet, och vi följer strikta säkerhetsföreskrifter samt har kollektivavtal som säkerställer goda arbetsvillkor.</p> </div>}
            bild1={ <img src={`${process.env.PUBLIC_URL}/chimney-day.jpg`} className='object-cover  '/>  }
            text2={<div> <h2 className='text-2xl mb-2 '>Miljöarbete</h2><p className='mb-2' >Vårt engagemang för miljön reflekteras i vårt användande av elbilar och moderna sotsugare som minimerar utsläppen. Vi strävar alltid efter att använda miljövänliga metoder och verktyg i vårt arbete.</p></div>} 
            bild2={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>  }
            text3={<div> <h2 className='text-2xl mb-2'>Certifieringar</h2> <p className='mb-4'> Vi är stolta över att vara ISO-certifierade, vilket bekräftar vårt engagemang för kvalitet och miljöstandarder. Vi är också medlemmar i Kommunal, vilket innebär att vi följer deras riktlinjer och standarder för arbetsmiljö och arbetsrätt.</p></div>} 
            bild3={ <img src={`${process.env.PUBLIC_URL}/riks.png`} className='object-cover  py-2 '/>   }
        />
        </div>
        </div>
    );
}

export default HallbarhetPage;
