import Image from 'next/image';

export const CTA = () => {
  return (
    <section className="bg-stone-50 px-8 py-20">
      <div className="mx-auto max-w-5xl rounded-[40px] bg-[#A37B5C] px-8 py-16 text-center text-white">
        {/* Main Heading */}
        <h2 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Start your health journey today
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90">
          Join hundreds of thousands of users who are taking control of their health,
          <br className="hidden md:block" /> finding better care, and saving money.
        </p>

        {/* App Store Badges using Next.js Image */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
          <a href="#" className="transition-opacity" target="_blank" rel="noopener noreferrer">
            <Image
              src="/home/google-play.png"
              alt="Get it on Google Play"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>
          <a href="#" className="transition-opacity">
            <Image
              src="/home/apple-store.png"
              alt="Download on the App Store"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
};
