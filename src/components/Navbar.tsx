import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#D18B4A]">G</span>
        <span className="font-semibold text-[#4A3F35]">grove</span>
      </div>
      <div className="hidden gap-8 text-sm font-medium text-[#4A3F35] md:flex">
        <Link href="#features">Features</Link>
        <Link href="#how-it-works">How it works</Link>
        <Link href="#benefits">Benefits</Link>
      </div>
      <button className="hover:bg-opacity-90 rounded-full bg-[#D18B4A] px-6 py-2 text-sm font-semibold text-white transition">
        Download App →
      </button>
    </nav>
  );
};
