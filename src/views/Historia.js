import React from 'react';
import Accordion from '../components/Accordion';
import Footer from '../components/footer/FooterComponent';

const SotningshistoriaPage = () => {
  return (
    <div className=' bg-sot w-full h-full text-white'>
      <div className="lg:px-28 md:px-28 px-7 mb-10">
        <div className="flex">
          <h1 className="lg:pt-30 md:pt-30 pt-10 text-white text-3xl pb-3 lg:text-7xl md:text-6xl border-sotOrange border-b-2">
            Sotningshistoria
          </h1>
        </div>
        <h2 className="lg:text-4xl md:text-4xl text-2xl justify-center mt-10 mb-6">Historisk tillbakablick</h2>
      
        <p className='mb-6'>
          Sotningsverksamhetens främsta syfte är och har varit att förebygga brand. 
          Skorstensfejaryrket är traditionstyngt och har långa anor – behovet uppstod redan under medeltiden, 
          då skorstenar började tas i bruk. Regelbunden sotning krävdes (och krävs) för att undvika en förödande skorstensbrand. 
          Sotarna skapade ett eget hemligt yrkesspråk, ”knoparmoj” (används sparsamt i dag), och använder många särpräglade redskap.
        </p>
        
        <div className='flex flex-col space-y-10'>
          <Accordion 
            title={"1500-talet"}
            content={"1528 anställdes de första skorstensfejarna av hovet, deras uppgift var i första hand att sota skorstenarna i de kungliga slotten. Snart följde att de större städerna i riket anställde egna skorstensfejare. Städerna byggdes på denna tid som ett gytter av tätt liggande trähus, där en brand var förödande. Flera stora stadsbränder förekom och nästan alltid var eldstäder orsaken. Till en början utfördes sotningen av bödelns hantlangare, men när slottssotare började anställas fick yrket en högre status."}
          />

          <Accordion 
            title={"1600-talet"}
            content={
              <div>
                <p>Sotningen började växa fram främst i städerna eftersom behovet där var större än på landsbygden. I städerna stod husen tätt och var ofta byggda i trä. Även de tidigaste rökkanalerna var gjorda av trä. Problemet med sot blev mer påtagligt i och med att spjäll infördes i skorstenen. Härav följde en kraftig sotbeläggning och ett minskat drag. För att eliminera riskerna för eld i sotet och återställa dragförhållandena var man tvungen att börja rengöra från sot. De första bestämmelserna om sotning torde ha kommit i början av 1600-talet. Gustav II Adolf föreskrev i en kunglig stadga från år 1619 om sotning. Grunden för sotningsväsendets organisation lades i författningar redan åren 1661 och 1675.</p>
                <p>Under senare delen av 1600-talet beskrevs i de lokala brandordningarna skorstensfejarens skyldighet att även kontrollera eldstäder och skorstenar samt närvara vid brandsyn och då avgöra eldstädernas beskaffenhet. Dessa arbetsuppgifter ställde allt större krav på skorstensfejarna som nu blev en egen yrkesgrupp. Skorstensfejarmästare tillsattes med ansvar för egna distrikt. Mästaren anställde små barn, som hade lätt att komma åt i trånga utrymmen.</p>
                <p>Dessa 7-9-åringar fick arbeta för kost och logi, de bodde i Sotarkammaren tillsammans med mästaren och övriga anställda. Hygienen var dålig och riskerna för fall stora, livslängden för sotare var mycket kort. Den sist anställde, nynasen, stod lägst på rangskalan och fick utföra alla obehagliga arbeten. Ur Överståthållarens reglemente: Sitt folk, i synnerhet Lärogosserne, bör Skorstensfejaren wäl hantera i föda och kläder, så att deras hälsa under den strängare årstiden wårdas och at de ömt bemötas med upmuntringar i stället för en otidlig stränghet tilhållas at lära arbetet och därmed fortfara.</p>
              </div>
            }
          />

          <Accordion 
            title={"1700-talet"}
            content={
              <div>
                <p>Den äldsta kända förordningen angående själva sotningsarbetets utförande samt ersättningen härför är 1702 års ”Förordning och taxa för Skårstens-Fäijare” som år 1733 ersattes av ”Ordning angående sotande i Stockholms stad” vilka lade grunden för sotningen som ett brandförebyggande arbete. Skorstensfejarmästaren tillsattes av en myndighet, politiekollegiet, vilket fick till följd att sotningsväsendet fick en halvofficiell ställning. Med anledning härav blev sotningsväsendet aldrig ett skråväsende även om en skråliknande organisation tillämpades.</p>
                <p>På fotografiet har skorstensfejarmästare A G Elanders sotare förevigats i porträttfotograf Hélène Edlunds foto­ateljé på Östermalmstorg 2 i Stockholm. Det exakta datumet är okänt, men eftersom sotarmästaren själv inte syns på bilden, togs den sannolikt något år efter 1886, då A G Elander dog.</p>
              </div>
            }
          />

          <Accordion 
            title={"1800-talet"}
            content={
              <div>
                <p>Politiekollegiet godkände fram till år 1855 i Stockholm, därefter överståthållarämbetet, vem som skulle vara ansvarig skorstensfejarmästare över ett område som rekommenderades av skorstensfejarämbetet. Det ansågs som viktigt att en myndighet hade en viss kontroll över verksamheten eftersom det var viktigt för brandsäkerheten.</p>
                <p>1874 års brandstadga för rikets städer innehöll ett fåtal regler om sotning. Det skulle för varje stad finnas en brandordning som skulle antas av fullmäktige och fastställas av länsstyrelsen. Det var tvingande för städerna att ha brandordningar då detta var ett led i att undvika omfattande bränder. Det skulle finnas ett erforderligt antal sotare som antogs och entledigades av polismyndigheten.</p>
                <p>1897 bildades Sveriges Skorstensfejaremästares Förening (nuvarande Sveriges Skorstensfejaremästares riksförbund) som bl.a. arbetar för teknisk utveckling och utbildning inom yrket. Statens brandskola startade 1915 utbildningar till gesäll och mästare. 1986 ändrades utbildningsformen: När en skorstensfejare anställts anmäldes han genast till Räddningsskolan i Rosersberg, norr om Stockholm, där han gick igenom femton veckors teoretisk utbildning. Denna gesällutbildning var obligatorisk och följdes sedan av frivilliga vidareutbildningar till tekniker och ingenjör. Under 2004 pågår förändringar av utbildningen, så att gesällutbildningen kommer att vara öppen för alla.</p>
              </div>
            }
          />

          <Accordion 
            title={"1900-talet"}
            content={
              <div>
                <p>1923 års brandstadga för rikets städer innehöll en detaljerad reglering om sotningsväsendet. En stad skulle indelas i sotningsdistrikt och indelningen skulle anges i brandordningen. För varje distrikt förordnades en anställd yrkesutbildad skorstensfejare. För att erhålla anställning som skorstensfejare krävdes fackskoleutbildning och viss tids erfarenhet i yrket. När en skorstensfejarbefattning var ledig skulle den kungöras i allmänna tidningar.</p>
                <p>1944 års brandstadga innebar att sotningen blev obligatorisk i städer, köpingar och motsvarande. Skorstensfejaren hade ställning som fri yrkesutövare med viss monopolrätt. Kommunerna fick själva besluta om sotningsväsendet skulle utföras i privat eller kommunal regi. Trots detta var det ovanligt med kommunalt anställda sotare.</p>
                <p>Den fria näringsrätten infördes 1968 och med detta bröts skorstensfejarmonopolet. Många orter behöll dock tidigare avtal då erfarenheterna av dessa var goda. Den senaste utvecklingen av sotningsväsendet skedde under början av 2000-talet då krav från samhället på bättre miljövård, arbetsmiljö och säkerhet påverkade verksamheten.</p>
              </div>
            }
          />

          <Accordion 
            title={"2000-talet"}
            content={
              <div>
                <p>Under början av 2000-talet påverkades sotningsväsendet av ökade krav från samhället på miljövård, arbetsmiljö och säkerhet. Tekniska framsteg inom området och nya regler och lagar har påverkat sotarnas arbetsmetoder och utbildning. Den senaste utvecklingen innefattar moderniseringar av utrustning och förbättringar inom säkerhetsåtgärder, samt en större fokus på energieffektivisering och miljöskydd.</p>
              </div>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SotningshistoriaPage;
