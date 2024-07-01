import React from "react";
import Footer from "../components/footer/FooterComponent";
import { Link } from 'react-router-dom';  
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import Image from "mui-image";
/*


*/

const TjansterPage= () => {
  useEffect(() => {
    const updateBackground = () => {
        const element = document.getElementById('background-element');
        if (window.innerWidth >= 1024) { // 1024px motsvarar 'lg' i Tailwind CSS
            element.style.backgroundImage = `url(${process.env.PUBLIC_URL}/chimneys.jpg)`;
            element.classList.add('bg-cover', 'bg-fixed');
        } else {
            element.style.backgroundImage = 'none';
            element.classList.remove('bg-cover', 'bg-fixed');
        }
    };

    updateBackground(); // Kör en gång vid laddning
    window.addEventListener('resize', updateBackground); // Lägg till eventlyssnare för att hantera förändringar i storlek
    
    return () => {
      window.removeEventListener('resize', updateBackground); // Ta bort eventlyssnaren vid nedmontering
  };
}, []);
    return (
      <div id="background-element" className="min-h-screen bg-sot">
      <div className="lg:bg-gradient-to-b lg:from-black/70 lg:via-transparent lg:to-transparent lg:min-h-screen pt-10">

         
  
  
      <div className="     text-white px-12  space-y-2 lg:mt-5  "  >
      <h1 className="lg:text-4xl text-4xl border-sotOrange lg:border-none lg:border-b-0  border-b-2 text-start ">Tjänster</h1>
      <p className=" lg:text-2xl  text-start">Vi gör inte mer än absolut nödvändigt, men vi gör det bra</p>
  </div>
 
  <div className="content-grid lg:mt-12 lg:mx-9 mx-auto  ">
    
      <div className="  section bg-sot text-gray-100">



      <div className='lg:hidden  '> 
      <Image 
  src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>

      
              <h2 className="mt-2 lg:mt-0">Sotning/rengöring</h2>
              <p>Rengöring är viktigt bla bala sfff</p>
              <Link to={"/tjanster/sotning/rengorning"}> 
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                    marginBottom: "2px",
                    backgroundColor: "rgb(224, 95, 51)",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    textDecoration: "none"
                 
                  }}
                >
                 Läs mer
                </Button>
                </Link>
          
      </div>

      <div className="what-we-do section bg-sot text-gray-100">
          <div>
          <div className='lg:hidden'> 
      <Image 
 src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>
              <h2 className="mt-2 lg:mt-0">Besiktningar vid överlåtelse, nyinstallationer, status</h2>
              <p>khasdkfgaskdhfkjasdf</p>
              <Link to={"/tjanster/besiktningar"}> 
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                    marginBottom: "2px",
                    backgroundColor: "rgb(224, 95, 51)",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem"
                    
                  }}
                >
                 Läs mer
                </Button>
                </Link>
          </div>
      </div>

      <div className="how-we-stand-out section bg-sot text-gray-100">
          <div>
          <div className='lg:hidden'> 
      <Image 
   src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>
              <h2 className="mt-2 lg:mt-0">Sotning och brandskyddskontroller</h2>
              <p>Brandskyd bababab lär mer</p>
              <Link to={"/tjanster/besiktningar"}> 
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                    marginBottom: "2px",
                    backgroundColor: "rgb(224, 95, 51)",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0.5rem"
                  }}
                >
                 Läs mer
                </Button>
                </Link>
          </div>
      </div>

      <div className="our-culture section bg-sot text-gray-100">
          <div>
          <div className='lg:hidden'> 
      <Image 
  src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>
              <h2 className="mt-2 lg:mt-0">Övriga tjänster inom området</h2>
              <p>sdfkjshdfkhskdfhkjsdf läs mer</p>
              <Link to={"/tjanster/ovriga-tjanster"}> 
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                    marginBottom: "2px",
                    backgroundColor: "rgb(224, 95, 51)",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0.5rem"
                  }}
                >
                 Läs mer
                </Button>
                </Link>
          </div>
      </div>
      <div className="what-we-do section bg-sot text-gray-100">
                <div>
<h2 className=' text-xl mb-2'>Vad ska jag tänka på innan sotaren/brandskyddsteknikern kommer?</h2>
<ul className=" pl-4">
<li className='list-disc '>Stege ska vara framtagen och ev. rest.</li>
<li className="list-disc">Det ska finnas godkända takskyddsanordningar så att sotaren/teknikern ska kunna gå upp på taket och arbeta säkert.</li>
<li className='list-disc'>Du behöver inte vara hemma, men du måste ge sotaren åtkomst till din fastighet så sotaren/teknikern kan gå in och nå eldstaden inifrån. Vid brandskyddskontroll följer teknikern skorstenen  i hela sin längd och behöver även åtkomst till vinden.  Förbered gärna genom att öppna garderober, schakt och lucka till vind.</li>
<li className='list-disc'>Är du inte hemma, meddela sotaren/teknikern om det är ok att gå in och du löst det så att hen kan komma in.</li>
<li className='list-disc'>Invändigt: Det är viktigt att det inte finns föremål runt eldstaden som är i vägen för sotaren. Ta bort mattorna och flytta undan möblerna och ta bort andra ömtåliga saker.  Arbetet måste utföras i en bra arbetsmiljö. Normalt sett ska det inte komma in sot, men det finns alltid en risk att det kommer ut en del ändå.</li>
<li className='list-disc'>Ha ett kärl tillgängligt som sotaren kan tömma sotet i. Det ska vara ett rymligt metallkärl med lock och sedan någon form av skyffel till det.</li>
<li className='list-disc'>Har du saker du är rädd om som befinner sig i närheten kan du lägga över ex. med plast eller tidningar.</li>
<li className='list-disc'>Under vintern är det viktigt att du ser till att takstegen inte är täckt med snö och att vägen fram till markstegen är skottad och halkfri.</li>

            </ul>
                </div>
            </div>

      

      

  </div>
  <Footer/>
</div>
</div>
    );
  }
  
  export default TjansterPage;
  