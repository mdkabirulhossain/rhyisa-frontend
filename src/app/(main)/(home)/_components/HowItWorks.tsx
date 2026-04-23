const steps = [
  {
    title: 'Track your Health',
    desc: 'Log meals, workouts, and vitals effortlessly using AI-powered tools.',
    icon: '📊',
  },
  {
    title: 'Get Smart Recommendations',
    desc: 'Receive personalized insights and actionable steps to improve wellbeing.',
    icon: '✨',
  },
  {
    title: 'Connect with Providers',
    desc: 'Consult with top healthcare professionals directly through the app.',
    icon: '👨‍⚕️',
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-white/50 px-8 py-24 text-center">
      <h2 className="mb-2 text-3xl font-bold">How it works</h2>
      <p className="mb-16 text-gray-500">
        Three simple steps to take control of your health journey.
      </p>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF7F2] text-2xl shadow-sm">
              {step.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
