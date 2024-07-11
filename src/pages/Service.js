import React, { useState, useEffect } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate';
import { useParams, useLocation } from 'react-router-dom';

import { ReactComponent as MoreArrowIcon } from '../assets/morearraow.svg';
import WorkIcon1 from '../assets/work-icon1.svg';
import WorkIcon2 from '../assets/work-icon2.svg';
import WorkIcon3 from '../assets/work-icon3.svg';
import WorkIcon4 from '../assets/work-icon4.svg';

import { serviceData } from '../data/serviceData';

export default function Service({isOpen}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const { title } = useParams();
  const location = useLocation();
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = serviceData.find((profile) => profile.title === title);
    setService(selectedService);
  }, [title]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <Header />
      <div className="blur-section">
        <div className="w-full flex flex-col py-10 space-y-10 lg:space-y-20">
          {/* main heading */}

          <div className="mx-8 ">
            <h1 className=" text-[#141414] text-[36px] sm:text-[48px] lg:text-[74px] font-bold">{service.title}</h1>
            {/* <hr /> */}
          </div>

          <div className="px-8 ">
            <h2 className="pb-8 text-[40px] font-semibold">
              {service.subtitle}
            </h2>
            <div className="flex  lg:flex-row flex-col justify-between gap-8 items-start">
              <div className="flex-1 ">
                {service.buttonLabels && (
                  <div className="flex flex-col gap-8 ">
                    <div className="">
                      <div className="flex flex-wrap gap-4">
                        {service.buttonLabels.map((label, index) => (
                          <div key={index}>
                            <button className="flex py-2 px-4 sm:py-4 sm:px-6 justify-center rounded-[100px] border-[1px] text-[#000] text-center text-[14px] sm:text-[16px] font-semibold hover:bg-black hover:text-white" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                              {label}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools Section */}

                    {/* {location.pathname !== '/service/Social%20Media%20Marketing' && (
                      <div className="flex p-[24px] flex-col items-start gap-[24px] self-stretch rounded-[36px] border-[2px] bg-[#FFF]">
                        <h2 className="text-[24px] font-semibold">{service.toolname}</h2>
                        <div className="flex flex-wrap gap-4">{service.icons && service.icons.map((icon, idx) => <img key={idx} className="w-[60px] h-[60px] p-[6px] flex-col justify-center items-center gap-[4px] rounded-[12px] bg-[var(--Gray-Lightest-2,_#F7F9FC)]" src={icon} alt={`Icon ${idx + 1}`} />)}</div>
                      </div>
                    )} */}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="flex-1 text-[16px] text-[#4a4a4a] font-medium">
                <p>{service.description}</p>
              </div>
            </div>
          </div>

          {/* poster */}
          <div className="w-full flex-1 h-1/2 px-8 rounded-[30px]">
            <img src={service.poster} alt={service.title} className="w-full rounded-[30px]" />
          </div>

          {/* third section*/}
          <div className="md:flex px-8 justify-between space-y-8 md:space-y-0">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#ABABAB] text-[20px] font-medium">{service.thirdsectionHeading1}</h2>
              <h3 className=" text-[#141414] text-[24px] font-semibold">{service.thirdsectionHeading2}</h3>
            </div>
            <div className="md:w-1/2">
              <p className="text-[#4A4A4A] text-[16px] font-medium">{service.thirdsectionPara}</p>
            </div>
          </div>

          {/* Our Approaches */}
          <div className="px-8 flex flex-col gap-8">
  <h2 className="self-stretch text-[#141414] text-[40px] font-semibold">Our Approach </h2>
  <div className="flex flex-wrap gap-8">
    <div className="flex-auto lg:w-[33.33%] min-h-[250px] rounded-[24px] bg-[#F6F6F6] p-8">
      <h1 className="text-[#ABABAB] text-[20px] font-medium pb-4">01</h1>
      <h2 className="text-[#000] text-[24px] font-semibold pb-4">{service.firstheading}</h2>
      <h3 className="text-[#4A4A4A] text-[18px] font-medium pb-4">{service.firstheading2}</h3>
      <ul className="text-[#4A4A4A] text-[16px]  list-disc pl-6">
      {service.first?.map((first, firstIndex) => {
    const parts = first.split(': ');
    return (
      <li className="pt-1" key={firstIndex}>
        {parts.length === 2 ? (
          <>
            <span className="font-bold text-[16px]">{parts[0]}:</span>
            <span className="pl-1">{parts[1]}</span>
          </>
        ) : (
          <span>{first}</span>
        )}
      </li>
    );
  })}
      </ul>
    </div>
    <div className="flex-auto lg:w-[33.33%] bg-black min-h-[250px] rounded-[24px] p-8">
      <h1 className="text-[#ABABAB] text-[20px] font-medium pb-4">02</h1>
      <h2 className="text-white text-[24px] font-semibold pb-4">{service.secondheading}</h2>
      <h3 className="text-[#888] text-[18px] font-medium pb-4">{service.secondheading2}</h3>
      <ul className="text-white text-[16px]  list-disc pl-6">
      {service.second?.map((second, secondIndex) => {
    const parts = second.split(': ');
    return (
      <li className="pt-1" key={secondIndex}>
        {parts.length === 2 ? (
          <>
            <span className="font-bold text-[16px]">{parts[0]}:</span>
            <span className="pl-1">{parts[1]}</span>
          </>
        ) : (
          <span>{second}</span>
        )}
      </li>
    );
  })}
      </ul>
    </div>
    <div className="flex-auto lg:w-[33.33%] bg-black min-h-[250px] rounded-[24px] p-8">
      <h1 className="text-[#ABABAB] text-[20px] font-medium pb-4">03</h1>
      <h2 className="text-white text-[24px] font-semibold pb-4">{service.thirdheading}</h2>
      <h3 className="text-[#888] text-[18px] font-medium pb-4">{service.thirdheading2}</h3>
      <ul className="text-white text-[16px]  list-disc pl-6">
      {service.third?.map((third, thirdIndex) => {
    const parts = third.split(': ');
    return (
      <li className="pt-1" key={thirdIndex}>
        {parts.length === 2 ? (
          <>
            <span className="font-bold text-[16px]">{parts[0]}:</span>
            <span className="pl-1">{parts[1]}</span>
          </>
        ) : (
          <span>{third}</span>
        )}
      </li>
    );
  })}
      </ul>
    </div>
    <div className="flex-auto lg:w-[33.33%] min-h-[250px] rounded-[24px] bg-[#F6F6F6] p-8">
      <h1 className="text-[#ABABAB] text-[20px] font-medium pb-4">04</h1>
      <h2 className="text-[#000] text-[24px] font-semibold pb-4">{service.fourthheading}</h2>
      <h3 className="text-[#4A4A4A] text-[18px] font-medium pb-4">{service.fourthheading2}</h3>
      <ul className="text-[#4A4A4A] text-[16px]  list-disc pl-6">
      {service.fourth?.map((fourth, fourthIndex) => {
    const parts = fourth.split(': ');
    return (
      <li className="pt-1" key={fourthIndex}>
        {parts.length === 2 ? (
          <>
            <span className="font-bold text-[16px]">{parts[0]}:</span>
            <span className="pl-1">{parts[1]}</span>
          </>
        ) : (
          <span>{fourth}</span>
        )}
      </li>
    );
  })}
      </ul>
    </div>
    <div className="flex-auto lg:w-[33.33%] min-h-[250px] rounded-[24px] bg-[#F6F6F6] p-8">
  <h1 className="text-[#ABABAB] text-[20px] font-medium pb-4">05</h1>
  <h2 className="text-[#000] text-[24px] font-semibold pb-4">{service.fifthheading}</h2>
  <h3 className="text-[#4A4A4A] text-[18px] font-medium pb-4">{service.fifthheading2}</h3>
  <ul className="text-[#4A4A4A] text-[16px] list-disc pl-6">
  {service.fifth?.map((fifth, fifthIndex) => {
    const parts = fifth.split(': ');
    return (
      <li className="pt-1" key={fifthIndex}>
        {parts.length === 2 ? (
          <>
            <span className="font-bold text-[16px]">{parts[0]}:</span>
            <span className="pl-1">{parts[1]}</span>
          </>
        ) : (
          <span>{fifth}</span>
        )}
      </li>
    );
  })}
  </ul>
</div>

    <div className="flex-auto lg:w-[33.33%] bg-black min-h-[250px] rounded-[24px] p-8">
      <h1 className="text-[#ABABAB] text-[20px] font-medium pb-4">06</h1>
      <h2 className="text-white text-[24px] font-semibold pb-4">{service.sixthheading}</h2>
      <h3 className="text-[#888] text-[18px] font-medium pb-4">{service.sixthheading2}</h3>
      <ul className="text-white text-[16px] list-disc pl-6">
  {service.sixth?.map((sixth, sixthIndex) => {
    const parts = sixth.split(': ');
    return (
      <li className="pt-1" key={sixthIndex}>
        {parts.length === 2 ? (
          <>
            <span className="font-bold text-[16px]">{parts[0]}:</span>
            <span className="pl-1">{parts[1]}</span>
          </>
        ) : (
          <span>{sixth}</span>
        )}
      </li>
    );
  })}
</ul>

    </div>
  </div>
</div>


          {/* fifth section */}
          <div className="bg-black mx-8 p-[30px] lg:p-[64px] text-white rounded-[24px] gap-[64px] flex lg:flex-row flex-col justify-between">
            <div className="flex lg:flex-row flex-col gap-[64px]">
              <div className="flex flex-col gap-8 justify-between">
                <div>
                  <h1 className="text-[#FFF] text-[64px] font-semibold capitalize">{service.revenue}</h1>
                  <h2 className="text-[rgba(255,_255,_255,_0.60)] text-[16px] font-medium">More revenues for the brand</h2>
                </div>
                <div>
                  <h1 className="text-[#FFF] text-[64px] font-semibold capitalize">{service.trust}</h1>
                  <h2 className="text-[rgba(255,_255,_255,_0.60)] text-[16px] font-medium">Brands trust us</h2>
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-between">
                <div>
                  <h1 className="text-[#FFF] text-[64px] font-semibold capitalize">{service.reached}</h1>
                  <h2 className="text-[rgba(255,_255,_255,_0.60)] text-[16px] font-medium">Audiences reached</h2>
                </div>
                <div>
                  <h1 className="text-[#FFF] text-[64px] font-semibold capitalize">{service.awards}</h1>
                  <h2 className="text-[rgba(255,_255,_255,_0.60)] text-[16px] font-medium">Worldwide awards</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[64px]">
              <div className="flex flex-col gap-5">
                <h1 className="text-[#FFF] text-[40px] font-semibold capitalize">Our Commitments</h1>
                <p className="text-[rgba(255,_255,_255,_0.60)] text-[16px] font-medium">{service.commitmentsPara}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <h3 className="text-[#FFF] text-[18px] font-semibold capitalize">Learn More</h3>
                <MoreArrowIcon />
              </div>
            </div>
          </div>

          {/* sixth section */}
          <div className="flex px-8 lg:flex-row flex-col gap-[64px]">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#141414] text-[40px] font-semibold">How it Works</h1>
                <p className="self-stretch text-[#4A4A4A] text-[16px] font-medium">{service.worksdesc}</p>
              </div>
              <div className="rounded-[40px] w-fit h-fit">
                <img src={service.workImg} alt='Work image' />
              </div>
            </div>

            <div className="flex-1 flex flex-col lg:justify-between gap-4 ">
              <div className="flex  lg:flex-row gap-4 lg:gap-8">
                <img src={WorkIcon1} alt="Discovery Icon" className=" flex p-[30px] hundred justify-center items-center gap-[10px] rounded-[24px] bg-[var(--Grays-Black,_#000)]" />
                <div className="flex flex-col ">
                  <h1 className="text-[24px] font-semibold">{service.head1}</h1>
                  <p className="self-stretch text-[#4A4A4A] text-[16px] font-medium">{service.discovery}</p>
                </div>
              </div>

              <div className="flex  lg:flex-row gap-4 lg:gap-8">
                <img src={WorkIcon2} alt="Strategy Icon" className=" flex p-[30px] hundred justify-center items-center gap-[10px] rounded-[24px] bg-[var(--Grays-Black,_#000)]" />
                <div className="flex flex-col ">
                  <h1 className="text-[24px] font-semibold">{service.head2}</h1>
                  <p className="self-stretch text-[#4A4A4A] text-[16px] font-medium">{service.strategy}</p>
                </div>
              </div>

              <div className="flex  lg:flex-row gap-4 lg:gap-8">
                <img src={WorkIcon3} alt="Execution Icon" className=" flex p-[30px] hundred justify-center items-center gap-[10px] rounded-[24px] bg-[var(--Grays-Black,_#000)]" />
                <div className="flex flex-col ">
                  <h1 className="text-[24px] font-semibold">{service.head3}</h1>
                  <p className="self-stretch text-[#4A4A4A] text-[16px] font-medium">{service.execution}</p>
                </div>
              </div>

              <div className="flex  lg:flex-row gap-4 lg:gap-8">
                <img src={WorkIcon4} alt="Measurement Icon" className=" flex p-[30px] hundred justify-center items-center gap-[10px] rounded-[24px] bg-[var(--Grays-Black,_#000)]" />
                <div className="flex flex-col ">
                  <h1 className="text-[24px] font-semibold">{service.head4}</h1>
                  <p className="self-stretch text-[#4A4A4A] text-[16px] font-medium">{service.measurement}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Collaborate isOpen={isOpen}/>
        <Footer />
      </div>
    </div>
  );
}
