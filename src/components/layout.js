import Footer from "../components/footer/FooterComponent";
import '../views/aboutUs.css';

const LayoutComponent = ({ title, pretext, sections, back }) => {
    return (
        <div>
            <div className="flex flex-col gap-4 lg:w-full md:w-full lg:mb-0 md:mb-16 lg:mt-10 md:mt-10 mt-20 lg:flex-row md:flex-row lg:flex-wrap md:flex-wrap">
            <div className="text-white mx-auto lg:mt-20 md:mt-20   flex justify-center items-center">
    <h1 className="text-4xl text-center pb-2 lg:pt-10 md:pt-10 lg:border-none md:border-none lg:text-7xl md:text-7xl border-sotOrange border-b-2">
        {title}
    </h1>
</div>

                <div className=" bg-sot text-white   md:mt-32 mt-28 lg:mt-48  lg:mx-auto md:mx-auto">
                    <div className='text-lg p-4  md:p-0 font-light    lg:text lg:text-4xl md:text-2xl lg:font-light md:font-light lg:px-20 md:px-20 lg:pb-32 md:pb-10 lg:pt-10 md:pt-8 '>
                        {pretext}
                    </div>
                    <div className=" lg:hidden md:hidden  w-24 bg-sotOrange mx-4 mb-4 ">
                        {back}
                    </div>
                    
                    <div>
                        {sections.map((section, index) => (
                            (section.text && section.bild) && (
                                <div className={`lg:flex md:flex ${index % 2 === 0 ? 'lg:flex-row-reverse md:flex-row-reverse' : 'lg:flex-row md:flex-row'  } ${index % 2 === 0 ? 'lg:bg-sot md:bg-sot' : 'lg:bg-sotSecondary md:bg-sotSecondary'} bg-white lg:bg-none md:bg-none`} key={index}>
                                    <div className='justify-center image-container w-full lg:h-1/3 md:h-full lg:w-1/2 md:w-1/2 bg-white lg:block md:block hidden'>
                                        {section.bild}
                                    </div>
                                    <p className={`py-4 lg:p-4 md:p-4 lg:w-1/2 md:w-1/2 mx-4 lg:mx-0 md:mx-0 lg:text-xl md:text-base text-black lg:text-white md:text-white`}>
                                        {section.text}
                                    </p>
                                </div>
                            )
                        ))}
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
