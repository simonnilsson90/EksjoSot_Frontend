import Footer from "../components/footer/FooterComponent";
import '../views/aboutUs.css';

const LayoutComponent = ({ title, pretext, text1, text2, text3, text4, text5, text6, bild1, bild2, bild3, bild4, bild5, bild6 }) => {
    return (
        <div>
            <div className="flex flex-col gap-4   lg:w-full md:w-full lg:mb-16 md:mb-16 lg:mt-10 md:mt-10 mt-20 lg:flex-row md:flex-row lg:flex-wrap md:flex-wrap">
                <div className="text-white mx-auto lg:mt-10 md:mt-10 lg:flex md:flex lg:w-5/6 md:w-5/6 lg:mx-auto md:mx-auto">
                    <h1 className="text-6xl text-start pb-2 lg:pb-0 md:pb-0 lg:border-none md:border-none lg:text-7xl md:text-7xl border-sotOrange border-b-2 ">{title}</h1>
                    <div className="hidden lg:block md:block mt-4 mx-2 lg:text-2xl md:text-2xl lg:text-start md:text-start lg:mt-48 md:mt-40 lg:right-1 md:right-4 md:pr-10 ">
                        {pretext}
                    </div>
                </div>
                <div className="section bg-black  text-white lg:mx-0 md:mx-0  lg:mt-48 md:mt-20 mt-28">
                <div className='    text-lg p-4 lg:p-0 md:p-0  font-light lg:hidden md:hidden  lg:pb-0 md:pb-0  '> {pretext} </div>
                    <div className="  ">



                        <div className='lg:flex md:flex lg:flex-row-reverse md:flex-row-reverse bg-white lg:bg-sot md:bg-sot lg:bg-none md:bg-none '>
                            <div className=' justify-center image-container w-full  lg:h-1/3 md:h-full lg:w-1/2 md:w-1/2 bg-white lg:block md:block hidden'> {bild1} </div>
                            <p className=' lg:p-4 md:p-4 py-4 lg:w-1/2 md:w-1/2  mx-4 lg:mx-0 md:mx-0 lg:text-xl md:text-base text-black lg:text-white md:text-white '>{text1}</p>
                        </div>
                        <div className='lg:flex md:flex lg:flex-row md:flex-row bg-white lg:bg-sotSecondary md:bg-sotSecondary lg:bg-none md:bg-none '>
                            <div className=' justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-1/2 bg-white lg:bg-sotSecondary md:bg-sotSecondary lg:block md:block hidden'> {bild2} </div>
                            <p className=' py-4  lg:w-1/2 md:w-1/2 lg:pl-10 md:pl-10  mx-4 lg:mx-0 md:mx-0 lg:text-xl md:text-lg text-black lg:text-white md:text-white    '>{text2}</p>
                        </div>
                        <div className='lg:flex md:flex lg:flex-row-reverse md:flex-row-reverse bg-white lg:bg-sot md:bg-sot lg:bg-none md:bg-none '>
                            <div className=' justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-1/2 bg-white lg:block md:block hidden'> {bild3} </div>
                            <p className=' lg:p-4 md:p-4 py-4 lg:w-1/2 md:w-1/2  mx-4 lg:mx-0 md:mx-0 lg:text-xl md:text-lg text-black lg:text-white md:text-white  '>{text3}</p>
                        </div>
                        <div className='lg:flex md:flex lg:flex-row md:flex-row bg-white lg:bg-sotSecondary md:bg-sotSecondary lg:bg-none md:bg-none '>
                            <div className=' justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-1/2 bg-white lg:bg-sotSecondary md:bg-sotSecondary lg:block md:block hidden'> {bild4} </div>
                            <p className=' py-4  lg:p-4 md:p-4 lg:w-1/2 md:w-1/2  mx-4 lg:mx-0 md:mx-0 lg:text-xl md:text-lg text-black lg:text-white md:text-white   '>{text4}</p>
                        </div>
                        <div className='lg:flex md:flex lg:flex-row-reverse md:flex-row-reverse mb-4 lg:bg-sotSecondary md:bg-sotSecondary bg-white lg:bg-none md:bg-none'>
                            <div className='flex justify-center image-container w-full lg:h- md:h-1/3 lg:w-1/2 md:w-1/2 bg-white'> {bild5} </div>
                            <p className='py-4  mb-2 mt-2 lg:p-4 md:p-4 lg:w-1/2 md:w-1/2  mx-4 lg:mx-0 md:mx-0 lg:text-xl md:text-lg text-black lg:text-white md:text-white  '>{text5}</p>
                        </div>
                        <div className='lg:flex md:flex lg:flex-row md:flex-row bg-white lg:bg-sot md:bg-sot lg:bg-none md:bg-none '>
                            <div className=' justify-center image-container w-full lg:h-1/3 md:h-1/3 lg:w-1/2 md:w-1/2 bg-white lg:bg-sotSecondary md:bg-sotSecondary lg:block md:block hidden'> {bild6} </div>
                            <p className='py-4  lg:w-1/2 md:w-1/2 lg:pl-10 md:pl-10  mx-4 lg:mx-0 md:mx-0 lg:text-xl md:text-lg text-black lg:text-white md:text-white bg-white   '>{text6}</p>
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