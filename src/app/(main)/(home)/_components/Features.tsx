const features = [
  {
    title: 'Track your Health',
    icon: '🕒',
    desc: 'Log vitals, workouts, and meals effortlessly using AI-powered tools.',
  },
  {
    title: 'Save Money',
    icon: '💰',
    desc: 'Maximize your insurance benefits and find cost-effective care options automatically.',
  },
  {
    title: 'Better Decisions',
    icon: '⚖️',
    desc: 'Make informed choices about your health with data-driven insights.',
  },
  {
    title: 'All-in-One Platform',
    icon: '🏢',
    desc: 'A unified ecosystem that connects your daily habits with professional healthcare.',
  },
];

export const Features = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Why choose HealthAI?</h2>
        <p className="text-gray-500">
          Designed to simplify your life while improving your wellbeing.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="cursor-default rounded-3xl bg-[#FAF7F2] p-8 transition hover:shadow-md"
          >
            <div className="mb-4 text-xl text-orange-500">{f.icon}</div>
            <h4 className="mb-3 font-bold">{f.title}</h4>
            <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
