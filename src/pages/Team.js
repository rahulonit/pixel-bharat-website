import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import TeamPic from '../assets/team-pic.png';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate';
import Carousel from '../componets/Carousel';
import ProfilePic from '../assets/profile.png';

import defaultimg from '../assets/default_img.png'

import config from '../config';
import { ReactComponent as FacebookIcon } from '../assets/Team/facebook-icon-Team.svg';
import { ReactComponent as InstagramIcon } from '../assets/Team/instagram-icon-Team.svg';
import { ReactComponent as TwitterIcon } from '../assets/Team/twitter-icon-Team.svg';

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [teammates, setTeammates] = useState([]);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  console.log(teammates);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  async function fetchTeamData() {
    try {
      const response = await fetch(`${config.apiUrl}api/teams`);
      if (!response.ok) {
        throw new Error('Failed to fetch team data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching team data:', error);
      throw error;
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeamData();
        setTeammates(data); // Assuming your API returns an array of team members
        setIsVisible(true); // Show the component after data is fetched
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchData();
  }, []);

  const TeammateCard = ({ teammate }) => (
    <div className="flex flex-col justify-start items-start gap-[16px] rounded-[20px] border-[1px]">
      <div className="relative w-full h-[240px]">

      <div className="absolute w-full inset-0 bg-cover bg-no-repeat bg-center rounded-t-[20px]" style={{ backgroundImage: `url(${defaultimg})` }}
        ></div>
      
        <div className="absolute w-full inset-0 bg-cover bg-no-repeat bg-center rounded-t-[20px]" style={{ backgroundImage: `url(${config.apiUrl + teammate.image.replace(/\\/g, '/')})` }}
        ></div>

      </div>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-[20px] font-semibold">{teammate.name}</h2>
            <h4 className="text-[#4A4A4A] text-[16px] font-medium">{teammate.designation}</h4>
          </div>
          <div>
            <p className="text-[#808080] text-[14px]">{teammate.description}</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <a target="_blank" href={teammate.twitter}>
            <TwitterIcon className="flex w-[36px] h-[36px] p-[9px] justify-center items-center rounded-[100px] bg-[#F2F4F7]" />
          </a>
          <a target="_blank" href={teammate.insta}>
            <InstagramIcon className="flex w-[36px] h-[36px] p-[9px] justify-center items-center rounded-[100px] bg-[#F2F4F7]" />
          </a>
          <a target="_blank" href={teammate.linkedin}>
            <FacebookIcon className="flex w-[36px] h-[36px] p-[9px] justify-center items-center rounded-[100px] bg-[#F2F4F7]" />
          </a>
        </div>
      </div>
    </div>
  );
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
      <div className="blur-section">
        <div className="w-full flex flex-col  py-10 space-y-20">
          {/* main heading */}

          <h1 className="text-[#141414] text-[36px] sm:text-[48px] lg:text-[64px] font-bold px-8">From the start, we sought discovery.</h1>

          {/* poster */}
          <div className="w-full h-1/2 px-8 rounded-[30px]">
            <img src={TeamPic} alt="" className="w-full rounded-[30px]" />
          </div>

          {/* our goal section */}
          <div className="md:flex px-8 justify-between space-y-8 md:space-y-0">
            <h2 className="text-[#ABABAB] text-[20px] font-medium">Our Goal</h2>
            <div className="md:w-1/2">
              <p className=" text-[#4A4A4A] text-[16px] font-medium">Our mission is to innovate and inspire. We strive to deliver top-notch solutions that meet and exceed our clients' expectations. Our goal is to continuously improve and make a positive impact in our field. </p>
            </div>
          </div>

          {/* our goal section */}
          <div className="flex lg:flex-row px-8 flex-col gap-8 justify-center ">
            {/* first card */}
            <div className="flex lg:w-[438px] p-8 flex-col items-start gap-[32px] rounded-[30px] border-[2px]">
              <h3 className="text-[#141414] text-center text-[24px] font-semibold">Projects Completed</h3>
              <h1 className="self-stretch text-[#141414] text-[64px] font-bold">40</h1>
            </div>
            {/* second card */}
            <div className="flex lg:w-[438px] p-8 flex-col items-start gap-[32px] rounded-[30px] border-[2px] ">
              <h3 className="text-[#141414] text-center text-[24px] font-semibold">Ongoing Projects</h3>
              <h1 className="self-stretch text-[#141414] text-[64px] font-bold">15</h1>
            </div>
          </div>

          {/* since 2024 section */}
          <div className="md:flex px-8 justify-between space-y-8 md:space-y-0">
            <h2 className="text-[#ABABAB] text-[20px] font-medium">Since 2024</h2>
            <div className="md:w-1/2">
              <p className=" text-[#4A4A4A] text-[16px] font-medium">Since our founding in 2024, we have consistently delivered outstanding results. Our commitment to quality and innovation has enabled us to grow and expand our capabilities.</p>
            </div>
          </div>

          {/* Team section */}
          <div>
            <div className="flex lg:justify-between lg:flex-row flex-col  px-8">
              <div>
                <h2 className="text-[#ABABAB]  text-[20px] font-medium pb-8">Our Team</h2>
              </div>
              <div className="flex md:flex-row gap-8 flex-col justify-end">
                <div className="md:w-1/2">
                  <p className=" text-[#4A4A4A] text-[16px] font-medium">Our team is composed of talented and dedicated professionals who are passionate about what they do.</p>
                </div>
                {/* Button */}
                <div>
                  <a href='/careers' className="py-3 px-8 rounded-[100px] bg-black text-white text-[16px] font-semibold hover:shadow-xl border-[1px] border-black hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                    Join Us
                  </a>
                </div>
              </div>
            </div>

            {/* Team section */}
            <div className="p-8 flex flex-col gap-8">
              <h2 className="text-[#141414] text-[24px] font-semibold">Meet the Team</h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                {teammates.map((teammate, index) => (
                  <TeammateCard key={index} teammate={teammate} />
                ))}
              </div>
            </div>

            {/* Latest works */}
            <div className="flex flex-col space-y-8">
              <div className="flex lg:flex-row flex-col justify-between gap-8 px-8">
                <div className="flex flex-col gap-6">
                  <h2 className="text-[#ABABAB]  text-[20px] font-medium ">Team</h2>
                  <h5 className="text-[#141414]  text-[40px] font-semibold">Our Latest works!</h5>

                  {/* Button */}
                  <div>
                    <a href='/project' className="py-3 px-8  rounded-[100px] bg-black text-white text-[16px] font-semibold hover:shadow-xl border-[1px] border-black hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                      See our projects
                    </a>
                  </div>
                </div>
                <div className=" text-[#4A4A4A] text-[16px] font-medium">
                  <p className="pb-3">We are proud to showcase some of our recent projects that highlight our creativity and commitment to quality.</p>
                  <ul className="pl-6 list-disc">
                    <li>Innovative Design Mockup: A fresh and modern design approach.</li>
                    <li>Comprehensive Branding Package: Complete branding solutions for businesses.</li>
                    <li>Cutting-edge Product Design: Innovative products that stand out.</li>
                    <li>Advanced Tech Solutions: State-of-the-art technology implementations.</li>
                  </ul>
                </div>
              </div>
              <br></br>

              <Carousel />
            </div>
          </div>

          <Collaborate />
          <Footer />
        </div>
      </div>
    </div>
  );
}
