import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FAF7F2] px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        {/* Logo Section */}
        <div className="mb-10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            {/* Replace with your actual SVG or Logo component */}
            <div className="flex h-8 w-8 items-center justify-center">
              <span className="text-3xl font-bold text-[#C58D67]">g</span>
            </div>
          </div>
          <span className="text-xl font-semibold tracking-tight text-[#4A3F35]">grove</span>
        </div>

        {/* Navigation & Action Row */}
        <div className="mb-12 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
          <nav className="flex items-center gap-8 text-sm font-medium text-[#6B5E54]">
            <Link href="/features" className="transition-colors hover:text-[#C58D67]">
              Features
            </Link>
            <Link href="/how-it-works" className="transition-colors hover:text-[#C58D67]">
              How it works
            </Link>
            <Link href="/benefits" className="transition-colors hover:text-[#C58D67]">
              Benefits
            </Link>
          </nav>

          <Link
            href="/download"
            className="rounded-full bg-[#D98B58] px-7 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#c57a4a]"
          >
            Download App →
          </Link>
        </div>

        {/* Divider Line (Optional based on image spacing) */}
        <div className="mb-8 h-px w-full max-w-4xl bg-gray-200/60" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs tracking-wide text-[#A39A92]">
            © 2024 HealthAI Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
