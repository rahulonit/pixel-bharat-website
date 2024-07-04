import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import Collaborate from '../componets/Collaborate'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import image1 from '../assets/about-images/image1.png'
import image2 from '../assets/about-images/image2.png'
import image3 from '../assets/about-images/image3.png'
import image4 from '../assets/about-images/image4.png'
import CareerPoster from '../assets/career-poster.png'


const solvers = [
  { src: image1, 
    alt: 'Image 1' ,
    heading: 'Glabal Annual Review',
    position: 'Graphic designer',
    para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
  },
  { src: image2, 
    alt: 'Image 2',
          heading: 'Glabal Annual Review',
          position: 'Graphic designer',
    para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
   },
  { src: image3, 
    alt: 'Image 3',
          heading: 'Glabal Annual Review',
          position: 'Graphic designer',
    para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
   },
  { src: image4, 
    alt: 'Image 4',
          heading: 'Glabal Annual Review',
          position: 'Graphic designer',
    para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
   },
  { src: image1, 
    alt: 'Image 5',
          heading: 'Glabal Annual Review',
          position: 'Graphic designer',
    para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
   },
  { src: image2, 
    alt: 'Image 6',
          heading: 'Glabal Annual Review',
          position: 'Graphic designer',
    para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
   },
  { src: image3, 
    alt: 'Image 7',
          heading: 'Glabal Annual Review',
          position: 'Graphic designer',
    para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
   }
 
];

const Carddata = [
  { number: '01',heading:"Health and Wellness Programs", para: 'At Pixel Bharat, we prioritize the health and well-being of our employees. We offer comprehensive health insurance plans, wellness programs, and access to fitness facilities to ensure our team stays healthy and active.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000' },
  { number: '02', heading:"Professional Development", para: 'We believe in continuous learning and growth. Our employees have access to training programs, workshops, and conferences to enhance their skills and advance their careers.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF' },
  { number: '03', heading: 'Work-Life Balance', para: 'We understand the importance of work-life balance. Our flexible work hours and generous leave policies help our employees maintain a healthy balance between their professional and personal lives.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000' },
  { number: '04',heading:"Collaborative Work Environment", para: 'Join a team where collaboration and creativity thrive. Our open office layout and regular team-building activities foster a positive and inclusive work culture.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF' },
  { number: '05', heading: 'Competitive Compensation', para: 'We offer competitive salaries and performance-based bonuses to reward the hard work and dedication of our employees.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000' },
  { number: '06', heading: 'Employee Recognition', para: 'We value the contributions of our team members. Our employee recognition programs celebrate achievements and milestones, fostering a culture of appreciation and motivation.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF' },
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


const images = [
    { src: image1, 
      alt: 'Image 1' ,
      heading: 'Glabal Annual Review',
      para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
    },
    { src: image2, 
      alt: 'Image 2',
            heading: 'Glabal Annual Review',
      para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
     },
    { src: image3, 
      alt: 'Image 3',
            heading: 'Glabal Annual Review',
      para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
     },
    { src: image4, 
      alt: 'Image 4',
            heading: 'Glabal Annual Review',
      para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
     },
    { src: image1, 
      alt: 'Image 5',
            heading: 'Glabal Annual Review',
      para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
     },
    { src: image2, 
      alt: 'Image 6',
            heading: 'Glabal Annual Review',
      para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
     },
    { src: image3, 
      alt: 'Image 7',
            heading: 'Glabal Annual Review',
      para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.'
     }
   
  ];

export default function Career() {

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

  return (
    <div  className={`page ${isVisible ? 'slide-in' : ''}`}>

    <Header />


    <div className='w-full flex flex-col  py-10 space-y-20'>

      {/* heading section */}
      <div className='w-full px-8 flex flex-col lg:flex-row items-start lg:items-end gap-8'>
          <div className='w-full'>
            <h1 className='text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold'>
            Careers  <br/>
            with Pixel  Bharat
            </h1>
          </div>
          <div className='lg:w-2/3 w-full text-left lg:text-right mt-4 lg:mt-0'>
            <h4 className='text-[#4A4A4A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium'>
            Join a team where collaboration and creativity thrive.
            </h4>
          </div>
        </div>

      {/* poster section */}
      <div className='w-full h-1/2 px-8 rounded-[30px]'>
        <img src={CareerPoster} alt="" className='w-full rounded-[30px]' />
      </div>

      {/* about us section */}
      <div className='md:flex px-8 justify-between items-center space-y-8 md:space-y-0'>
        <div className='flex flex-col space-y-8 md:w-1/3'>
          <h3 className='text-[#141414] text-[24px] font-semibold'>Let’s Build something great, together</h3>
          <div>
            <Link to='/find-job'>
            <button
            onMouseEnter={handleMouseEnterContact}
            onMouseLeave={handleMouseLeaveContact}
            className=' py-3 px-8 p justify-center items-start gap-[8px] rounded-[100px] bg-[var(--Default-Black,_#000)] flex-[1_0_0] text-[16px] font-semibold text-white hover:shadow-xl  hover:bg-white hover:border-[1px] border-[1px] border-black hover:border-gray-300 hover:text-black'>
                Find your career with Pixel Bharat
                </button>
                </Link>    
          </div>
        </div>
        <div className='md:w-1/2'>
          <p className=' text-[#4A4A4A] text-[16px] font-medium'>At Pixel Bharat, we believe in the power of collaboration and innovation. Join our dynamic team and be part of a community that is shaping the future of digital marketing, design, and development.</p>
        </div>
      </div>

{/* Employee Benefits */}

<div className='flex flex-col gap-8 px-8'>
  <h2 className='text-[#141414] text-[40px] font-semibold'>Employee Benefits</h2>
<div className="grid justify-center gap-8  py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {Card}
          </div>
          </div>




  




 

    </div>

    <Collaborate />
    <Footer />


  </div>
  )
}
