import React from 'react';
import aboutUsData from '../data/aboutUsData'; 
import { FaCheckCircle } from 'react-icons/fa'; 
import './aboutUs.css'; 

const AboutUsPage = () => {
    return (
        <div className="about-us">
            <header className="header">
                <h1>{aboutUsData.title}</h1>
                <p>{aboutUsData.description}</p>
            </header>

            <div className="content-grid">
                <div className="vision section">
                    <div>
                        <h2>{aboutUsData.vision.title}</h2>
                        <p>{aboutUsData.vision.content}</p>
                    </div>
                </div>

                <div className="what-we-do section">
                    <div>
                        <h2>{aboutUsData.whatWeDo.title}</h2>
                        <p>{aboutUsData.whatWeDo.content}</p>
                    </div>
                </div>

                <div className="how-we-stand-out section">
                    <div>
                        <h2>{aboutUsData.howWeStandOut.title}</h2>
                        <ul className="elegant-list">
                            {aboutUsData.howWeStandOut.items.map((point, index) => (
                                <li key={index}><FaCheckCircle className="list-icon" />{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="our-culture section">
                    <div>
                        <h2>{aboutUsData.ourCulture.title}</h2>
                        <p>{aboutUsData.ourCulture.content}</p>
                    </div>
                </div>

                <div className="community-outreach section">
                    <div>
                        <h2>{aboutUsData.communityOutreach.title}</h2>
                        <p>{aboutUsData.communityOutreach.content}</p>
                    </div>
                </div>

                <div className="why-choose-us section">
                    <div>
                        <h2>{aboutUsData.whyChooseUs.title}</h2>
                        <p>{aboutUsData.whyChooseUs.content}</p>
                    </div>
                </div>

                <div className="join-our-journey section">
                    <div>
                        <h2>{aboutUsData.joinOurJourney.title}</h2>
                        <p>{aboutUsData.joinOurJourney.content}</p>
                    </div>
                </div>

                <footer className="footer">
                    <h2>{aboutUsData.finalMessage.title}</h2>
                    <p>{aboutUsData.finalMessage.content}</p>
                </footer>
            </div>
        </div>
    );
};

export default AboutUsPage;
