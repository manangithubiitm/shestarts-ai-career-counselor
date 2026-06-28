"use client"

import Link from "next/link"
import { FaBriefcase } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="container-custom flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
                    <FaBriefcase />
                    <span>SheStarts AI</span>
                </Link>
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="hover:text-blue-600 transition">
                        Home
                    </Link>
                    <Link href="/assessment" className="hover:text-blue-600 transition">
                        Assessment
                    </Link>
                    <Link href="/dashboard" className="hover:text-blue-600 transition">
                        Dashboard
                    </Link>
                </div>
                <Link href="/assessment" className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                    Get Started
                </Link>
            </div>
        </nav>
    );
}