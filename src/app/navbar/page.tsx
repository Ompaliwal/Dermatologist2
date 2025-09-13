"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },

  { href: "/services", label: "Services" },
  { href: "/doctor", label: "Doctor" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Solid background - no transparency */}
      <div className="bg-white border-b border-rose-100 shadow-sm">
        <nav className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Brand */}
            <Link
              href="/"
              aria-label="Dermacare Clinic Home"
              className="flex items-center gap-3"
            >
              <div className="relative h-9 w-9 rounded-full ring-2 ring-rose-200 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Dermacare Clinic"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">
                Dermacare <span className="text-rose-600">Clinic</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-1 py-2 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "text-rose-700"
                      : "text-gray-700 hover:text-rose-700"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full transition-all ${
                      isActive(item.href) ? "bg-rose-600" : "bg-transparent"
                    }`}
                  />
                </Link>
              ))}

              <div className="ml-2 flex items-center gap-3">
                <Link
                  href="/services"
                  className="px-4 py-2 rounded-full border border-rose-600 text-rose-600 text-sm font-medium hover:bg-rose-50 transition"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-medium shadow-lg hover:bg-rose-700 transition"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden sm:inline-flex px-3 py-2 rounded-full bg-rose-600 text-white text-sm font-medium shadow hover:bg-rose-700 transition"
              >
                Book
              </Link>
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
                className="inline-flex items-center justify-center rounded-xl p-2 border border-rose-200 text-gray-700 hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {open ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu (unchanged, since you liked it) */}
        <div
          className={`lg:hidden transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 pb-6">
            <div className="mt-2 rounded-2xl border border-rose-100 bg-white shadow-sm">
              <div className="p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition ${
                      isActive(item.href)
                        ? "bg-rose-50 text-rose-700"
                        : "text-gray-700 hover:bg-rose-50 hover:text-rose-700"
                    }`}
                  >
                    <span className="text-[15px] font-medium">{item.label}</span>
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                ))}

                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 px-2 pb-2">
                  <Link
                    href="/services"
                    className="w-full text-center px-4 py-3 rounded-full border border-rose-600 text-rose-600 text-sm font-medium hover:bg-rose-50 transition"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full text-center px-4 py-3 rounded-full bg-rose-600 text-white text-sm font-medium shadow hover:bg-rose-700 transition"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4 h-1 w-full bg-gradient-to-r from-rose-100 via-rose-200 to-rose-100 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
