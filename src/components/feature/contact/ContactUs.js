import './contactUs.css';
import contactImage from '../../../assets/images/homepage/contact.webp';

export default function ContactUs() {
  return (
    <div className='contact-wrapper'>
        <div className='contact-content'>
            <div className='contact-info'>
                <h1>Contact Us</h1>
                <p>Have questions? We'd love to hear from you. Complete the form and we will get back to you as soon as possible.</p>
                <form className='contact-form'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
        <div className='contact-image-container'>
            <img src={contactImage} alt='Contact Us' />
        </div>
    </div>
  )
}
