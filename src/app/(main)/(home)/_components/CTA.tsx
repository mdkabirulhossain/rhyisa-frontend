export const CTA = () => {
  return (
    <section className="px-8 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#A37B5B] p-12 text-center text-white">
        <h2 className="mb-6 text-4xl font-bold">Start your health journey today</h2>
        <p className="mx-auto mb-10 max-w-2xl text-white/80">
          Join hundreds of thousands of users who are taking control of their health, finding better
          care, and saving money.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-black px-6 py-3">
            <span className="text-left text-xs leading-none">
              Download on the <br />
              <span className="text-lg font-bold">App Store</span>
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-black px-6 py-3">
            <span className="text-left text-xs leading-none">
              GET IT ON <br />
              <span className="text-lg font-bold">Google Play</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
