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
                <div className="section lg:bg-sot md:bg-sot bg-white text-black lg:mx-0 md:mx-0 mx-4 lg:mt-48 md:mt-48 lg:flex md:flex">
                    <div className='mt-4 mx-2 text-2xl lg:text-start md:text-start lg:mt-36 md:mt-36 lg:ml-40 md:ml-40 lg:hidden md:hidden'>   Vi erbjuder sotning, rengöring, besiktningar vid överlåtelse, nyinstallationer, status och andra tjänster inom området. </div>
                    <div className="lg:bg-white md:bg-white lg:m-4 md:m-4 ">
                
                      <div className=' mb-8 lg:flex lg:flex-row-reverse'>
                            <div className='flex justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-full'>                             
      <Image  className=""
 src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>
                            <p className='mb-2 mt-2 lg:p-4 md:p-4 lg:w-1/2 md:w-full mx-2'> 
                            <h2 className="mt-2 lg:mt-0 text-2xl">Sotning/rengöring</h2>
              <p>Huvudanledningen till att rengöra eldstaden, skorstenen och imkanaler är att förhindra brand. Vid sotning tas brandfarlig beläggning bort för att minska risken för soteld. Rengöring av eldstäder och rökkanaler innebär att alla ytor som kommit i kontakt med rökgasen rengörs från lösa brännbara beläggningar. Rengöringen görs vanligen med en viska, av stål eller liknande material. Redskapet förs genom rökkanaler och skrapar bort beläggningen.</p>
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
                 Läs mer →
                </Button>
                </Link></p>
                        </div>
                        <div className=' mb-8 lg:flex lg:flex-row-reverse'>
                            <div className='flex justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-full'>                           
      <Image  className=""
 src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>
                            <p className='mb-2 mt-2 lg:p-4 md:p-4 lg:w-1/2 md:w-full mx-2'> 
                            <h2 className="mt-2 lg:mt-0 text-2xl">Besiktningar vid överlåtelse, nyinstallationer, status</h2>
                            <p>khasdkfgaskdhfkjasdf ndsflk j njf njsn jnjksnfdjksdn njksnfdjn jksnf jksndf j</p>
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
                 Läs mer →
                </Button>
                </Link></p>
                        </div>

                        <div className=' mb-8 lg:flex lg:flex-row-reverse'>
                            <div className='flex justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-full'>                             
      <Image  className=""
 src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>
                            <p className='mb-2 mt-2 lg:p-4 md:p-4 lg:w-1/2 md:w-full mx-2'> 
                            <h2 className="mt-2 lg:mt-0 text-2xl">Sotning och brandskyddskontroller</h2>
              <p>lkasdfklsdflkr äasdlfsaldöfrt för att mintakt med bsdkfjsdlflsdfen viska, av stål eller liknande material. Redskapet förs genom rökkanaler och skrapar bort beläggningen.</p>
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
                 Läs mer →
                </Button>
                </Link></p>
                        </div>

                        <div className=' mb-8 lg:flex lg:flex-row-reverse'>
                            <div className='flex justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-full'>                             
      <Image  className=""
 src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>
                            <p className='mb-2 mt-2 lg:p-4 md:p-4 lg:w-1/2 md:w-full mx-2'> 
                            <h2 className="mt-2 lg:mt-0 text-2xl">Sotning och brandskyddskontroller</h2>
              <p>lkasdfklsdflkr äasdlfsaldöfrt för att mintakt med bsdkfjsdlflsdfen viska, av stål eller liknande material. Redskapet förs genom rökkanaler och skrapar bort beläggningen.</p>
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
                 Läs mer →
                </Button>
                </Link></p>
                        </div>

                        <div className=' mb-8 lg:flex lg:flex-row-reverse'>
                            <div className='flex justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-full'>                             
      <Image  className=""
 src={`${process.env.PUBLIC_URL}/feet.jpg`}
  style={{
    width: '100%', // Sätt bredden till 100% av föräldraelementet
    height: '10%', // Definiera en fast höjd
    objectFit: 'cover', // Klipp bilden för att täcka området
    objectPosition: 'top' // Centrera bilden
  }}
/>
</div>
                            <p className='mb-2 mt-2 lg:p-4 md:p-4 lg:w-1/2 md:w-full mx-2'> 
                            <h2 className="mt-2 lg:mt-0 text-2xl">Övriga tjänster inom området</h2>
              <p>lkasdfklsdflkr äasdlfsaldöfrt för att mintakt med bsdkfjsdlflsdfen viska, av stål eller liknande material. Redskapet förs genom rökkanaler och skrapar bort beläggningen.</p>
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
                    textDecoration: "none"    
                  }}
                >
                 Läs mer →
                </Button>
                </Link></p>
                        </div>

                     
                        </div>
                        <div> 
                        </div>
                        
                         <div className="  mt-4 mr-4 container mx-auto ">
                         <Accordion
        title="Vad ska jag tänka på innan sotaren/brandskyddsteknikern kommer?"
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
                    
               
           
            <div className='w-full'>
                <Footer />
            </div>
        </div>
       
    </div>
    </div>
    );
  }
  
  export default TjansterPage;
  
  /*

          <div className="mt-4 mx-2">
                 
                        <div id="accordionExample ">
        <div className=" border   dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0 " id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              }  flex items-center  px-2   text-left  text-black text-xl transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             Vad ska jag tänka på innan sotaren/brandskyddsteknikern kommer? 
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]  dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0  !shadow-none"
          >
            <div className="px-5 py-4">
            <ul className=" px-8 text-black">
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
          </TECollapse>
        </div>
      </div>
     
      </div>



       <Accordion 
  sx={{
    marginTop: "1rem",
    textTransform: "none",      
    marginBottom: "2px",
    border: "0px",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    borderRadius: 0, // Försök att ta bort rundade hörn
    '& .MuiAccordion-root': {
      borderRadius: 0, // Försöker ta bort rundade hörn på rotnivå
    },
    '& .MuiPaper-rounded': {
      borderRadius: 0, // Specifik för MUI Paper-komponenten som kan användas inuti Accordion
    },
    '& .MuiAccordionSummary-root': {
      borderRadius: 0, // Försöker ta bort rundade hörn på AccordionSummary
    },
    '& .MuiAccordionDetails-root': {
      borderRadius: 0, // Försöker ta bort rundade hörn på AccordionDetails
    }
  }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "black",}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography   sx={{ color: "black",}}>Vad ska jag tänka på innan sotaren/brandskyddsteknikern kommer?  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className=" px-8">
<li className='list-disc '>Stege ska vara framtagen och ev. rest.</li>
<li className="list-disc">Det ska finnas godkända takskyddsanordningar så att sotaren/teknikern ska kunna gå upp på taket och arbeta säkert.</li>
<li className='list-disc'>Du behöver inte vara hemma, men du måste ge sotaren åtkomst till din fastighet så sotaren/teknikern kan gå in och nå eldstaden inifrån. Vid brandskyddskontroll följer teknikern skorstenen  i hela sin längd och behöver även åtkomst till vinden.  Förbered gärna genom att öppna garderober, schakt och lucka till vind.</li>
<li className='list-disc'>Är du inte hemma, meddela sotaren/teknikern om det är ok att gå in och du löst det så att hen kan komma in.</li>
<li className='list-disc'>Invändigt: Det är viktigt att det inte finns föremål runt eldstaden som är i vägen för sotaren. Ta bort mattorna och flytta undan möblerna och ta bort andra ömtåliga saker.  Arbetet måste utföras i en bra arbetsmiljö. Normalt sett ska det inte komma in sot, men det finns alltid en risk att det kommer ut en del ändå.</li>
<li className='list-disc'>Ha ett kärl tillgängligt som sotaren kan tömma sotet i. Det ska vara ett rymligt metallkärl med lock och sedan någon form av skyffel till det.</li>
<li className='list-disc'>Har du saker du är rädd om som befinner sig i närheten kan du lägga över ex. med plast eller tidningar.</li>
<li className='list-disc'>Under vintern är det viktigt att du ser till att takstegen inte är täckt med snö och att vägen fram till markstegen är skottad och halkfri.</li>

            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>




    <div id="background-element" className="min-h-screen bg-sot">
      <div className="lg:bg-gradient-to-b lg:from-black/70 lg:via-transparent lg:to-transparent lg:min-h-screen pt-10">

         
  
  
      <div className="  p-4     text-white  lg:px-0  space-y-2 lg:mt-28 lg:mx-60  "  >
      <h1 className="lg:text-5xl text-4xl border-sotOrange lg:border-none lg:border-b-0  border-b-2 text-start ">Tjänster</h1>
      <p className=" lg:text-2xl  text-start">Vi gör inte mer än absolut nödvändigt, men vi gör det bra</p>
  </div>
 
  <div className="content-grid lg:mt-12 lg:mx-56 mx-auto  ">
    
      <div className="  section bg-sot text-gray-100 ">



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
              <p>Huvudanledningen till att rengöra eldstaden, skorstenen och imkanaler är att förhindra brand. Vid sotning tas brandfarlig beläggning bort för att minska risken för soteld. Rengöring av eldstäder och rökkanaler innebär att alla ytor som kommit i kontakt med rökgasen rengörs från lösa brännbara beläggningar. Rengöringen görs vanligen med en viska, av stål eller liknande material. Redskapet förs genom rökkanaler och skrapar bort beläggningen.</p>
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
                 Läs mer →
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
                    Läs mer →
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
                    Läs mer →
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
                   Läs mer →
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
  */