import { useState } from 'react';
import {buyerFAQ} from '../data/buyerFAQ';
import {sellerFAQ} from '../data/sellerFAQ';
import './faq.css'

const Accordion = ({ faqs, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h2 className='faq-title'>{title}</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            <h3>{faq.question}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Faq = ({ buyerFAQs, sellerFAQs }) => {
  return (
    <div className="faq-container">
      <Accordion faqs={buyerFAQ} title="Buyer FAQs" />
      <Accordion faqs={sellerFAQ} title="Seller FAQs" />
    </div>
  );
};

export default Faq;
