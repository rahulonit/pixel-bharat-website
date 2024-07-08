import React, { useEffect, useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
// import Cards from '../componets/Cards';
import Collaborate from '../componets/Collaborate';
// import ProjectDataFetcher from '../data/Projectsdata';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import config from '../config';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const buttonLabels = ['All', 'Social Media Management', 'Video Editing', 'eCommerce', 'Mobile App', 'Web Development', 'Graphic Designing', 'UI/UX'];
const Projectsdata = [];

const fetchProjectsData = async () => {
  try {
    const response = await fetch(`${config.apiUrl}api/projects`);
    const data = await response.json();

    // Clear existing data
    Projectsdata.length = 0;

    // Map fetched data and populate Projectsdata array
    data.forEach((project) => {
      Projectsdata.push({
        id: project._id,
        title: project.title,
        description: project.description,
        image: `${config.apiUrl}${project.image}`, // Adjust path if needed
        category: project.category
      });
    });

    // console.log('Projectsdata populated:', Projectsdata);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

function filterProjects(projects, filter) {
  if (filter === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === filter);
}

function truncateDescription(description, wordLimit) {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
}

function Cards({ selectedFilter }) {
  const filteredProjects = filterProjects(Projectsdata, selectedFilter);

  return (
    <div className="grid justify-center gap-8 px-8 py-10 grid-cols-1 lg:grid-cols-3">
      {filteredProjects.map((item) => (
        <div className="w-full overflow-hidden flex flex-col gap-4" key={item.id}>
          <div className="rounded-[24px] relative overflow-hidden">
            <img src={item.image} alt="" className="w-full h-full object-cover rounded-[24px]" />
            <h1 className="inline-flex absolute font-bold top-0 right-0 w-fit lg:p-[16px] p-[4px] m-4 text-[10px] justify-center items-start gap-[8px] rounded-[100px] bg-[var(--Default-White,_#FFF)]">{item.category}</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl mb-2">{item.title}</h1>
            <p className="text-gray-700 text-base">{truncateDescription(item.description, 30)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default function Project() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchProjectsData();
  }, []);
  useEffect(() => {
    setIsVisible(true);

    // Simulate a data fetching delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout as needed
  }, []);

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

  const textheadRef = useRef(null);
  const cus1Ref = useRef(null);
  const cus2Ref = useRef(null);
  const cus3Ref = useRef(null);
  const cus4Ref = useRef(null);
  const cus5Ref = useRef(null);
  const cus6Ref = useRef(null);
  const cus7Ref = useRef(null);
  const cus8Ref = useRef(null);
  const cus9Ref = useRef(null);
  const cus10Ref = useRef(null);
  const mainfaqRef = useRef(null);
  const faq1Ref = useRef(null);
  const faq2Ref = useRef(null);
  const faq3Ref = useRef(null);
  const faq4Ref = useRef(null);
  const faq5Ref = useRef(null);
  const faq6Ref = useRef(null);
  const cardRef = useRef(null);
  const newimg1Ref = useRef(null);
  const newimg2Ref = useRef(null);
  const newimg3Ref = useRef(null);
  const newimg4Ref = useRef(null);
  const newimg5Ref = useRef(null);
  const newimg6Ref = useRef(null);
  const mainimgRef = useRef(null);
  const newimg12Ref = useRef(null);
  const newimg22Ref = useRef(null);
  const newimg32Ref = useRef(null);
  const newimg42Ref = useRef(null);
  const newimg52Ref = useRef(null);
  const newimg62Ref = useRef(null);

  useGSAP(() => {
    const texthead = textheadRef.current;
    const cus1 = cus1Ref.current;
    const cus2 = cus2Ref.current;
    const cus3 = cus3Ref.current;
    const cus4 = cus4Ref.current;
    const cus5 = cus5Ref.current;
    const cus6 = cus6Ref.current;
    const cus7 = cus7Ref.current;
    const cus8 = cus8Ref.current;
    const cus9 = cus9Ref.current;
    const cus10 = cus10Ref.current;
    const mainfaq = mainfaqRef.current;
    const faq1 = faq1Ref.current;
    const faq2 = faq2Ref.current;
    const faq3 = faq3Ref.current;
    const faq4 = faq4Ref.current;
    const faq5 = faq5Ref.current;
    const faq6 = faq6Ref.current;
    const img1 = newimg1Ref.current;
    const img2 = newimg2Ref.current;
    const img3 = newimg3Ref.current;
    const img4 = newimg4Ref.current;
    const img5 = newimg5Ref.current;
    const img6 = newimg6Ref.current;
    const mainimg = mainimgRef.current;
    const img12 = newimg12Ref.current;
    const img22 = newimg22Ref.current;
    const img32 = newimg32Ref.current;
    const img42 = newimg42Ref.current;
    const img52 = newimg52Ref.current;
    const img62 = newimg62Ref.current;

    gsap.from(texthead, {
      x: -400,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: texthead,
        markers: false,
        start: 'top 100%'
      }
    });

    gsap.from(cus1, {
      yPercent: 350,
      duration: 2.3,
      ease: 'power4',
      smooth: 1
    });
    gsap.from(cus2, {
      yPercent: 200,
      duration: 1.6,
      smooth: 1
    });
    gsap.from(cus3, {
      yPercent: 200,
      duration: 1.9,
      smooth: 1
    });
    gsap.from(cus4, {
      yPercent: 200,
      duration: 2,
      smooth: 1
    });
    gsap.from(cus5, {
      yPercent: 200,
      duration: 2.2,
      smooth: 1
    });
    gsap.from(cus6, {
      yPercent: 200,
      duration: 2.4,
      smooth: 1
    });
    gsap.from(cus7, {
      yPercent: 200,
      opacity: 0,
      duration: 1.2,
      smooth: 1
    });
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
    });
    gsap.from(cus9, {
      y: 200,
      opacity: 0,
      duration: 1.3,
      smooth: 1
      // scrollTrigger: {
      //   trigger: cus9,
      //   markers: false,
      //   start: "top 150%"
      // }
    });

    gsap.from(cus10, {
      y: 150,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: 'bottom 120%'
      }
    });

    gsap.from(mainfaq, {
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 10%'
      }
    });
    gsap.from(faq1, {
      scale: 0,
      duration: 1,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 110%'
      }
    });
    gsap.from(faq2, {
      scale: 0,
      duration: 1.3,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(faq3, {
      scale: 0,
      duration: 1.6,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 90%'
      }
    });

    gsap.from(faq4, {
      scale: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 80%'
      }
    });
    gsap.from(faq5, {
      scale: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 75%'
      }
    });
    gsap.from(faq6, {
      scale: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img1, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img12, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });

    gsap.from(img2, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img22, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img3, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img32, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img4, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img42, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img5, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img52, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img6, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img62, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
  });

  return (
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <Header />

      <div className="blur-section">
        <div className="px-6 py-10 ">
          <div className="pb-6 sm:pb-8">
            <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold flex gap-2 overflow-hidden flex-wrap w-100 ">
              <p ref={cus2Ref}>Design</p>
              <p ref={cus3Ref}> Kits</p>
              <p ref={cus4Ref}>for</p> <p ref={cus5Ref}>Creative</p>
              <p ref={cus6Ref}>Designers</p>

            </p>
           
          </div>
          <div className="flex flex-wrap gap-4">
            {buttonLabels.map((label) => (
              <div key={label}>
                <button className={`flex py-2 px-4 sm:py-4 sm:px-6 justify-center rounded-[100px] border-[1px] text-[#212529] text-center text-[14px] sm:text-[16px] font-semibold ${selectedFilter === label ? 'bg-black text-white' : ''}`} onClick={() => setSelectedFilter(label)} onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                  {label}
                </button>
              </div>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="loader"></div> {/* You can style this loader in your CSS */}
          </div>
        ) : (
          <>
            <Cards selectedFilter={selectedFilter} />
          </>
        )}
        <Collaborate />
        <Footer />
      </div>
    </div>
  );
}
