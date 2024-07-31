"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const speakers = [
  // Sample speaker data
  { name: 'Lindsay Walton', role: 'Front-end Developer', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/lindsaywalton/', twitterUrl: 'https://twitter.com/lindsaywalton' },
  { name: 'Courtney Henry', role: 'Designer', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/courtneyhenry/', twitterUrl: 'https://twitter.com/courtneyhenry' },
  { name: 'Tom Cook', role: 'Director of Product', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
  { name: 'Tom Cook', role: 'Director of Product', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
  { name: 'Tom Cook', role: 'Director of Product', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
  { name: 'Tom Cook', role: 'Director of Product', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
  { name: 'Tom Cook', role: 'Director of Product', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
  { name: 'Tom Cook', role: 'Director of Product', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
  { name: 'Tom Cook', role: 'Director of Product', imageUrl: '/assets/profile.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
  // Add more speaker data here
];

const ITEMS_PER_PAGE = 8;

const SpeakerCard = ({ speaker }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative w-full h-48 mb-4">
      <Image src={speaker.imageUrl} alt={speaker.name} layout="fill" objectFit="cover" className="rounded-lg" />
    </div>
    <h3 className="text-xl font-semibold text-textPrimary">{speaker.name}</h3>
    <p className="text-gray-600">{speaker.role}</p>
    <div className="flex items-center mt-4 space-x-4">
      <a href={speaker.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-500">
        <FaTwitter size={24} />
      </a>
      <a href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-500">
        <FaLinkedin size={24} />
      </a>
    </div>
  </div>
);

const SpeakersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(speakers.length / ITEMS_PER_PAGE);

  const currentSpeakers = speakers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-textPrimary">Our Speakers</h2>
          <p className="text-gray-600 mt-4">We are a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentSpeakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
        {speakers.length > ITEMS_PER_PAGE && (
          <div className="flex justify-between items-center mt-8">
            <button aria-label="Prev" onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-gray-300 px-4 py-2 rounded-md disabled:opacity-50">
              Previous
            </button>
            <p>Page {currentPage} of {totalPages}</p>
            <button aria-label="Next" onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-gray-300 px-4 py-2 rounded-md disabled:opacity-50">
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpeakersPage;
