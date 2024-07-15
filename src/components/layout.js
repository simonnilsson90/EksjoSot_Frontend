import Footer from "../components/footer/FooterComponent";
import '../views/aboutUs.css';

const LayoutComponent = ({ title, pretext, sections }) => {
    return (
        <div>
            <div className="flex flex-col gap-4 lg:w-full md:w-full lg:mb-16 md:mb-16 lg:mt-10 md:mt-10 mt-20 lg:flex-row md:flex-row lg:flex-wrap md:flex-wrap">
                <div className="text-white mx-auto lg:mt-10 md:mt-10 md:w-5/6 lg:mx-auto md:mx-auto">
                    <h1 className="text-4xl text-start pb-2 lg:pb-0 md:pb-0 lg:border-none md:border-none lg:text-7xl md:text-7xl border-sotOrange border-b-2">{title}</h1>
                    <div className="hidden lg:block text-start md:block mt-4 mx-2 lg:text-2xl md:text-2xl lg:mt-32 md:mt-40 md:w-1/2 lg:w-1/2 lg:ml-auto md:ml-auto">
                        {pretext}
                    </div>
                </div>
                <div className="section bg-black text-white lg:mx-0 md:mx-0 md:mt-0 mt-28 lg:mt-0">
                    <div className='text-lg p-4 lg:p-0 md:p-0 font-light lg:hidden md:hidden lg:pb-0 md:pb-0'>
                        {pretext}
                    </div>
                    <div>
                        {sections.map((section, index) => (
                            (section.text && section.bild) && (
                                <div className={`lg:flex md:flex ${index % 2 === 0 ? 'lg:flex-row md:flex-row' : 'lg:flex-row-reverse md:flex-row-reverse'} ${index % 2 === 0 ? 'lg:bg-sot md:bg-sot' : 'lg:bg-sotSecondary md:bg-sotSecondary'} bg-white lg:bg-none md:bg-none`} key={index}>
                                    <div className='justify-center image-container w-full lg:h-1/3 md:h-full lg:w-1/2 md:w-1/2 bg-white lg:block md:block hidden'>
                                        {section.bild}
                                    </div>
                                    <p className={`py-4 lg:p-4 md:p-4 lg:w-1/2 md:w-1/2 mx-4 lg:mx-0 md:mx-0 lg:text-xl md:text-lg text-black lg:text-white md:text-white`}>
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
