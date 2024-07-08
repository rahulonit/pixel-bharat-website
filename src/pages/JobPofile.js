import React, { useState, useEffect } from 'react';
import { ReactComponent as Location } from '../assets/job-profile/location-icon.svg';
import { ReactComponent as People } from '../assets/job-profile/People-icon.svg';
import { useParams } from 'react-router-dom';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate';
import JobApplicationPopup from '../componets/JobApplicationPopup'; // import the popup component
import config from '../config';
import CollabPopup from '../componets/Collabpopup';

export default function JobProfile({isOpen}) {
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const [isCollabPopupOpen, setIsCollabPopupOpen] = useState(false); // state to manage popup visibility

  const [isPopupOpen, setIsPopupOpen] = useState(false); // state to manage popup visibility
  const [isVisible, setIsVisible] = useState(false);
  const [job, setJob] = useState(null); // state to hold job details
  var { id } = useParams(); // get title parameter from URL

  useEffect(() => {
    setIsVisible(true); // set visibility state
     fetchJobData(); // fetch job data when component mounts
  }, []);


  // Function to fetch job data from API
  const fetchJobData = async () => {
// console.log('fetchJobData');
    try {
      console.log(id);
      const response = await fetch(`${config.apiUrl}api/careers/${id}`); // adjust API endpoint as per your server setup
      if (!response.ok) {
        throw new Error('Failed to fetch job data');
      }
      const data = await response.json(); // extract JSON data from response
      setJob(data); // update job state with fetched data
    } catch (error) {
      console.error('Error fetching job data:', error);
      // Handle error state if needed
    }
  };

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

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleCollabPopupOpen = () => {
    setIsCollabPopupOpen(true);
  };

  const handleCollabPopupClose = () => {
    setIsCollabPopupOpen(false);
  };

  if (!job) {
    return <div>Loading...</div>; // Show loading indicator until data is fetched
  }

  return (
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <Header />
      <div className="w-full flex flex-col py-10 space-y-20">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 px-8">
          <h1 className="text-[#141414] text-[36px] sm:text-[48px] lg:text-[74px] font-bold">{job.title}</h1>
          <div className="flex flex-col  gap-2">
            <div className="flex flex-row gap-4 items-center">
              <Location className="w-[22px] h-[33px]" />
              <h5 className="text-[#4A4A4A] text-[24px] font-semibold">{job.location}</h5>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <People className="w-[22px] h-[33px]" />
              <h5 className="text-[#4A4A4A] text-[24px] font-semibold">{job.positions} open position</h5>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-h-[510px] justify-between p-[30px] lg:p-[64px] mx-8 bg-[#F6F6F6] gap-8 rounded-[36px]">
          <div className='flex flex-col gap-2'>
            <h1 className='self-stretch text-[24px] font-semibold'>About Us</h1>
            <p className='self-stretch text-[#4A4A4A] text-[16px]'>{job.about}</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='self-stretch text-[24px] font-semibold'>Job Description</h1>
            <p className='self-stretch text-[#4A4A4A] text-[16px]'>{job.description}</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='self-stretch text-[24px] font-semibold'>Key Responsibilities</h1>
            <p className='self-stretch text-[#4A4A4A] text-[16px]'>{job.keyResponsibilities}</p>
            <ul className="self-stretch text-[#4A4A4A] text-[16px] list-inside list-disc pl-2">
              {job.keyResponsibility?.map((responsibility, responsibilityIndex) => (
                <li key={responsibilityIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <div>
            <button
              onMouseEnter={handleMouseEnterContact}
              onMouseLeave={handleMouseLeaveContact}
              onClick={handlePopupOpen} // open the popup on click
              className='px-8 py-3 text-white rounded-full bg-black text-[16px] font-semibold  hover:shadow-xl border-[1px] hover:bg-white hover:border-[1px] hover:border-gray-400 hover:text-black'>
              Apply Now!
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-8 flex-wrap px-8">
          <div className="flex-auto lg:max-w-[calc(33%-16px)] min-h-[400px] rounded-[24px] border-[2px] p-8">
            <h2 className="text-[#000] text-[24px] font-semibold pb-4">Skill Required</h2>
            <ul className="text-[#4A4A4A] text-[20px] list-inside list-disc pl-2">
              {job.skills?.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex-auto lg:max-w-[calc(33%-16px)] bg-black min-h-[400px] rounded-[24px] p-8">
            <h2 className="text-white text-[24px] font-semibold pb-4">Responsibilities</h2>
            <ul className="text-white text-[20px] list-inside list-disc pl-2">
              {job.responsibilities?.map((responsibility, responsibilityIndex) => (
                <li key={responsibilityIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div className="flex-auto lg:max-w-[calc(33%-16px)] min-h-[400px] rounded-[24px] border-[2px] p-8">
            <h2 className="text-[#000] text-[24px] font-semibold pb-4">Nice To Have</h2>
            <ul className="text-[#4A4A4A] text-[20px] list-inside list-disc pl-2">
              {job.niceToHave?.map((nice, niceIndex) => (
                <li key={niceIndex}>{nice}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex px-8 flex-col space-y-8">
          <h2 className="text-[#ABABAB] text-[20px] font-medium">PERKS</h2>
          <div className=" flex lg:flex-row flex-col gap-8 ">
            <div className="flex flex-col gap-4  w-full  rounded-[24px] bg-[#F6F6F6] p-8">
              <h3 className="text-[#ABABAB] text-[20px] font-medium">01</h3>
              <h2 className="text-[#000] text-[24px] font-semibold">Salary</h2>
              <p className="text-[#4A4A4A] text-[16px] font-bold">{job.salary}</p>
            </div>
            <div className="flex flex-col gap-4  w-full  rounded-[24px] bg-[#F6F6F6] p-8">
              <h3 className="text-[#ABABAB] text-[20px] font-medium">02</h3>
              <h2 className="text-[#000] text-[24px] font-semibold">Exchange Program</h2>
              <p className="text-[#4A4A4A] text-[16px] font-bold">{job.exchangeProgram}</p>
            </div>
            <div className="flex flex-col gap-4  w-full  rounded-[24px] bg-[#F6F6F6] p-8">
              <h3 className="text-[#ABABAB] text-[20px] font-medium">03</h3>
              <h2 className="text-[#000] text-[24px] font-semibold">Great Work Place</h2>
              <p className="text-[#4A4A4A] text-[16px] font-bold">{job.greatWorkPlace}</p>
            </div>
          </div>
        </div>
      </div>
      <Collaborate isOpen={isOpen}/>
      <Footer />
      {isPopupOpen && (
        <JobApplicationPopup jobTitle={job.title} onClose={handlePopupClose} />
      )}
  
    </div>
  );
}
