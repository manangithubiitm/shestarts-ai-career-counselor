"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaGraduationCap,
  FaFileAlt,
  FaTasks,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI Career Recommendations",
    description:
      "Receive personalized career suggestions based on your education, experience, and interests.",
  },
  {
    icon: <FaChartLine />,
    title: "Skill Gap Analysis",
    description:
      "Identify missing skills required for your desired career and understand where to improve.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Learning Roadmap",
    description:
      "Get a structured roadmap with recommended courses and learning resources.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Insights",
    description:
      "Receive AI-powered suggestions to strengthen your resume and improve job readiness..",
  },
  {
    icon: <FaTasks />,
    title: "Career Readiness Score",
    description:
      "Understand your employability through an AI-generated readiness score.",
  },
  {
    icon: <FaLightbulb />,
    title: "Personalized Action Plan",
    description:
      "Receive clear next steps to confidently restart your professional journey.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-custom px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Powerful AI Features
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to confidently restart your career.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="leading-7 text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
