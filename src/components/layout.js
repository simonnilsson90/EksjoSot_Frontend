import Footer from "../components/footer/FooterComponent";
import '../views/aboutUs.css';

const LayoutComponent = ({ title, pretext, sections, back }) => {
    return (
        <div>
            <div className="flex flex-col gap-4 lg:w-full md:w-full lg:mb-0 md:mb-16 lg:mt-10 md:mt-10 mt-20 lg:flex-row md:flex-row lg:flex-wrap md:flex-wrap">
                <div className="text-white mx-auto lg:mt-20 md:mt-20 flex justify-center items-center">
                    <h1 className="text-4xl text-center pb-2 lg:pt-10 md:pt-10 lg:border-none md:border-none lg:text-7xl md:text-7xl border-sotOrange border-b-2">
                        {title}
                    </h1>
                </div>

                <div className="bg-sot text-white md:mt-32 mt-28 lg:mt-48 lg:mx-auto md:mx-auto">
                    <div className='flex items-center text-lg p-4 md:p-0 font-light lg:text-4xl md:text-2xl lg:font-light md:font-light lg:px-20 md:px-20 lg:py-20 md:py-14'>
                        {pretext}
                    </div>

                    <div className="bg-white pt-2 lg:pt-0 md:pt-0 ">
                        <div className="w-20 bg-sotOrange lg:hidden md:hidden  pr-2 mt-2 lg:mt-0 md:mt-0 mx-4">
                            {back}
                        </div>
                        {sections.map((section, index) => (
                            (section.text && section.bild) && (
                                <div className={`lg:flex md:flex ${index % 2 === 0 ? 'lg:flex-row-reverse md:flex-row-reverse' : 'lg:flex-row md:flex-row'} ${index % 2 === 0 ? 'lg:bg-sotSecondary md:bg-sotSecondary' : 'lg:bg-sot md:bg-sot'} bg-white lg:bg-none md:bg-none`} key={index}>
                                    <div className='justify-center  image-container w-full lg:h-1/3 md:h-full lg:w-1/2 md:w-1/2 bg-white lg:block md:block hidden'>
                                        {section.bild}
                                    </div>
                                    <div className="flex items-center justify-center lg:w-1/2 md:w-1/2 mx-4 lg:mx-0 md:mx-0  lg:p-6 md:py-1 md:px-2">
                                        <p className={`lg:text-base md:text-sm text-black lg:text-white md:text-white`}>
                                            {section.text}
                                        </p>
                                    </div>
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
