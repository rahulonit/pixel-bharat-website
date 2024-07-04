import React, { useEffect, useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Cards from '../componets/Cards';
import Collaborate from '../componets/Collaborate';
import ProjectDataFetcher from '../data/Projectsdata';

const buttonLabels = ["All", "Social Media Management", "Video Editing", "eCommerce", "Mobile App", "Web Development", "Graphic Designing", "UI/UX"];

export default function Project() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <Header />

      <div className='blur-section'>
        <div className='px-8 py-10 '>
          <div className='pb-6 sm:pb-8'>
            <h1 className='text-[#141414] text-[36px] sm:text-[48px] lg:text-[74px] font-bold'>
              Design Kits for Creative <br className='hidden sm:block' /> Designers
            </h1>
          </div>
          <div className='flex flex-wrap gap-4'>
            {buttonLabels.map((label) => (
              <div key={label}>
                <button
                  className={`flex py-2 px-4 sm:py-4 sm:px-6 justify-center rounded-[100px] border-[1px] text-[#212529] text-center text-[14px] sm:text-[16px] font-semibold ${selectedFilter === label ? 'bg-black text-white' : ''}`}
                  onClick={() => setSelectedFilter(label)}
                  onMouseEnter={handleMouseEnterContact}
                  onMouseLeave={handleMouseLeaveContact}
                >
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
            <ProjectDataFetcher />
            <Cards selectedFilter={selectedFilter} />
          </>
        )}
        <Collaborate />
        <Footer />
      </div>
    </div>
  );
}
