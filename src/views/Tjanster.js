import React from "react";
import Footer from "../components/footer/FooterComponent";
import { Link } from 'react-router-dom';  
import Button from '@mui/material/Button';

import Image from "mui-image";
  // import { TECollapse } from "tw-elements-react";
import { useState } from "react";
import Accordion from "../components/Accordion";

/*


*/

const TjansterPage= () => {

  const [activeElement, setActiveElement] = useState("");

 
    return (
      <div
      id="background-element"
      className=" lg:min-h-screen md:min-h-screen h-screen relative bg-cover bg-center md:bg-top md:bg-fixed lg:bg-fixed"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)`,
        backgroundPosition: 'right top', // Default position för större skärmar
        '@media (max-width: 768px)': {
          backgroundPosition: 'right bottom', // Position för mindre skärmar
        },
      }}
    >
      <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10  ">

      
            <div className="flex flex-col align-middle  lg:w-full md:w-full lg:mt-32   md:mt-10 lg:flex-row md:flex-row lg:flex-wrap md:flex-wrap ">
            <div className="text-white mx-4 lg:my-10 md:mt-10 mt-12 lg:mx-auto md:mx-auto flex items-center justify-center h-full">
    <h1 className=" text-4xl text-start pb-2 lg:pb-10 lg:mb-10 md:pb-0 lg:border-none md:border-none lg:text-7xl md:text-7xl border-sotOrange border-b-2">Tjänster</h1>
</div>

               
                <div className="  text-white lg:mx-0 md:mx-0   md:mt-20 w-full mt-20  bg-sot lg:px-32 md:px-16   ">
                
                <div id="parent " className="  lg:mt-10 md:mt-4">   
                
                <div className="     md:mt-4  ">
<div  className="bg-cover h-full  relative mx-4 lg:mx-0    lg:pb-0 md:pb-0 "
  >
    <div className="  lg:text-4xl md:text-2xl lg:text-start md:text-start  md:mt-4 mx-auto lg:px-0  lg:font-light md:font-light mt-4">
                    Vi erbjuder sotning, rengöring, besiktningar vid överlåtelse, nyinstallationer, status och andra tjänster inom området.
                    </div>
  
  <div>
  
  </div>
  <div className="relative mt-6 lg:mt-12   border border-white">
    <Accordion
      title={<div className="lg:text-xl ">Vad ska jag tänka på innan sotaren/brandskyddsteknikern kommer?</div>}
      content={
        <ul className="px-8 text-black bg-white">
          <li className='list-disc'>Stege ska vara framtagen och ev. rest.</li>
          <li className="list-disc">Det ska finnas godkända takskyddsanordningar så att sotaren/teknikern ska kunna gå upp på taket och arbeta säkert.</li>
          <li className='list-disc'>Du behöver inte vara hemma, men du måste ge sotaren åtkomst till din fastighet så sotaren/teknikern kan gå in och nå eldstaden inifrån. Vid brandskyddskontroll följer teknikern skorstenen i hela sin längd och behöver även åtkomst till vinden. Förbered gärna genom att öppna garderober, schakt och lucka till vind.</li>
          <li className='list-disc'>Är du inte hemma, meddela sotaren/teknikern om det är ok att gå in och du löst det så att hen kan komma in.</li>
          <li className='list-disc'>Invändigt: Det är viktigt att det inte finns föremål runt eldstaden som är i vägen för sotaren. Ta bort mattorna och flytta undan möblerna och ta bort andra ömtåliga saker. Arbetet måste utföras i en bra arbetsmiljö. Normalt sett ska det inte komma in sot, men det finns alltid en risk att det kommer ut en del ändå.</li>
          <li className='list-disc'>Ha ett kärl tillgängligt som sotaren kan tömma sotet i. Det ska vara ett rymligt metallkärl med lock och sedan någon form av skyffel till det.</li>
          <li className='list-disc'>Har du saker du är rädd om som befinner sig i närheten kan du lägga över ex. med plast eller tidningar.</li>
          <li className='list-disc'>Under vintern är det viktigt att du ser till att takstegen inte är täckt med snö och att vägen fram till markstegen är skottad och halkfri.</li>
        </ul>
}/>
  </div>
</div>
                
</div> 

                  <div>  
                
                  <div className="  lg:flex md:flex lg:bg-sot md:bg-sot lg:mt-2 justify-between gap-x-2     ">   



                  <div className="  m-4 lg:m-0 md:m-0 lg:end-0">         
                  <div class=" lg:max-w-lg md:max-w-lg max-w-sm    overflow-hidden shadow-lg bg-white  m-4 lg:mb-2 md:mt-4 md:mb-12 mx-auto">


<img class="w-full lg:hidden md:hidden "  src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class=" text-xl lg:text-3xl font-medium mb-2 text-gray-800">Sotning/rengöring</div>
    <p class="text-gray-700 text-base">
    Huvudanledningen till att rengöra eldstaden, skorstenen och imkanaler är att förhindra brand. Vid sotning tas brandfarlig beläggning bort för att minska risken för soteld. 
    </p>
  </div>
  <div class="px-6 pb-2">
  <Link to={"/tjanster/sotning/rengorning"}> 
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
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


<div className="  m-4 lg:m-0 md:m-0 lg:end-0">         
<div class=" lg:max-w-lg md:max-w-lg max-w-sm     overflow-hidden shadow-lg bg-white  m-4 lg:mb-2 md:mt-4 md:mb-12 mx-auto">
<img class="w-full lg:hidden md:hidden "  src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
  <div class=" text-xl lg:text-3xl font-medium mb-2 text-gray-800">Besiktningar</div>
    <p class="text-gray-700 text-base">
    Huvudanledningen till att rengöra eldstaden, skorstenen och imkanaler är att förhindra brand. Vid sotning tas brandfarlig beläggning bort för att minska risken för soteld. 
    </p>
  </div>
  <div class="px-6 pb-2">
  <Link to={"/tjanster/besiktningar"}> 
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
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


</div>

<div className=" align-middle lg:flex md:flex lg:bg-sot  md:bg-sot justify-between gap-x-2      ">   



<div className=" m-4 lg:m-0 md:m-0">          
<div class=" lg:max-w-lg md:max-w-lg max-w-sm     overflow-hidden shadow-lg bg-white  m-4 lg:mb-12 md:mt-4 md:mb-12 mx-auto">
  <img class="w-full lg:hidden md:hidden "  src={`${process.env.PUBLIC_URL}/chimneys.jpg`} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
  <div class=" text-xl lg:text-3xl font-medium mb-2 text-gray-800">Brandskyddskontroll</div>
    <p class="text-gray-700 text-base">
    Besiktningar innebär att en sotare eller brandskyddstekniker kontrollerar att skorstenen är i gott skick och att den fungerar som den ska. 
    </p>
  </div>
  <div class="px-6 pb-2">
  <Link to={"/tjanster/brandskyddskontroll"}> 
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
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



<div className=" m-4 lg:m-0 md:m-0">          
<div class=" lg:max-w-lg md:max-w-lg max-w-sm    overflow-hidden shadow-lg bg-white  m-4 lg:mb-12 md:mt-4 md:mb-12 mx-auto">
  <img class="w-full lg:hidden md:hidden "  src={`${process.env.PUBLIC_URL}/chimneys.jpg`} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
  <div class=" text-xl lg:text-3xl font-medium mb-2 text-gray-800">Övriga tjänster</div>
    <p class="text-gray-700 text-base">
    Besiktningar innebär att en sotare eller brandskyddstekniker kontrollerar att skorstenen är i gott skick och att den fungerar som den ska. 
    </p>
  </div>
  <div class="px-6 pb-2">
  <Link to={"/tjanster/ovriga-tjanster"}> 
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
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



</div> 
</div>

</div>
                      </div>
                        </div>
                        
                        </div>   
            <div className='w-full'>
                <Footer />
            </div>
        
       
    </div>
 
    );
  }
  
  export default TjansterPage;
