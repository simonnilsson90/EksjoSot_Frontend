import React from "react";
import './aboutUs.css';
import LayoutComponent from '../components/layout';
import Accordion from "../components/Accordion";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BrandskyddskontrollPage = () => { 
  return (
    <div
      id="background-element"
      className=" bg-gray-700 lg:min-h-screen md:min-h-screen h-screen relative bg-cover bg-center md:bg-top md:bg-fixed lg:bg-fixed"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)`,
        backgroundPosition: 'right top', // Default position för större skärmar
        '@media (max-width: 768px)': {
          backgroundPosition: 'right bottom', // Position för mindre skärmar
        },
      }}
    >
      <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10 ">

        <LayoutComponent
          title={"Brandskyddskontroll"}
          pretext={"Brandskyddskontrollen säkerställer att din skorsten och eldstad uppfyller alla säkerhetskrav och fungerar korrekt, vilket förebygger brandolyckor i ditt hem."}
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
                  <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Lagstiftning</h2>
                  <p>Den 1 januari 2004 ersattes den tidigare ”sotningslagen” med den nya lagen (2003:778) om skydd mot olyckor. Liksom tidigare lagstiftning (räddningstjänstlagen 1986:1102) anges det att kommunen i brandförebyggande syfte ansvarar för att sotning och brandskyddskontroll utförs.</p>
                </div>
              ) ,
              bild: <img src={`${process.env.PUBLIC_URL}/chimney-day.jpg`} className='object-cover' />
            },
            {
              text: (
                <div>
                  <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Vem får utföra brandskyddskontroll?</h2>
                  <p>Brandskyddskontrollen får endast utföras av den som är utsedd av kommunen och som har behörighet att utföra brandskyddskontroll.</p>
                  <div className="lg:mr-4 md:mr-4 mt-2">
                    <Accordion
                      title={"Läs mer"}
                      content={"Syftet med brandskyddskontrollen är att i ett tidigt skede upptäcka fel och brister hos anläggningen som kan innebära risker för brand. Om det vid kontrollen upptäcks brister eller felaktigheter som innebär risk för annan olyckshändelse än brand ska den som utför kontrollen även påtala detta. Det är bara yrkesutbildade sotare med särskild vidareutbildning som får utföra brandskyddskontrollen."}
                    />
                  </div>
                </div>
              ),
              bild: <img src={`${process.env.PUBLIC_URL}/fireplace.jpg`} className='object-cover' />
            },
            {
              text: (
                <div>
                  <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Anläggning</h2>
                 <p>Anläggningen ska kontrolleras mot bakgrund av hur följande faktorer påverkar brandskyddet:</p>
                  <ul className="list-disc ml-6">
                    <li>Sotbildning och beläggningar.</li>
                    <li>Skador eller förändringar av det tekniska utförandet.</li>
                    <li>Temperaturförhållanden.</li>
                    <li>Tryckförhållanden och täthet.</li>
                    <li>Drift och skötsel.</li>
                  </ul>
                </div>
              ),
              bild: <img src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`} className='object-cover' />
            },
            {
              text: (
                <div>
                  <h2 className=' text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Taksäkerhet</h2>
                  <p>Brandskyddskontrollen innefattar hela värmeanläggningen samt taket och takskydds-anordningarna. 
                  Den som utför kontrollen måste därför ha tillträde till alla de delar av huset som skorstenen passerar. Läs mer om taksäkerhet här ▶️</p>
                </div>
              ),
              bild: <img src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`} className='object-cover' />
            },
          ]}
        />
      </div>
    </div>
  );
}

export default BrandskyddskontrollPage;
