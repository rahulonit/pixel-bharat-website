import React, { useState } from 'react';
import config from '../config';
import frame from '../assets/frame.png';
import Upload from '../assets/logo.svg';

const CollabPopup = ({ jobTitle, applicationId, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('contact', contact);
    formData.append('position', jobTitle);
    formData.append('resume', resume);
    formData.append('message', message);

    try {
      const url = applicationId ? `${config.apiUrl}api/jobapplications/${applicationId}` : `${config.apiUrl}api/jobapplications`;

      const method = applicationId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        body: formData
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        onClose();
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="rounded-lg p-4 w-full max-w-4xl min-h-screen flex items-center justify-center">
        <form onSubmit={handleFormSubmit} className="flex items-center justify-center w-full">
          <div className="w-full lg:w-[488px] items-center gap-8 bg-white rounded-3xl overflow-hidden flex flex-col relative">
            <div className="flex items-center gap-2 px-5 py-3 relative self-stretch w-full bg-[#e7e7e7] border-b border-[#d3d3d3]">
              <img className="relative w-[157px] h-[67px] mix-blend-darken object-cover" alt="Frame" src={frame} />
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
              &times;
            </button>
            <div className="items-start gap-6 px-5 py-0 self-stretch w-full flex flex-col relative">
              <input className="self-stretch rounded-[50px] w-full border-black px-6 py-4 text-gray-400 border-solid border" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input className="self-stretch rounded-[50px] w-full border-gray-600 px-6 py-4 text-gray-400 border-solid border" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input className="self-stretch rounded-[50px] w-full border-gray-600 px-6 py-4 text-gray-400 border-solid border" placeholder="Phone No." value={contact} onChange={(e) => setContact(e.target.value)} required />
              <textarea className="self-stretch h-[127px] rounded-xl w-full border-gray-600 px-6 py-4 items-start grow text-gray-400 border-solid border" placeholder="Tell us about yourself" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <div className="flex flex-col items-end justify-center gap-2 px-5 py-3 relative self-stretch w-full bg-white border-t border-[#d3d3d3]">
              <div className="w-full sm:w-[119px] items-start gap-2.5 flex flex-col relative">
                <button className="self-stretch rounded-[100px] justify-center px-8 py-4 flex w-full text-white bg-black" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollabPopup;
