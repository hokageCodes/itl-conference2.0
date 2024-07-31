"use client";
import React, { useState } from "react";
import Image from "next/image";

const LeadershipSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      img: "/assets/profile.jpg",
      description: "John Doe is the visionary behind our company.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      img: "/assets/profile.jpg",
      description: "Jane Smith leads our tech team.",
    },
    {
      name: "Jim Brown",
      role: "CFO",
      img: "/assets/profile.jpg",
      description: "Jim Brown manages our finances.",
    },
    {
      name: "Emily White",
      role: "COO",
      img: "/assets/profile.jpg",
      description: "Emily White oversees our operations.",
    },
    {
      name: "Emily White",
      role: "COO",
      img: "/assets/profile.jpg",
      description: "Emily White oversees our operations.",
    },
    {
      name: "Emily White",
      role: "COO",
      img: "/assets/profile.jpg",
      description: "Emily White oversees our operations.",
    },
    {
      name: "Emily White",
      role: "COO",
      img: "/assets/profile.jpg",
      description: "Emily White oversees our operations.",
    },
    {
      name: "Emily White",
      role: "COO",
      img: "/assets/profile.jpg",
      description: "Emily White oversees our operations.",
    },
    {
      name: "Emily White",
      role: "COO",
      img: "/assets/profile.jpg",
      description: "Emily White oversees our operations.",
    },
    {
      name: "Emily White",
      role: "COO",
      img: "/assets/profile.jpg",
      description: "Emily White oversees our operations.",
    },
    // Add more team members if needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 8;

  // Logic for displaying current members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="team" className="team-area bg-[#FEFBF6] py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#7F5283]">Our <span className="text-[#ff5a6e]">Team</span></h2>
          <h4 className="text-lg text-[#7F5283] mt-2">Meet our awesome and expert team members</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentMembers.map((member, index) => (
            <div key={index} className="single-item bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="thumb relative">
                <Image 
                  src={member.img} 
                  alt="Profile Image" 
                  className="w-full object-cover" 
                  width={500} 
                  height={500} 
                />
              </div>
              <div className="info p-6 text-center">
                <h4 className="text-xl font-semibold text-[#7F5283]">{member.name}</h4>
                <span className="text-[#ff5a6e]">{member.role}</span>
                <p className="text-sm mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {teamMembers.length > membersPerPage && (
            <div className="inline-flex">
              {[...Array(Math.ceil(teamMembers.length / membersPerPage)).keys()].map((number) => (
                <button
                  aria-label="Number"
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`mx-1 px-4 py-2 ${currentPage === number + 1 ? 'bg-[#7F5283] text-white' : 'bg-white text-[#7F5283]'}`}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
