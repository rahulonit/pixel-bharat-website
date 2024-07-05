import React, { useEffect, useState } from "react";
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collab from '../componets/Collaborate'
import { ReactComponent as HandIcon } from '../assets/Hand-logo.svg';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);



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


  const textheadRef = useRef(null)
  const cus1Ref = useRef(null)
  const cus2Ref = useRef(null)
  const cus3Ref = useRef(null)
  const cus4Ref = useRef(null)
  const cus5Ref = useRef(null)
  const cus6Ref = useRef(null)
  const cus7Ref = useRef(null)
  const cus8Ref = useRef(null)
  const cus9Ref = useRef(null)
  const cus10Ref = useRef(null)
  const mainfaqRef = useRef(null)
  const faq1Ref = useRef(null)
  const faq2Ref = useRef(null)
  const faq3Ref = useRef(null)
  const faq4Ref = useRef(null)
  const faq5Ref = useRef(null)
  const faq6Ref = useRef(null)
  const cardRef = useRef(null);
  const newimg1Ref = useRef(null)
  const newimg2Ref = useRef(null)
  const newimg3Ref = useRef(null)
  const newimg4Ref = useRef(null)
  const newimg5Ref = useRef(null)
  const newimg6Ref = useRef(null)
  const mainimgRef = useRef(null)
  const newimg12Ref = useRef(null)
  const newimg22Ref = useRef(null)
  const newimg32Ref = useRef(null)
  const newimg42Ref = useRef(null)
  const newimg52Ref = useRef(null)
  const newimg62Ref = useRef(null)

  useGSAP(() => {
    const texthead = textheadRef.current
    const cus1 = cus1Ref.current
    const cus2 = cus2Ref.current
    const cus3 = cus3Ref.current
    const cus4 = cus4Ref.current
    const cus5 = cus5Ref.current
    const cus6 = cus6Ref.current
    const cus7 = cus7Ref.current
    const cus8 = cus8Ref.current
    const cus9 = cus9Ref.current
    const cus10 = cus10Ref.current
    const mainfaq = mainfaqRef.current
    const faq1 = faq1Ref.current
    const faq2 = faq2Ref.current
    const faq3 = faq3Ref.current
    const faq4 = faq4Ref.current
    const faq5 = faq5Ref.current
    const faq6 = faq6Ref.current
    const img1 = newimg1Ref.current
    const img2 = newimg2Ref.current
    const img3 = newimg3Ref.current
    const img4 = newimg4Ref.current
    const img5 = newimg5Ref.current
    const img6 = newimg6Ref.current
    const mainimg = mainimgRef.current
    const img12 = newimg12Ref.current
    const img22 = newimg22Ref.current
    const img32 = newimg32Ref.current
    const img42 = newimg42Ref.current
    const img52 = newimg52Ref.current
    const img62 = newimg62Ref.current


    gsap.from(texthead, {
      x: -400,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: texthead,
        markers: false,
        start: "top 100%"
      }
    });


    gsap.from(cus1, {
      yPercent: 350,
      duration: 2.3,
      ease: "power4",
      smooth: 1,
    });
    gsap.from(cus2, {
      yPercent: 200,
      duration: 1.6,
      smooth: 1,

    });
    gsap.from(cus3, {
      yPercent: 200,
      duration: 1.9,
      smooth: 1,
    })
    gsap.from(cus4, {
      yPercent: 200,
      duration: 2,
      smooth: 1,
    })
    gsap.from(cus5, {
      yPercent: 200,
      duration: 2.2,
      smooth: 1,
    })
    gsap.from(cus6, {
      yPercent: 200,
      duration: 2.4,
      smooth: 1,
    })
    gsap.from(cus7, {
      yPercent: 200,
      opacity: 0,
      duration: 1.2,
      smooth: 1,
    })
    gsap.from(cus8, {
      y: 400,
      duration: 1.8,
      smooth: 1,
      stagger: 2,
      scrollTrigger: {
        trigger: cus8Ref.current,
        markers: false,
        start: 'top 150%'
      }
    })
    gsap.from(cus9, {
      y: 200,
      opacity: 0,
      duration: 1.3,
      smooth: 1,
      // scrollTrigger: {
      //   trigger: cus9,
      //   markers: false,
      //   start: "top 150%"
      // }

    })

    gsap.from(cus10, {
      y: 150,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: "bottom 120%"
      }
    })

    gsap.from(mainfaq, {

      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 10%"
      }
    })
    gsap.from(faq1, {
      yPercent: 300,
      duration: 1,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(faq2, {
      yPercent: 550,
      duration: 1.3,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(faq3, {
      yPercent: 600,
      duration: 1.6,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: "top 100%"
      }
    })

    gsap.from(faq4, {
      yPercent: 650,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(faq5, {
      yPercent: 700,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(faq6, {
      scale: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: "top 70%"
      }
    })
    gsap.from(img1, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 70%"
      }
    })
    gsap.from(img12, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 70%"
      }
    })

    gsap.from(img2, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 70%"
      }
    })
    gsap.from(img22, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 70%"
      }
    })
    gsap.from(img3, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 70%"
      }
    })
    gsap.from(img32, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 70%"
      }
    })
    gsap.from(img4, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 50%"
      }
    })
    gsap.from(img42, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 50%"
      }
    })
    gsap.from(img5, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 50%"
      }
    })
    gsap.from(img52, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 50%"
      }
    })
    gsap.from(img6, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 50%"
      }
    })
    gsap.from(img62, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: "top 50%"
      }
    })
  })


  const faqs = [
    { question: 'What services does Pixel Bharat offer?', answer: 'Pixel Bharat offers a range of services including Social Media Marketing, UX/UI Design, and Development. Our goal is to enhance your brand’s online presence and provide robust, scalable, and efficient solutions to drive your business forward.', ref: faq1Ref },
    { question: 'How can Pixel Bharat help improve my social media presence?', answer: 'Our social media marketing services include cutting-edge strategies tailored to captivate and convert your audience. We focus on enhancing your brand engagement and visibility across various social media platforms, ensuring a consistent and impactful online presence.', ref: faq2Ref },
    { question: 'What sets Pixel Bharat apart from other digital service providers?', answer: 'At Pixel Bharat, we believe in the power of collaboration and excellence. Our team of experienced professionals is dedicated to delivering innovative and tailored solutions that drive success for our clients. We prioritize quality, creativity, and client satisfaction, making us a trusted partner in the industry.', ref: faq3Ref },
    { question: 'What benefits can I expect from partnering with Pixel Bharat?', answer: 'By partnering with Pixel Bharat, you gain access to a range of benefits including standardized approaches for brand consistency, reduced costs through efficient strategies, customized solutions tailored to your business needs, affordable pricing, high levels of client satisfaction, and comprehensive resources to enhance your digital presence.', ref: faq4Ref },
    { question: 'How can I join the Pixel Bharat team?', answer: 'We are always looking for talented and dedicated professionals who are passionate about what they do. If you are interested in joining our team, please visit our Careers page to explore current opportunities and find your career with Pixel Bharat.', ref: faq5Ref },
  ];
  return (
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <Header />

      <div className='blur-section'>

        <div className='py-10 px-8'>
          <div className='w-full lg:w-1/2 flex flex-col space-y-3 pb-8 pl-8 overflow-hidden'>
            <HandIcon className='w-16 h-16 pb-8' />

            <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold flex gap-5 overflow-hidden "><p ref={cus2Ref}>Become</p><p ref={cus3Ref}>a</p><p ref={cus4Ref}>Client</p></p>

            <p ref={cus7Ref} className='text-[#4A4A4A] text-[16px] lg:text-[20px] font-medium overflow-hidden'>
            Discover how we can make a difference for your business. Fill out the form below to get started, and one of our representatives will be in touch with you shortly. Let's collaborate and achieve great things together.            </p>
          </div>

          <div className="">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-3 pl-8">
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
              <div ref={faq.ref} key={index} className='flex flex-col'>
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
                  <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                    <div className="answer-content">
                      <hr />
                      <br />
                      <p className="text-[20px] text-[#4A4A4A]">{faq.answer}</p>
                    </div>
                  </div>
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
