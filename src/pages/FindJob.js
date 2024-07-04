import React, { useEffect, useState, useRef } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate';
import JobPoster from '../assets/job-poster.png';
import { useNavigate } from 'react-router-dom';
import JobDataFetcher from '../data/jobData';
import { eventData } from '../data/eventData';

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

  return (
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <JobDataFetcher setJobs={setJobData} />
      <Header />

      <div className='w-full flex flex-col py-10 space-y-20'>
        {/* heading section */}
        <h1 className='text-[#141414] px-8 text-[36px] sm:text-[48px] lg:text-[74px] font-bold'>Find a Job</h1>

        {/* poster section */}
        <div className='w-full h-1/2 px-8 rounded-[30px]'>
          <img src={JobPoster} alt="" className='w-full rounded-[30px]' />
        </div>

        {/* search filter */}
        <div className='flex lg:justify-between px-8 lg:flex-row flex-col gap-4'>
          <h1 className='text-[#141414] text-[24px] font-semibold'>Let’s Build something great, together</h1>

          <div className='flex gap-4'>
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
          <div className="flex flex-col gap-8 w-full">
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
          <div className='grid justify-center items-center gap-8 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 h-fit'>
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