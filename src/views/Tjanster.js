import React from "react";
import Footer from "../components/footer/FooterComponent";
import { Link } from 'react-router-dom';  
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import Image from "mui-image";
  // import { TECollapse } from "tw-elements-react";
import { useState } from "react";
import Accordion from "../components/Accordion";

/*


*/

const TjansterPage= () => {

  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
 



  useEffect(() => {
    const updateBackground = () => {
        const element = document.getElementById('background-element');
        if (window.innerWidth >= 768) { // 1024px motsvarar 'lg' i Tailwind CSS
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
      <div className="lg:bg-gradient-to-b lg:from-black/70 lg:via-transparent lg:to-transparent lg:min-h-screen
        md:bg-gradient-to-b md:from-black/70 md:via-transparent md:to-transparent md:min-h-screen pt-10 ">

      <div>
            <div className="flex flex-col gap-4 mb-10 pb-10 lg:w-full md:w-full lg:mb-16 md:mb-16 lg:mt-10 md:mt-10 lg:flex-row md:flex-row lg:flex-wrap md:flex-wrap">
                <div className="text-white mx-4 lg:mt-10 md:mt-10 lg:w-5/6 md:w-5/6 lg:mx-auto md:mx-auto">
                    <h1 className="text-4xl text-start pb-2 lg:pb-0 md:pb-0 lg:border-none md:border-none lg:text-7xl md:text-7xl border-sotOrange border-b-2">Tjänster</h1>
                    <div className="hidden lg:block md:block mt-4 mx-2 lg:text-2xl md:text-2xl lg:text-start md:text-start lg:mt-32 md:mt-40 lg:ml-80 md:ml-56 lg:pl-96">
                    Vi erbjuder sotning, rengöring, besiktningar vid överlåtelse, nyinstallationer, status och andra tjänster inom området.
                    </div>
                </div>
                
                <div className="section bg-sot text-white lg:mx-0 md:mx-0  lg:mt-48 md:mt-48  ">

                  <div className=" align-middle justify-center lg:flex md:flex">  
                 



  

<div class="max-w-sm  overflow-hidden shadow-lg bg-white m-4">
<img class="w-full "  src={`${process.env.PUBLIC_URL}/chimneys-small.jpg`} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-gray-800">Sotning/rengöring</div>
    <p class="text-gray-700 text-base">
    Huvudanledningen till att rengöra eldstaden, skorstenen och imkanaler är att förhindra brand. Vid sotning tas brandfarlig beläggning bort för att minska risken för soteld. 
    </p>
  </div>
  <div class="px-6 pb-2">
  <Link to={"/tjanster/sotning/rengorning"}> 
                <Button
                  variant="contained"
                  sx={{
                    
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                    marginBottom: "2px",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0rem"    
                  }}
                >
                 Läs mer →
                </Button>
                </Link>
  </div>
</div>

<div class="max-w-sm  overflow-hidden shadow-lg bg-white m-4">
<img class="w-full "  src={`${process.env.PUBLIC_URL}/chimneys-small.jpg`} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-gray-800">Sotning/rengöring</div>
    <p class="text-gray-700 text-base">
    Besiktningar innebär att en sotare eller brandskyddstekniker kontrollerar att skorstenen är i gott skick och att den fungerar som den ska. 
    </p>
  </div>
  <div class="px-6 pb-6">
  <Link to={"/tjanster/sotning/rengorning"}> 
                <Button
                  variant="contained"
                  sx={{
                    
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                   marginTop: "16px",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0rem"    
                  }}
                >
                 Läs mer →
                </Button>
                </Link>
  </div>
</div>








<div class="max-w-sm  overflow-hidden shadow-lg bg-white m-4">
<img class="w-full "  src={`${process.env.PUBLIC_URL}/chimneys-small.jpg`} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-gray-800">Sotning/rengöring</div>
    <p class="text-gray-700 text-base">
    Huvudanledningen till att rengöra eldstaden, skorstenen och imkanaler är att förhindra brand. Vid sotning tas brandfarlig beläggning bort för att minska risken för soteld. 
    </p>
  </div>
  <div class="px-6 pb-2">
  <Link to={"/tjanster/sotning/rengorning"}> 
                <Button
                  variant="contained"
                  sx={{
                    
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                    marginBottom: "2px",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0rem"    
                  }}
                >
                 Läs mer →
                </Button>
                </Link>
  </div>
</div>


</div>

<div className=" lg:flex md:flex lg:mx-24 md:mx-20 ">



<div class="max-w-sm overflow-hidden shadow-lg bg-white m-4">
  <img class="w-full "  src={`${process.env.PUBLIC_URL}/chimneys-small.jpg`} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-gray-800">Övriga tjänster</div>
    <p class="text-gray-700 text-base">
    Besiktningar innebär att en sotare eller brandskyddstekniker kontrollerar att skorstenen är i gott skick och att den fungerar som den ska. 
    </p>
  </div>
  <div class="px-6 pb-2">
  <Link to={"/tjanster/ovriga-tjanster"}> 
                <Button
                  variant="contained"
                  sx={{
                    
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                    marginBottom: "2px",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0rem"    
                  }}
                >
                 Läs mer →
                </Button>
                </Link>
  </div>
</div>

<div className=" bg-sotSecondary"> 
<Accordion 
                         
                         title={<div className=" bg-sotSecondary lg:text-2xl ">Vad ska jag tänka på innan sotaren/brandskyddsteknikern kommer? </div>}
                         content={ <ul className=" px-8 text-black">
                           <li className='list-disc '>Stege ska vara framtagen och ev. rest.</li>
                           <li className="list-disc">Det ska finnas godkända takskyddsanordningar så att sotaren/teknikern ska kunna gå upp på taket och arbeta säkert.</li>
                           <li className='list-disc'>Du behöver inte vara hemma, men du måste ge sotaren åtkomst till din fastighet så sotaren/teknikern kan gå in och nå eldstaden inifrån. Vid brandskyddskontroll följer teknikern skorstenen  i hela sin längd och behöver även åtkomst till vinden.  Förbered gärna genom att öppna garderober, schakt och lucka till vind.</li>
                           <li className='list-disc'>Är du inte hemma, meddela sotaren/teknikern om det är ok att gå in och du löst det så att hen kan komma in.</li>
                           <li className='list-disc'>Invändigt: Det är viktigt att det inte finns föremål runt eldstaden som är i vägen för sotaren. Ta bort mattorna och flytta undan möblerna och ta bort andra ömtåliga saker.  Arbetet måste utföras i en bra arbetsmiljö. Normalt sett ska det inte komma in sot, men det finns alltid en risk att det kommer ut en del ändå.</li>
                           <li className='list-disc'>Ha ett kärl tillgängligt som sotaren kan tömma sotet i. Det ska vara ett rymligt metallkärl med lock och sedan någon form av skyffel till det.</li>
                           <li className='list-disc'>Har du saker du är rädd om som befinner sig i närheten kan du lägga över ex. med plast eller tidningar.</li>
                           <li className='list-disc'>Under vintern är det viktigt att du ser till att takstegen inte är täckt med snö och att vägen fram till markstegen är skottad och halkfri.</li>
                           
                                       </ul>}
                       />
                       </div>
</div>


                  

            </div>
                        </div>
                    
               
           
            <div className='w-full'>
                <Footer />
            </div>
        </div>
       
    </div>
    </div>
    );
  }
  
  export default TjansterPage;
  
  