"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBriefcase } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/assessment", label: "Assessment" },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600"
        >
          <FaBriefcase />
          <span>SheStarts AI</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b-2 pb-1 transition-all duration-300 ${
                pathname === link.href
                  ? "border-blue-600 font-semibold text-blue-600"
                  : "border-transparent text-slate-700 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* CTA Button */}
        <Link
          href="/assessment"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
