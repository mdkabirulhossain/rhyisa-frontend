import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="bg-site-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-32 lg:grid-cols-2">
        {/* Left Content */}
        <div className="z-10 flex flex-col items-center space-y-8 text-center lg:items-start lg:space-y-10 lg:text-left">
          <div className="space-y-6">
            <h1 className="text-heading-main text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[72px]">
              Your AI-Powered <br className="hidden sm:block" />
              <span className="text-highlight-main">Health & Care</span>{' '}
              <br className="hidden sm:block" />
              Companion
            </h1>
            <p className="text-text-main mx-auto max-w-lg text-base leading-relaxed sm:text-lg md:text-xl lg:mx-0">
              Track your nutrition, connect with trusted providers, and manage insurance — all in
              one beautifully simple app.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <button className="bg-btn-primary flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-white shadow-md transition-all hover:opacity-90 sm:px-10 sm:py-4 sm:text-lg">
              Download App <span>→</span>
            </button>
            <button className="bg-btn-secondary text-heading-main rounded-full px-8 py-3.5 text-base font-bold transition-all hover:opacity-90 sm:px-10 sm:py-4 sm:text-lg">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border-site-bg relative h-10 w-10 overflow-hidden rounded-full border-2 bg-gray-300"
                >
                  {/* Placeholder for avatars - Ensure images are clear */}
                  <div className="h-full w-full bg-[#E5D5C8]" />
                </div>
              ))}
            </div>
            <p className="text-text-main text-[15px]">
              Joined by <span className="text-heading-main font-bold">500,000+</span> users
            </p>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative w-full max-w-150">
            <Image
              src="/home/hero-right.png"
              alt="Grove App Interface"
              width={700}
              height={850}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
