import Navbar from "..//Nav/Navbar"
import Footer from '../Foot/Footer'
import EachFAQ from './EachFAQ';
import './FAQ.css'



const faqData = [
    {
      question: 'What genres of books does HALA offer?',
      answer:
        'HALA offers a wide range of book genres including fiction, non-fiction, science fiction, fantasy, romance, mystery, self-help, and many more.',
    },
    {
      question: 'Do you have a physical store?',
      answer:
        'Yes, HALA has a physical bookstore located at 59 Main Street, Bedford Hwy, NS. You can visit us during our regular store hours.',
    },
    {
      question: 'Can I order books online?',
      answer:
        'Absolutely! HALA offers online ordering through our website. You can browse our catalog, place orders, and have books shipped to your doorstep.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, HALA provides international shipping services. We can ship books to customers worldwide. Shipping rates and delivery times may vary based on location.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'HALA accepts a variety of payment methods including credit cards, debit cards, PayPal,' +
         'and more. You can choose the payment method that is most convenient for you during checkout.',
    },
    // Add more FAQ items specific to your bookstore as needed
  ];
  



const FAQ = () => {
  return (
    <div>
      <Navbar/>
      <div className="About-title ani">
        <h3>Frequently Asked</h3>
        <h1>QUESTIONS</h1>
      </div>
      <div className="huge lll">
        <div className="about-text cona Lol">
          <h2>Frequently asked questions</h2>
          <div className="contact-container">
            <div className="cont">
              <div className="llo ooo">
                <div className="faq-section ">
                  {faqData.map((faqItem, index) => (
                    <EachFAQ
                      key={index}
                      question={faqItem.question}
                      answer={faqItem.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ