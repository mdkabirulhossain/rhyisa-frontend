import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 pb-12">
      <div className="mx-auto max-w-7xl">
        {/* Top Border Line */}
        <div className="mb-10 h-px w-full bg-[#E5E1DA]/60" />

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo Section - Left */}
          <div className="shrink-0">
            <Image
              src="/logo.png" // Ensure logo is in public/home/logo.png
              alt="grovr logo"
              width={100}
              height={40}
              className="h-auto w-24"
            />
          </div>

          {/* Navigation - Center */}
          <nav className="flex items-center gap-8 text-[15px] font-medium text-[#5C534A]">
            <Link href="/features" className="transition-colors hover:text-[#D98B58]">
              Features
            </Link>
            <Link href="/how-it-works" className="transition-colors hover:text-[#D98B58]">
              How It Works
            </Link>
            <Link href="/benefits" className="transition-colors hover:text-[#D98B58]">
              Benefits
            </Link>
          </nav>

          {/* Action Button - Right */}
          <div className="shrink-0">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full bg-[#D17D4D] px-8 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-[#c06b3c]"
            >
              Download App <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Copyright Section - Bottom */}
        <div className="mt-20 text-center">
          <p className="text-sm tracking-tight text-[#7C746E]">
            © 2025 HealthAI Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
