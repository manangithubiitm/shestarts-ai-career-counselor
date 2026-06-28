"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
            <div className="container-custom px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center text-white"
                >
                    <h2 className="text-4xl font-bold">
                        Ready to Restart Your Career?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-blue-100">
                        Let our AI analyze your profile, identify your strengths,
                        uncover skill gaps, and generate a personalized roadmap
                        to help you confidently return to work.
                    </p>
                    <Link href="/assessment" className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition hover:scale-105">
                        Start Free Assessment
                        <FaArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}