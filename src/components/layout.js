
import Footer from "../components/footer/FooterComponent";
import '../views/aboutUs.css';

const LayoutComponent = ({ title, pretext, text1, text2, text3, text4, text5, text6,  bild1, bild2, bild3, bild4, bild5, bild6 }) => {
   

    return (

        <div>


                <div className="flex flex-col lg:flex-row lg:flex-wrap  gap-4 mb-10 pb-10 lg:mx-48 lg:mb-16 lg:mt-10 ">
                    <div className="text-white mx-4 lg:mx-9 lg:mt-20   ">
                        <h1 className="lg:text-5xl text-4xl border-sotOrange lg:border-none lg:border-b-0 border-b-2 text-start pb-2 ">{title}</h1>
                    </div>
                    <div className="section lg:bg-sot bg-white text-black lg:mx-10 mx-4 lg:mt-6">

                        <div className=" lg:bg-white lg:m-4 lg:p-2">

                        <div className='mt-4 mx-2'>   {pretext} </div>  
                       
                        <div className='md:flex md:flex-row-reverse  mb-4 '>
                    <div className='lg:hidden  flex justify-center image-container w-full md:h-1/3  md:w-1/2 '>  {bild1}  </div>   
                     
        <p className='mb-2 mt-2  md:w-1/2 lg:w-full md:mr-3 mx-2'>{text1}</p>  
    </div>

    <div className='md:flex md:flex-row-reverse  mb-4 '>
                    <div className='lg:hidden  flex justify-center image-container w-full md:h-1/3  md:w-1/2 '>  {bild2}  </div>   
                      
        <p className='mb-2 mt-2  md:w-1/2 lg:w-full md:mr-3 mx-2'>{text2}</p>  
    </div>

    <div className='md:flex md:flex-row-reverse mb-4 '>
                    <div className='lg:hidden  flex justify-center image-container w-full md:h-1/3  md:w-1/2 '>  {bild3}  </div>   
                      
        <p className='mb-2 mt-2  md:w-1/2 lg:w-full md:mr-3 mx-2'>{text3}</p>  
    </div>

   

    <div className='md:flex md:flex-row-reverse mb-4 '>
                    <div className='lg:hidden  flex justify-center image-container w-full md:h-1/3  md:w-1/2 '>  {bild4}  </div>   
                      
        <p className='mb-2 mt-2  md:w-1/2 lg:w-full md:mr-3 mx-2'>{text4}</p>  
    </div>

    <div className='md:flex md:flex-row-reverse  mb-4 '>
                    <div className='lg:hidden  flex justify-center image-container w-full md:h-1/3  md:w-1/2 '>  {bild5}  </div>   
                      
        <p className='mb-2 mt-2  md:w-1/2 lg:w-full md:mr-3 mx-2'>{text5}</p>  
    </div>

    <div className='md:flex md:flex-row-reverse  mb-4 '>
                    <div className='lg:hidden  flex justify-center image-container w-full md:h-1/3  md:w-1/2 '>  {bild6}  </div>   
                      
        <p className='mb-2 mt-2  md:w-1/2 lg:w-full md:mr-3 mx-2'>{text6}</p>  
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