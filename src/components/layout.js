
import Footer from "../components/footer/FooterComponent";
import '../views/aboutUs.css';

const LayoutComponent = ({ title, pretext, text1, text2, text3, text4, text5, text6,  bild1, bild2, bild3, bild4, bild5, bild6 }) => {
   

    return (

        <div>


                <div className="flex flex-col lg:flex-row lg:flex-wrap  gap-4 mb-10 pb-10 lg:mx-48 lg:mb-16 lg:mt-10 ">
                    <div className="text-white mx-9 lg:mt-20   ">
                        <h1 className="lg:text-5xl text-4xl border-sotOrange lg:border-none lg:border-b-0 border-b-2 text-start pb-2 ">{title}</h1>
                    </div>
                    <div className="section bg-sot text-gray-100 lg:mx-10 mx-4 lg:mt-6">
      <div className='mt-2'>  
      {pretext}
        </div>                  
   
   
    <div className='md:flex  md:mb-4 md:mt-2'>
        
        <p className='mb-2  md:w-1/2 lg:w-full md:mr-3'>{text1}</p>
        <div className='lg:hidden bg-sot flex justify-center mx-auto image-container w-full md:h-1/3  md:w-1/2 md:mt-4'>  
   
   {bild1}    
   </div>
        
    </div>


    <div className='md:flex '>
    <p className='mb-2 mt-2 md:w-1/2 lg:w-full md:mr-3'>{text2}</p>
        <div className='lg:hidden bg-white flex justify-center mx-auto image-container w-full md:h-1/3  md:w-1/2'>  
   {bild2 }  
   </div>
        
    </div>

    <div className='md:flex  md:mb-4 mt-4'>
        
        <p className='mb-2 mt-2 md:w-1/2 lg:w-full md:mr-3'>{text3}</p>
        <div className='lg:hidden bg-white flex justify-center mx-auto image-container w-full  md:h-1/3 md:w-1/2'>
   
  {bild3  } 
        </div>
    </div>

    <div className='md:flex  md:mb-4 mt-4'>
        
        <p className='mb-2 mt-2 md:w-1/2 lg:w-full md:mr-3'>{text4}</p>
        <div className='lg:hidden bg-white flex justify-center mx-auto image-container w-full  md:h-1/3 md:w-1/2'>
   
  {bild4  } 
        </div>
    </div>

    <div className='md:flex  md:mb-4 mt-4'>
        
        <p className='mb-2 mt-2 md:w-1/2 lg:w-full md:mr-3'>{text5}</p>
        <div className='lg:hidden bg-white flex justify-center mx-auto image-container w-full  md:h-1/3 md:w-1/2'>
   
  {bild5  } 
        </div>
    </div>

    <div className='md:flex  md:mb-4 mt-4'>
        
        <p className='mb-2 mt-2 md:w-1/2 lg:w-full md:mr-3'>{text6}</p>
        <div className='lg:hidden bg-white flex justify-center mx-auto image-container w-full  md:h-1/3 md:w-1/2'>
   
  {bild6  } 
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

export default LayoutComponent;


/*

 { name: 'Alla tjänster', link: '/tjanster' },
      { name: 'Sotning', link: '/tjanster/sotning/rengorning' },
      { name: 'Besiktningar', link: '/tjanster/besiktningar' },
      { name: 'Övriga tjänster', link: '/tjanster/ovrigatjanster' },

*/