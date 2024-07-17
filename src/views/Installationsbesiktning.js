import React from 'react';
import Accordion from '../components/Accordion';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/FooterComponent';

const InstallationsbesiktningPage = () => {
  return (
    <div className=' bg-sot w-full h-full text-white'>

   
    <div className=" lg:px-28 md:px-28 px-7 mb-10   ">
    <div className="  flex">
      <h1 className=" lg:pt-30 md:pt-30 pt-10 text-white text-3xl pb-3 lg:text-7xl md:text-6xl border-sotOrange border-b-2">
        Installationsbesiktning
      </h1>
    </div>
<h2 className=" lg:text-4xl md:text-4xl text-2xl justify-center mt-10 mb-6">Innan du beställer besiktning</h2>
<p className=' mb-6'> Se till att du har all dokumentation klar innan du beställer besiktningen.
     Om något saknas eller är ofullständigt kommer besiktningen inte att godkännas och du måste komplettera eller åtgärda brister innan du får det godkännade du behöver. </p>
  
  <div className=' flex flex-col space-y-10'>  
  
     <Accordion 
     title={"1. Startbesked"}
     content={"Innan en anmälningspliktig installation eller ändring påbörjas, måste kommunen ha utfärdat ett startbesked. Ansökan om startbesked skickas in till till byggnadsnämnden eller motsvarande i din kommun. Ansökan ska normalt innehålla följande handlingar: Ansökningsblankett, enkel situationsplan, plan- och fasadritningar, information och eldstad och rökkanal. För närmare information om de handlingar som krävs, kontakta byggnadskontoret i din kommun."}
      />
      
       <Accordion 
     title={"2. Kontrollplan"}
     content={<div className=' flex flex-col space-y-2 pb-2'>
        <p>Kontrollplanen beskriver vem som är byggherre och vem som är kvalitetsansvarig för installationen.</p>
        <Link to={"https://www.sotarna.com/wp-content/uploads/Exempel-pa-kontrollplan.pdf"}>   Exempel på kontrollplan hittar du här. →</Link>
     <Link to={"https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/"}> Länk till boverkets sidor om kontrollplan →</Link>
     <p>Kontrollplanen måste finnas tillgänglig vid installationsbesiktningen.</p>
     </div>}
      />
         <Accordion 
         title={"3. Installationsanvisning för eldstad"} 
         content={<div>
<p className='  mb-2'>Ett godkännande av installations av eldstad innefattar att kontrollanten jämför installationsanvisningarna för eldstaden med hur installationen har utförts.</p>
<p>Installationsanvisningen ska finnas tillgänglig vid installationsbesiktningen.</p>
         </div>}>
         </Accordion>

         <Accordion 
         title={"4. Installationsanvisning för skorsten"} 
         content={<div>
<p className=' '>På samma sätt som att installationen för eldstaden ska följa installationsanvisningarna, måste också skorstenen monteras i enlighet med tillverkarens anvisningar. Detta gäller naturligtvis inte om man använder en rökkanal i en befintlig tegelskorsten eller om man återanvänder en rökkanal där det tidigare funnits en eldstad. 
    Dock måste en befintlig rökkanal uppfylla boverket krav på täthet vilket kontrolleras när rökkanalen läckageprovas vid besiktningen.</p>
<p>Om skorstenen är ny, måste monteringsanvisningar finnas tillgängliga vid besiktningen.</p>
         </div>}>
         </Accordion>

         <Accordion 
         title={"5. Prestandadeklaration"} 
         content={<div>
<p className=' '>Boverket införde i juli 2018 skärpta miljökrav på utsläpp och verkningsgrad för fastbränslepannor och braskaminer. Tills vidare är kakelugnar, köksspisar och öppna spisar undantagna från detta krav. </p>
<p>De flesta gamla vedspisar och kaminer kommer att få svårt att klara de nya kraven. Merparten av dem är inte byggda för att ha den verkningsgraden eller låga utsläppsnivå. Dock gäller de nya reglerna enbart nyinstallation av vedspisar och kaminer.</p>
        <p>Sedan länge måste alla kaminer, braskaminer och insatser som installeras medföljas av ett produktcertifikat. Det som där är intressant är CO-utsläppen, som ska vara under 0,12% och verkningsgraden ska vara över 65%. Det är bara sådana eldstäder som får installeras. Detta ska byggnadskontoren i kommunerna ha koll på och inte lämna startbesked om de inte kollat upp detta. Undantag gäller fortfarande för öppna spisar (eftersom de är en byggnadsdel) och ”tunga rumsvärmare”, dvs kakelugnar och murspisar (av kulturhistoriska skäl). Begreppet ”lokaleldstäder” döps också om till ”rumsvärmare”.</p>
        <p>Det är inte förbjudet att sälja ”rumsvärmare” som inte uppfyller kraven, men det är förbjudet att använda dom. En fastighetsägare kan själv låta testa en gammal kamin som han vill installera, men det ska göras enligt SS-EN 303-5:2012 och är så pass krångligt att det inte är sannolikt att någon kommer att genomföra den proceduren.</p>
        Sedan många år tillbaka uppfyller samtliga eldstäder som säljs inom fackhandeln boverkets miljökrav och levereras med prestandadeklaration, men det händer att det fortfarande säljs otillåtna eldstäder av privatpersoner och på loppmarknader. Se upp om du tänker göra ett sådant köp, då du inte kommer att få tillstånd att använda kaminen.
         </div>}>
         </Accordion>

         <Accordion 
  title={"6. Taksäkerhet"} 
  content={
    <div>
      <p>Vid besiktningen kontrolleras också de uppstigningsanordningar som enligt Boverkets föreskrifter ska finnas på taket fram till skorstenen. Godkänd markstege, glidskydd och takstege ska finnas på plats och vara monterade enligt tillverkarens föreskrifter. Observera att glidskydd inte får vara monterat i hängrännan och att läktsteg inte får monteras i sidled.</p>
      <p>Om inte korrekt taksäkerhet finns på plats och korrekt monterat kommer inte installationsbesiktningen att godkännas.</p>
      <p>Infoblad om taksäkerhet &rarr;</p>
      <p>Se till att taksäkerhet finns och att den är korrekt monterad.</p>
    </div>
  }
/>
<Accordion 
  title={"7. Protokoll till byggnadsnämnden"} 
  content={
    <div>
      <p>Efter besiktningen är det fastighetsägarens ansvar att skicka in det godkända protokollet till byggnadsnämnden för att få tillbaka ett slutbesked som är det dokument som ger dig tillstånd att börja elda i din kamin. För att snabba upp processen kan vi hjälpa dig med att skicka en kopia till byggnadsnämnden samtidigt som vi skickar protokollet till dig, men du måste då beställa det särskilt från oss, då vi inte automatiskt skickar kopia till kommunen. Protokollet blir din egendom, men vi lagrar uppgifter om den utförda besiktningen i vår databas, för att kunna hjälpa dig framöver med protokollskopia eller andra uppgifter du kan tänkas undra över senare.</p>
      <p>Bestäm om du vill ha hjälp med att skicka in protokollet.</p>
      <p>Är det något som är oklart eller undrar du över något är du välkommen att kontakta vår kundtjänst på mail eller telefon. Ofta kan också byggnadskontoret i din kommun hjälpa till med information om vad som gäller i kommunen eftersom reglerna ibland skiljer sig mellan olika kommuner.</p>
      <p>Har du koll på allt ovanstående? Grattis då är du klar för att beställa installationsbesiktningen och därefter är det inte långt kvar innan du kan börja använda din nya eldstad.</p>
    </div>
  }
/>

</div>
</div>

<Footer />
  </div>

 
  );
}

export default InstallationsbesiktningPage;