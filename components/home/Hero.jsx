"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaBrain,
    FaUserGraduate,
    FaChartLine,
} from "react-icons/fa";

export default function Hero () {
    return (
        <section className="bg-slate-50">
            <div className="container-custom grid min-h-[85vh] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        AI Powered Career Guidance
                    </span>
                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
                        Restart Your Career with AI Confidence
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Personalized AI career counseling designed for women returning to
                        work after career breaks. Discover the right career path, identify
                        skill gaps, and receive a structured learning roadmap.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="/assessment" className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
                            Start Free Assessment
                            <FaArrowRight />
                        </Link>
                        <a href="#how-it-works" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:border-blue-500 hover:text-blue-600">
                            Learn More
                        </a>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <FaBrain className="text-5xl text-blue-600"/>
                            <h3 className="mt-4 text-xl font-bold">
                                AI Career Analysis
                            </h3>
                            <p className="mt-2 text-slate-600">
                                Personalized recommendations powered by AI.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <FaUserGraduate className="text-5xl text-emerald-600" />
                            <h3 className="mt-4 text-xl font-bold">
                                Skill Roadmap
                            </h3>
                            <p className="mt-2 text-slate-600">
                                Learn the skills required for your dream role.
                            </p>
                        </div>

                        <div className="col-span-2 rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <FaChartLine className="text-5xl text-amber-500"/>
                            <h3 className="mt-4 text-xl font-bold">
                                Employability Score
                            </h3>
                            <p className="mt-2 text-slate-600">
                                Evaluate your readiness and get actionable next steps.
                            </p>
                        </div>
                    </div>
                    
                </motion.div>
            </div>
        </section>
    );
}