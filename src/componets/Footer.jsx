import React from 'react';
import { ReactComponent as Logo } from '../assets/icon.svg';
import { ReactComponent as FileIcon } from '../assets/file.svg';

export default function Footer() {
  return (
    <div className="lg:flex justify-between -mb-8 items-center py-4 px-8 bg-gray-100">
      {/* Left side */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-4 lg:mb-0">
        {/* Logo and text */}
        <div className="flex items-center space-x-4">
        <div
      className="w-[32px] h-[32px] rounded-[32px] mix-blend-multiply"
      style={{
        backgroundImage: 'url(<path-to-image>)',
        backgroundColor: 'rgba(0,_0,_0,_0.05)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Logo className="w-full h-full" />
    </div>
          <div className="text-gray-700 text-sm">
            © 2024 Pixel Bharat. All rights reserved.
          </div>
        </div>
        {/* File download */}
        <div className="flex items-center space-x-2">
          <FileIcon className="w-6 h-6 text-gray-600" />
          <p className="text-gray-600 text-lg font-bold">Download our Proposal</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
        <ul className="flex flex-wrap justify-center lg:justify-end space-x-4 text-gray-500 text-sm font-medium">
          <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
          <li><a href="#" className="hover:text-gray-900">X</a></li>
          <li><a href="#" className="hover:text-gray-900">Dribbble</a></li>
          <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
          <li><a href="#" className="hover:text-gray-900">Gumroad</a></li>
          <li><a href="#" className="hover:text-gray-900">Behance</a></li>
        </ul>
      </div>
    </div>
  );
}
