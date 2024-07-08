import React, { useEffect, useState, useRef } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate';
import JobPoster from '../assets/job-poster.png';
import { useNavigate } from 'react-router-dom';
import JobDataFetcher from '../data/jobData';
import { eventData } from '../data/eventData';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

export default function FindJob() {
  const [isVisible, setIsVisible] = useState(false);
  const [jobProfile, setJobProfile] = useState('');
  const [location, setLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showProfileSuggestions, setShowProfileSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const jobProfiles = ['UI/UX Designer', 'Frontend Developer', 'Backend Developer', 'Project Manager'];
  const locations = ['Mohali, India', 'New York, USA', 'London, UK', 'Berlin, Germany'];

  const profileRef = useRef(null);
  const locationRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileSuggestions(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationSuggestions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Effect to update filtered jobs when jobData changes
  useEffect(() => {
    setFilteredJobs(jobData);
  }, [jobData]);

  const handleProfileChange = (e) => {
    const value = e.target.value;
    setJobProfile(value);
    setSuggestions(jobProfiles.filter(profile => profile.toLowerCase().includes(value.toLowerCase())));
    if (value === '') {
      setFilteredJobs(jobData);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setLocationSuggestions(locations.filter(loc => loc.toLowerCase().includes(value.toLowerCase())));
    if (value === '') {
      setFilteredJobs(jobData);
    }
  };

  const handleSearch = () => {
    if (jobProfile === '' && location === '') {
      setFilteredJobs(jobData);
    } else {
      const filtered = jobData.filter(job => {
        return (
          job.title.toLowerCase().includes(jobProfile.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
        );
      });
      setFilteredJobs(filtered);
    }
  };

  const viewJobProfileDetail = (job) => {
    const id = job.id;
    navigate(`/job-profile/${ id}`);
  }

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
  const cus11Ref = useRef(null)
  const cus12Ref = useRef(null)
  const cus13Ref = useRef(null)
  const cus14Ref = useRef(null)
  const mainfaqRef=useRef(null)
  const faq1Ref=useRef(null)
  const faq2Ref=useRef(null)
  const faq3Ref=useRef(null)
  const faq4Ref=useRef(null)
  const faq5Ref=useRef(null)
  const cardRef = useRef(null);

  
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
    const cus11 = cus11Ref.current
    const cus12 = cus12Ref.current
    const cus13 = cus13Ref.current
    const cus14 = cus14Ref.current
    const mainfaq=mainfaqRef.current
    const faq1=faq1Ref.current
    const faq2=faq2Ref.current
    const faq3=faq3Ref.current
    const faq4=faq4Ref.current
    const faq5=faq5Ref.current
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
        trigger: cus8,
        markers: false,
        start: 'top 150%'
      }
    })
    gsap.from(cus9, {
      y:200,
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
    gsap.from(cus11, {
      y: 150,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: "bottom 10%"
      }
    })
    gsap.from(cus12, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: "top 100%"
      }
    })

    gsap.from(cus13, {
      x: 600,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus13,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(cus14, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus14,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(mainfaq, {
     
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
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
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
      }
    }) 
    gsap.from(faq5, {
      yPercent: 700,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
      }
    })
  })
  return (
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <JobDataFetcher setJobs={setJobData} />
      <Header />

      <div className='w-full flex flex-col py-10 space-y-20'>
        {/* heading section */}
        <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold flex gap-5 overflow-hidden pl-8"><p ref={cus2Ref}>Find</p><p ref={cus3Ref}>a</p><p ref={cus4Ref}>job</p></p>
        {/* poster section */}
        <div ref={cus9Ref} className='w-full h-1/2 px-8 rounded-[30px]'>
          <img src={JobPoster} alt="" className='w-full rounded-[30px]' />
        </div>

        {/* search filter */}
        <div className='flex lg:justify-between px-8 lg:flex-row flex-col gap-4'>
          <h1 className='text-[#141414] text-[24px] font-semibold'>Let’s Build something great, together</h1>

          <div className='flex lg:flex-row flex-col gap-4'>
            <div className='relative' ref={profileRef}>
              <input
                type="text"
                className="flex w-full py-3 px-8 items-center self-stretch rounded-[50px] border-[1px] focus:outline-none focus:shadow-outline"
                placeholder="Job Profile"
                value={jobProfile}
                onChange={handleProfileChange}
                onFocus={() => setShowProfileSuggestions(true)}
              />
              {showProfileSuggestions && suggestions.length > 0 && (
                <ul className='absolute bg-white border rounded-md mt-1 w-full max-h-60 overflow-y-auto'>
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className='p-2 cursor-pointer hover:bg-gray-200'
                      onClick={() => {
                        setJobProfile(suggestion);
                        setShowProfileSuggestions(false);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className='relative' ref={locationRef}>
              <input
                type="text"
                className="flex w-full py-3 px-8 items-center self-stretch rounded-[50px] border-[1px] focus:outline-none focus:shadow-outline"
                placeholder="Location"
                value={location}
                onChange={handleLocationChange}
                onFocus={() => setShowLocationSuggestions(true)}
              />
              {showLocationSuggestions && locationSuggestions.length > 0 && (
                <ul className='absolute bg-white border rounded-md mt-1 w-full max-h-60 overflow-y-auto'>
                  {locationSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className='p-2 cursor-pointer hover:bg-gray-200'
                      onClick={() => {
                        setLocation(suggestion);
                        setShowLocationSuggestions(false);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <button
                className='flex py-3 px-8 w-[186px] hover:bg-white hover:border-[1px] hover:text-black hover:border-gray-300 justify-center items-center gap-[8px] rounded-[100px] border-[1px] bg-black text-white text-center text-[16px] font-bold'
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* job section */}
        <div className='flex lg:flex-row h-fit flex-col px-8  lg:justify-between gap-8 '>
          {/* Section first */}
          <div ref={cus8Ref} className="flex flex-col gap-8 w-full">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div key={index} className="flex  flex-col hovereffect2 hover:bg-white p-8 rounded-[24px] bg-[#F6F6F6]" onClick={() => viewJobProfileDetail(job)}>
                  <div className="flex flex-col gap-16">
                    <div>
                      <h2 className="text-[#000] text-[24px] font-semibold">{job.title}</h2>
                      <h4 className="text-[#4A4A4A] text-[16px] font-bold">{job.positions}</h4>
                      <p className="text-[#4A4A4A] text-[16px] font-medium">{job.description}</p>
                    </div>
                    <div className="text-[#4A4A4A] text-[16px]">
                      <h4 className="font-bold">{job.location}</h4>
                      <h4 className="font-medium">{job.category}</h4>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[#4A4A4A] text-[16px]">No jobs found matching your criteria.</p>
            )}
          </div>

          {/* Section second */}
          <div ref={cus13Ref} className='grid justify-center items-center gap-8 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 h-fit'>
            {eventData.map((event, index) => (
              <div key={index} className='flex flex-col gap-4 flex-1 w-full'>
                <img src={event.image} className='rounded-[24px] bg-[url(https://example.com/path-to-image.jpg)]_lightgray_50%_/_cover_no-repeat]' alt={event.title} />
                <h1 className='self-stretch text-[#141414] text-[24px] font-semibold'>{event.title}</h1>
                <p>{event.para}</p>
                <button className='flex hover:bg-white hover:border-[1px] hover:text-black hover:border-gray-300 w-[186px] py-3 px-8 justify-center items-end gap-[8px] rounded-[100px] border-[1px] bg-[#000] text-white'>
                  {event.buttonLabel}
                </button>
              </div>
            ))}

            <div className='justify-center py-16 items-center rounded-[24px] border-[2px] p-8 w-full'>
              <h1 className='text-[#000] text-center text-[24px] font-semibold'>Pixel Bharat</h1>
              <h4 className='text-[#4A4A4A] text-center text-[16px] font-bold'>Learn more about us</h4>
            </div>
          </div>
        </div>
      </div>

      <Collaborate />
      <Footer />
    </div>
  );
}