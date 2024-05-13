import Image from '../assets/images/homepage/connecting.webp'
import './aboutUs.css'

export default function Index() {
    return (
        <div className='wrapper'>
            <header>
                <h1>About Us</h1>
                <p>Your Trusted Digital Marketplace</p>
            </header>
            <div className='img-container'>
                <img src={Image} alt='connecting people'/>
            </div>
            <div className='content'>
                <div className='mission'>
                    <section>
                        <h2>Our Mission</h2>
                        <p>At EveryoneStore, our mission is to empower digital creators and provide them with the tools
                            they need to succeed in a dynamic market. We believe in fostering a community where
                            innovation thrives, and where artists, videographers, photographers, and voice actors can
                            find a home for their creations. Our platform not only facilitates the sale of digital
                            products but also supports the growth and development of our creators through resources,
                            networking opportunities, and a transparent, secure marketplace.</p>
                    </section>
                </div>
                <div className='offer'>
                    <section>
                        <h1>What We Offer</h1>
                            <ul>
                                <li>
                                    <span>Diverse Digital Products:</span>
                                    From stunning photography and captivating video content to immersive audio
                                    experiences and unique digital art, our marketplace boasts a wide range of digital
                                    products to suit every need and taste.
                                </li>
                                <li>
                                    <span>For Creators:</span> We provide a robust platform with advanced tools to
                                    manage, promote, and sell your digital products. Our competitive commissions mean
                                    more earnings go directly to you, the creator, supporting your creative journey.
                                </li>
                                <li>
                                    <span>For Consumers:</span> Enjoy seamless access to a diverse catalog of digital
                                    products. Whether you're looking to license a photograph for marketing purposes,
                                    find unique video content, or acquire rights to a distinctive piece of digital art,
                                    The Everyone Store has something to offer.

                                </li>
                                <li>
                                    <span>Community and Support: </span> Join a community of like-minded individuals who
                                    are passionate about digital media. Gain insights, feedback, and creative
                                    inspiration from peers and industry experts.
                                </li>
                            </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
