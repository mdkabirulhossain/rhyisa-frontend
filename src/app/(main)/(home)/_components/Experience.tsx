import React from 'react';
import Image from 'next/image';

export const Experience = () => {
  return (
    <section className="bg-site-bg w-full overflow-hidden px-8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header Text */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-[#37261C] md:text-5xl">A Beautiful Experience</h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#5F5149]">
            Designed with care to make managing your health feel effortless.
          </p>
        </div>

        {/* Triple Phone Image Container */}
        <div className="relative flex justify-center">
          {/* Based on the image provided (image_240f87.png), 
            the three phones are already composed into one asset. 
            We will center this asset and ensure it scales correctly.
          */}
          <div className="relative w-full max-w-225 transform transition-transform duration-700 hover:scale-[1.02]">
            <Image
              src="/home/experience.png" // Ensure image_240f87.png is saved here
              alt="Triple Phone Display showing Grove App UI"
              width={1200}
              height={800}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
