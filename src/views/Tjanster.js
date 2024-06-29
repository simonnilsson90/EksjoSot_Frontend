import React from "react";
import Footer from "../components/footer/FooterComponent";
import { Link } from 'react-router-dom';  
import Button from '@mui/material/Button';
/*


*/

const TjansterPage= () => {
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }} >
      <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen  pt-10"> 
  
      <div className="     text-white p-6 mx-6 space-y-2 bg-sot "  >
      <h1 className="lg:text-4xl text-4xl border-sotOrange  border-b-2 pb-2 ">Tjänster</h1>
      <p className=" lg:text-2xl  text-center">Vi gör inte mer än absolut nödvändigt, men vi gör det bra</p>
  </div>

  <div className=" mt-4 ">
    
      <div className="vision section bg-sot text-gray-100 m-6 lg:w-1/2 ">
          <div>
              <h2>Sotning/rengöring</h2>
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
      </div>

      <div className="what-we-do section bg-sot text-gray-100 m-6 lg:w-1/2">
          <div>
              <h2>Besiktningar vid överlåtelse, nyinstallationer, status</h2>
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

      <div className="how-we-stand-out section bg-sot text-gray-100 m-6 lg:w-1/2 lg:end-0 lg:absolute lg:right-0">
          <div>
              <h2>Sotning och brandskyddskontroller</h2>
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

      <div className="our-culture section bg-sot text-gray-100 m-6 lg:w-1/2">
          <div>
              <h2>Övriga tjänster inom området</h2>
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
      <div className="what-we-do section bg-sot text-gray-100 m-6 lg:w-1/2">
                <div>
<h2 className=' text-xl mb-2'>Vad ska jag tänka på innan sotaren/brandskyddsteknikern kommer?</h2>
<ul>
<li className='list-disc'>Stege ska vara framtagen och ev. rest.</li>
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
  