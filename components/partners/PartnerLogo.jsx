import React from 'react';
import Image from 'next/image';

const PartnerLogo = ({ name, logoSrc, url }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="partner-logo mx-4 my-2 hover:scale-110 transition-transform duration-300"
    >
      <Image
        src={logoSrc}
        alt={name}
        width={140}
        height={80}
        style={{ objectFit: 'contain' }}
        layout="intrinsic" // You can use "responsive" if you want the image to scale with the viewport
      />
    </a>
  );
};

export default PartnerLogo;
