"use client";

import { motion } from "framer-motion";
import { FaClipboardList, FaRobot, FaRoute } from "react-icons/fa";

const steps = [
    {
        id: 1,
        icon: <FaClipboardList />,
        title: "Complete Assessment",
        description: "Answer a few questions about your education, experience, skills, and career goals.",
    },
    {
        id: 2,
        icon: <FaRobot />,
        title: "AI Analyzes Your Profile",
        description: "Our AI evaluates your background, identifies skill gaps, and understands your career aspirations.",
    },
    {
        id: 3,
        icon: <FaRoute />,
        title: "Receive Career Roadmap",
        description: "Get personalized career recommendations, learning resources, and a step-by-step action plan.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-white py-20">
            <div className="container-custom px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Three simple steps to discover your next career opportunity.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white">
                                {step.icon}
                            </div>
                            <div className="mb-3 text-sm font-bold text-blue-600">
                                STEP {step.id}
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 leading-7">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}