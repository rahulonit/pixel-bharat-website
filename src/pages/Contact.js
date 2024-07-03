import React, { useEffect, useState } from "react";
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collab from '../componets/Collaborate'
import { ReactComponent as HandIcon } from '../assets/Hand-logo.svg';
import emailjs from 'emailjs-com';






const faqs = [
  { question: 'What services does Pixel Bharat offer?', answer: 'Pixel Bharat offers a range of services including Social Media Marketing, UX/UI Design, and Development. Our goal is to enhance your brand’s online presence and provide robust, scalable, and efficient solutions to drive your business forward.' },
  { question: 'How can Pixel Bharat help improve my social media presence?', answer: 'Our social media marketing services include cutting-edge strategies tailored to captivate and convert your audience. We focus on enhancing your brand engagement and visibility across various social media platforms, ensuring a consistent and impactful online presence.' },
  { question: 'What sets Pixel Bharat apart from other digital service providers?', answer: 'At Pixel Bharat, we believe in the power of collaboration and excellence. Our team of experienced professionals is dedicated to delivering innovative and tailored solutions that drive success for our clients. We prioritize quality, creativity, and client satisfaction, making us a trusted partner in the industry.' },
  { question: 'What benefits can I expect from partnering with Pixel Bharat?', answer: 'By partnering with Pixel Bharat, you gain access to a range of benefits including standardized approaches for brand consistency, reduced costs through efficient strategies, customized solutions tailored to your business needs, affordable pricing, high levels of client satisfaction, and comprehensive resources to enhance your digital presence.' },
  { question: 'How can I join the Pixel Bharat team?', answer: 'We are always looking for talented and dedicated professionals who are passionate about what they do. If you are interested in joining our team, please visit our Careers page to explore current opportunities and find your career with Pixel Bharat.' },
];


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringContact, setIsHoveringContact] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  const handleMouseEnterContact = () => {
    setIsHoveringContact(true);
    const dotElement = document.getElementById('dot');
    if (dotElement) {
      dotElement.classList.add('remove');
    }
  };

  const handleMouseLeaveContact = () => {
    setIsHoveringContact(false);
    const dotElement = document.getElementById('dot');
    if (dotElement) {
      dotElement.classList.remove('remove');
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || email.trim() === '') {
      alert('Please fill out all fields');
      return;
    }

    // EmailJS parameters
    const templateParams = {
      from_name: name,
      from_email: email,
    };

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceId = 'your_emailjs_service_id';
    const templateId = 'your_emailjs_template_id';
    const userId = 'your_emailjs_user_id';

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
        setSubmitted(true); // Update state after successful submission
      })
      .catch((error) => {
        console.error('Email error:', error);
        // Handle error scenarios
      });
  };

  return (
    <div  className={`page ${isVisible ? 'slide-in' : ''}`}>
      <Header />

      <div className='blur-section'>

      <div className='py-10 px-8'>
        <div className='w-full lg:w-1/2 flex flex-col space-y-3 pb-8'>
          <HandIcon className='w-16 h-16 pb-8' />

          <h1 className='text-[#141414] text-[32px] lg:text-[64px] font-bold'>Become a client</h1>

          <p className='text-[#4A4A4A] text-[16px] lg:text-[20px] font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate sapien nec sagittis aliquam. Odio euismod lacinia at quis. Urna et pharetra pharetra massa.
          </p>
        </div>

        <div className="">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-3">
              <div className="w-full lg:w-1/4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex w-full p-[16px] items-center self-stretch rounded-[50px] border-[1px] focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                />
              </div>

              <div className="w-full lg:w-1/4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex w-full p-[16px] items-center self-stretch rounded-[50px] border-[1px] focus:outline-none focus:shadow-outline"
                  placeholder="Email@company.com"
                />
              </div>

              <div className="">
                <button
                  onMouseEnter={handleMouseEnterContact}
                  onMouseLeave={handleMouseLeaveContact}
                  type="submit"
                  className="flex py-3 px-8 gap-[8px] rounded-full bg-black text-[16px] font-semibold leading-[18px] text-white hover:shadow-xl border-[1px] border-black hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black"
                >
                  Get in Touch
                </button>
              </div>
            </form>
          ) : (
            <p className="text-green-500 font-semibold">Thank you for your submission!</p>
          )}
        </div>
      </div>

          <br></br>

        {/* faq section */}
        <div className='flex flex-col px-8 space-y-8  md:flex-row justify-between'>
          <div className='flex flex-col space-y-4 w-full '>
            {faqs.map((faq, index) => (
              <div key={index} className='flex flex-col'>
                <div
                onMouseEnter={handleMouseEnterContact}
                onMouseLeave={handleMouseLeaveContact}
                  className='flex justify-between px-4 py-2 flex-col items-center rounded-[24px] border-[2px] cursor-pointer'
                  onClick={() => toggleAccordion(index)}
                >
                  <span className='flex justify-between w-full items-center'>
                  <h6 className='text-[#4A4A4A] text-[24px] font-semibold md:text-[18px]'>{faq.question}</h6>
                  <h6 className='text-[#4A4A4A] text-[24px] md:text-[44px] font-medium'>{openIndex === index ? '-' : '+'}</h6>
                  </span>
                  {openIndex === index && (
                    
                  <div className='px-4 py-2 md:px-6 md:py-4'>
                  <hr/>
                      <br></br>
                    <p className="text-[20px] text-[#4A4A4A] ">{faq.answer}</p>
                  </div>
                )}
                </div>
              
              </div>
            ))}
          </div>
        </div>
      <Collab />
      <Footer />
      </div>
    </div>
  );
}
