'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-site-bg relative z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
        {/* Left: Logo */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="grovr logo"
              width={80}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden items-center gap-12 md:flex">
          <Link
            href="#features"
            className="text-heading-main hover:text-highlight-main text-[15px] font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-heading-main hover:text-highlight-main text-[15px] font-medium transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#features"
            className="text-heading-main hover:text-highlight-main text-[15px] font-medium transition-colors"
          >
            Benefits
          </Link>
        </div>

        {/* Right: CTA Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <button className="bg-btn-primary flex items-center gap-2 rounded-full px-7 py-3 text-[15px] font-bold text-white shadow-sm transition-all hover:opacity-90">
              Download App <span>→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-heading-main hover:text-highlight-main p-2 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="bg-site-bg absolute top-full left-0 w-full border-t border-gray-100 shadow-xl md:hidden">
          <div className="flex flex-col space-y-6 px-8 py-8">
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-heading-main hover:text-highlight-main text-lg font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="text-heading-main hover:text-highlight-main text-lg font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-heading-main hover:text-highlight-main text-lg font-medium transition-colors"
            >
              Benefits
            </Link>
            <div className="pt-4">
              <button className="bg-btn-primary flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-lg font-bold text-white shadow-md transition-all hover:opacity-90">
                Download App <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
