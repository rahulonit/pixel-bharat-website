import React, { useState } from "react";
import config from "../config";
import frame from '../assets/logo.svg';

import Upload from "../assets/logo.svg";

const JobApplicationPopup = ({ jobTitle, applicationId, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("position", jobTitle);
    formData.append("resume", resume);
    formData.append("message", message);

    try {
      const url = applicationId
        ? `${config.apiUrl}api/jobapplications/${applicationId}`
        : `${config.apiUrl}api/jobapplications`;

      const method = applicationId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        body: formData,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        onClose();
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className=" rounded-lg  p-4 w-full max-w-4xl relative">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex flex-col lg:flex-row items-start gap-8 relative w-full">
            {/* Image Section */}
            <div className="w-full lg:w-80 rounded-3xl overflow-hidden flex flex-col relative">
              <div className="items-start gap-2 px-4 lg:px-8 py-5 w-full bg-[#e6e6e6] flex flex-col relative">
                <img
                  className="relative w-[157px] h-[67px] mix-blend-darken object-cover"
                  alt="Frame"
                  src={frame}
                />
              </div>
              <div className="items-start gap-2 px-4 lg:px-8 py-10 w-full bg-white flex flex-col relative">
                <div className="relative self-stretch mt-[-1.00px] font-semibold text-black text-base leading-[25.6px]">
                  Employee Recruitment
                </div>
                <p className="relative self-stretch font-normal text-[#4a4a4a] text-base leading-[25.6px]">
                  As a {jobTitle}.
                </p>
              </div>
            </div>
            {/* Form Section */}
            <div className="w-full lg:w-[488px] items-center gap-8 bg-white rounded-3xl overflow-hidden flex flex-col relative">
              <div className="flex items-center gap-2 px-5 py-3 relative self-stretch w-full bg-white border-b border-[#d3d3d3]">
                <div className="relative flex-1 mt-[-1.00px] font-semibold text-black text-base leading-[25.6px]">
                  Employee Recruitment
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                  &times;
                </button>
              </div>
              <div className="items-start gap-6 px-5 py-0 self-stretch w-full flex flex-col relative">
                <input
                  className="self-stretch rounded-[50px] w-full border-black px-6 py-4 text-gray-400 border-solid border"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="self-stretch rounded-[50px] w-full border-gray-600 px-6 py-4 text-gray-400 border-solid border"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="self-stretch rounded-[50px] w-full border-gray-600 px-6 py-4 text-gray-400 border-solid border"
                  placeholder="Phone No."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
                <textarea
                  className="self-stretch h-[127px] rounded-xl w-full border-gray-600 px-6 py-4 items-start grow text-gray-400 border-solid border"
                  placeholder="Tell us about yourself"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <div className="items-center gap-2 self-stretch w-full flex flex-col relative">
                  <div className="relative self-stretch mt-[-1.00px] font-semibold text-black text-base leading-[25.6px]">
                    Upload your resume
                  </div>
                  <div className="items-center justify-center gap-3 px-8 py-3 bg-[#f6f6f6] rounded-[36px] border-black flex relative self-stretch w-full border border-solid">
                    <img
                      className="relative w-6 h-5"
                      alt="Upload"
                      src={Upload}
                    />
                    <div className="relative w-fit mt-[-1.00px] font-normal text-black text-base leading-5 whitespace-nowrap">
                      Drop Files to Attach
                    </div>
                    <input
                      type="file"
                      onChange={(e) => setResume(e.target.files[0])}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      required
                    />
                  </div>
                  <div className="relative w-fit font-normal text-[#b1b1b1] text-sm text-center leading-5 whitespace-nowrap">
                    Attach Your Resume Here
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center gap-2 px-5 py-3 relative self-stretch w-full bg-white border-t border-[#d3d3d3]">
                <div className="w-full sm:w-[119px] items-start gap-2.5 flex flex-col relative">
                  <button
                    className="self-stretch rounded-[100px] justify-center px-8 py-4 flex w-full text-white bg-black"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationPopup;
