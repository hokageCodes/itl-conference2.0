"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`fixed top-0 w-full text-textPrimary font-bold transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-8xl mx-auto flex items-center justify-between h-20 ml-4 mr-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center mr-8">
            <Image
              className='logo-img'
              src={isScrolled ? "/assets/1.png" : "/assets/22.png"}
              width={200}
              height={50}
              alt="Logo"
            />
          </a>
        </div>

        <div className="hidden text-sm md:flex gap-8 justify-center flex-1">
          <a href="/itl25-conference" className="font-black">&#39;25 Conference</a>
          <a href="/pre-register" className="font-black">Registration</a>
          <a href="/speakers" className="font-black">Speakers</a>
          <div className="relative">
            <button aria-label="Toggle" onClick={toggleDropdown} className="font-black">Team</button>
            {isDropdownOpen && (
              <div className="w-32 absolute mt-2 bg-white border rounded shadow-lg">
                <a href="/team/leadership" className="block px-4 py-2 text-sm font-bold hover:bg-gray-200">Leadership Team</a>
                <a href="/team/planning" className="block px-4 py-2 text-sm font-bold hover:bg-gray-200">Planning Team</a>
                <a href="/team/partners" className="block px-4 py-2 text-sm font-bold hover:bg-gray-200">Partners</a>
              </div>
            )}
          </div>
          <a href="/faqs" className="font-black">FAQs</a>
          <a href="/awards" className="font-black">Awards</a>
        </div>

        <div className="hidden md:flex">
          <a href="/volunteer" className="py-2 px-8 mr-4 bg-ctaBg text-white hover:bg-ctaHover rounded transition duration-300">Volunteer</a>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle" onClick={toggleHamburger} className="outline-none">
            {isOpen ? (
              <svg className="w-16 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-16 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden px-4 pt-2 pb-4 bg-[#F6F4EB] text-black`}>
        <a href="/itl25-conference" className="block py-2 px-4 text-sm font-bold">&#39;25 Conference</a>
        <a href="/pre-register" className="block py-2 px-4 text-sm font-bold">Registration</a>
        <a href="/speakers" className="block py-2 px-4 text-sm font-bold">Speakers</a>
        <div className="block py-2 px-4 text-sm font-bold">
          <button aria-label="Toggle" onClick={toggleDropdown} className="w-full text-left">Team</button>
          {isDropdownOpen && (
            <div className="pl-4 mt-2">
              <a href="/team/leadership" className="block py-2 text-sm font-bold">Leadership Team</a>
              <a href="/team/planning" className="block py-2 text-sm font-bold">Planning Team</a>
              <a href="/team/partners" className="block py-2 text-sm font-bold">Partners</a>
            </div>
          )}
        </div>
        <a href="/faqs" className="block py-2 px-4 text-sm font-bold">FAQs</a>
        <a href="/awards" className="block py-2 px-4 text-sm font-bold">Awards</a>
        <a href="/volunteer" className="block mx-auto my-4 py-2 px-4 w-auto bg-ctaBg text-white hover:bg-blue-700 rounded transition duration-300 text-center">Volunteer</a>
      </div>
    </nav>
  );
};

export default Navbar;
