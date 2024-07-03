import React, { useEffect, useState } from "react";
import AboutPic from '../assets/about-us.png';
import Marquee from "react-fast-marquee";
import image1 from '../assets/about-images/image1.png'
import image2 from '../assets/about-images/image2.png'
import image3 from '../assets/about-images/image3.png'
import image4 from '../assets/about-images/image4.png'

import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate'

const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image4, alt: 'Image 4' },
  { src: image1, alt: 'Image 5' },
  { src: image2, alt: 'Image 6' },
  { src: image3, alt: 'Image 7' }
 
];


export default function Aboutus() {

  const [isHoveringContact, setIsHoveringContact] = useState(false);


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


  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);



  const Carddata = [
    { number: '01', heading: 'Standardization', para: 'In a rapidly changing digital world, maintaining consistency in your brand online presence is crucial. We ensure standardized approaches across all platforms to keep your brand message clear and effective.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000' },
    { number: '02', heading: 'Reduced Costs', para: 'Our efficient strategies and tools help reduce costs, ensuring you get the best value for your investment in Social Media Marketing, UX/UI Design, and Development services.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF' },
    { number: '03', heading: 'More Customization', para: 'We understand that each business is unique. Our services are tailored to meet your specific needs, providing customized solutions that align with your business goals.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000' },
    { number: '04', heading: 'Affordable Pricing', para: 'Experience top-quality services at competitive prices. We believe in delivering value and excellence without exceeding your budget.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF' },
    { number: '05', heading: 'Learner Satisfaction', para: 'Our commitment to collaboration and excellence ensures high levels of client satisfaction. Join our list of happy clients who have achieved remarkable success with our help.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000' },
    { number: '06', heading: 'Multimedia Materials', para: 'We provide a wide range of resources to enhance your digital presence, from engaging social media content to user-friendly website designs.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF' },
  ];

  const Card = Carddata.map((item, index) => {
    return (
      <div
        className="flex w-full p-8 flex-col gap-[32px] rounded-[30px] border-[2px]"
        style={{ backgroundColor: item.color1 }}
        key={index}
      >
        <h2 className="text-[20px] font-medium" style={{ color: item.color2 }}>{item.number}</h2>
        <h3 className="text-[24px] font-semibold" style={{ color: item.color3 }}>{item.heading}</h3>
        <p className="text-[20px]" style={{ color: item.color2 }}>{item.para}</p>
      </div>
    );
  });



  return (
    <div  className={`page ${isVisible ? 'slide-in' : ''}`}>

      <Header />


<div className='blur-section'>

      <div className='w-full flex flex-col  py-10 space-y-20'>

        {/* heading section */}
        <div className='w-full px-8 flex flex-col lg:flex-row items-start lg:items-end gap-8'>
          <div className='w-full'>
            <h1 className='text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold'>
            About Us
            </h1>
          </div>
          <div className='lg:w-2/3 w-full text-left lg:text-right mt-4 lg:mt-0'>
            <h4 className='text-[#4A4A4A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium'>
            Pixel Bharat: Empowering Businesses with Innovation
            </h4>
          </div>
        </div>

        {/* poster section */}
        <div className='w-full h-1/2 px-8 rounded-[30px]'>
          <img src={AboutPic} alt="" className='w-full rounded-[30px]' />
        </div>

        {/* about us section */}
        <div className='md:flex px-8 justify-between items-center space-y-8 md:space-y-0'>
          <div className='flex flex-col space-y-8 md:w-1/3'>
            <h2 className='text-[#ABABAB] text-[20px] font-medium'>About Us</h2>
            <h3 className='text-[#141414] text-[24px] font-semibold'>Pixel Bharat: Empowering Businesses with Innovation</h3>
            <div>
              <a href="/careers"
              onMouseEnter={handleMouseEnterContact}
              onMouseLeave={handleMouseLeaveContact}
              className=' py-3 px-8 p justify-center items-start gap-[8px] rounded-[100px] bg-[var(--Default-Black,_#000)] flex-[1_0_0] text-[16px] font-semibold text-white hover:shadow-xl  hover:bg-white hover:border-[1px] border-[1px] border-black hover:border-gray-300 hover:text-black'>Join Us</a>
            </div>
          </div>
          <div className='md:w-1/2'>
            <p className=' text-[#4A4A4A] text-[16px] font-medium'>Pixel Bharat is a premier service-based company based in Delhi, specializing in Social Media Marketing, UX/UI Design, and Development services. Since our establishment, we have been dedicated to helping businesses grow and succeed in the digital landscape through innovative and tailored solutions.<br/>
            Our mission is to deliver exceptional services that drive results and provide our clients with a competitive edge. With a team of experienced professionals, we are committed to excellence and innovation in everything we do. </p>
          </div>
        </div>

        {/* our Benefits section*/}
        <div>
          <div className='md:flex px-8 justify-between items-center space-y-8 md:space-y-0'>
            <div className='flex flex-col space-y-8 md:w-1/3'>
            <h5 className='text-[#141414]  text-[40px] font-semibold'>Our Benefits</h5>
            </div>
            <div className='md:w-1/2'>
              <p className=' text-[#4A4A4A] text-[16px] font-medium'>By partnering with Pixel Bharat, you gain access to a range of benefits:</p>
            </div>
          </div>


          <div className="grid justify-center gap-8 px-8 py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {Card}
          </div>


        </div>



        {/* latest works section */}
        <div className='flex flex-col space-y-8 pl-8'>

          <h5 className='text-[#141414]  text-[40px] font-semibold'>Our Gallery!</h5>

          
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 -mr-8">
            {images.map((image, index) => (
          <div key={index} className='rounded-[36px] w-full'>
            <img className='h-[300px] w-full object-cover rounded-[36px]' src={image.src} alt={image.alt} />
          </div>
        ))}
         
          </div>
        </div>

      </div>

      <Collaborate />
      <Footer />

      </div>
    </div>
  )
}
