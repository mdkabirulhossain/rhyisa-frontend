import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDF9F6]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-8 pt-16 pb-24 md:pb-32 lg:grid-cols-2">
        {/* Left Content */}
        <div className="z-10 space-y-10">
          <div className="space-y-6">
            <h1 className="text-6xl leading-[1.1] font-bold tracking-tight text-[#37261C] md:text-[72px]">
              Your AI-Powered <br />
              <span className="text-[#9F6E4D]">Health & Care</span> <br />
              Companion
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-[#5F5149] md:text-xl">
              Track your nutrition, connect with trusted providers, and manage insurance — all in
              one beautifully simple app.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#D18B4A] px-10 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-[#b5763d]">
              Download App <span>→</span>
            </button>
            <button className="rounded-full bg-[#F6EEE7] px-10 py-4 text-lg font-bold text-[#37261C] transition-all hover:bg-[#ebdccf]">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#FDF9F6] bg-gray-300"
                >
                  {/* Placeholder for avatars - Ensure images are clear */}
                  <div className="h-full w-full bg-[#E5D5C8]" />
                </div>
              ))}
            </div>
            <p className="text-[15px] text-[#5F5149]">
              Joined by <span className="font-bold text-[#37261C]">500,000+</span> users
            </p>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* The hero-right.png should contain the phone and the 
              floating cards as seen in your provided image.
          */}
          <div className="relative w-full max-w-150">
            <Image
              src="/home/hero-right.png"
              alt="Grove App Interface"
              width={700}
              height={850}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
