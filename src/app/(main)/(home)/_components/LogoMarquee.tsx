'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const LogoMarquee = () => {
  // Array of your logo filenames
  const logos = [
    '/logos/logo-1.png',
    '/logos/logo-2.png',
    '/logos/logo-3.png',
    '/logos/logo-4.png',
    '/logos/logo-5.png',
  ];

  return (
    <section className="bg-site-bg w-full overflow-hidden py-12">
      {/* Title text matching the image styling */}
      <div className="mb-10 flex justify-center">
        <p className="text-text-main text-sm font-medium opacity-80 md:text-[15px]">
          Trusted by leading healthcare & insurance providers
        </p>
      </div>

      {/* Marquee Component */}
      <Marquee
        gradient={true}
        gradientColor="#FDF9F6" // Matches your #FDF9F6 bg
        gradientWidth={100}
        speed={40}
        pauseOnHover={true}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center opacity-40 grayscale transition-opacity duration-300 hover:opacity-100 md:mx-12"
          >
            <Image
              src={logo}
              alt={`Provider Logo ${index + 1}`}
              width={120}
              height={40}
              className="h-6 w-auto object-contain sm:h-8 md:h-10"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default LogoMarquee;
