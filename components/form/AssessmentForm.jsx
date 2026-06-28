"use client";
import { useState } from "react";
import { FaUser, FaBriefcase, FaCode, FaBullseye } from "react-icons/fa";
export default function AssessmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    education: "",

    previousRole: "",
    industry: "",
    experience: "",
    careerBreak: "",

    skills: [],
    otherSkills: "",

    preferredIndustry: "",
    workMode: "",
    careerGoal: "",
  });
  const skillOptions = [
    "Communication",
    "Leadership",
    "Python",
    "SQL",
    "Excel",
    "Data Analysis",
    "Project Management",
    "Digital Marketing",
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSkillChange = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((item) => item !== skill)
        : [...prev.skills, skill],
    }));
  };
  return (
    <form action="" className="space-y-10 rounded-3xl bg-white p-8 shadow-lg">
      <div>
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-3">
            <FaUser className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Personal Information
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">Highest Education</label>
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            >
              <option value="">Select Education</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>Diploma</option>
              <option>High School</option>
              <option>PhD</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-8 mt-12 flex items-center gap-3">
          <div className="rounded-full bg-emerald-100 p-3">
            <FaBriefcase className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Professional Background
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">Previous Job Role</label>
            <input
              type="text"
              name="previousRole"
              value={formData.previousRole}
              onChange={handleChange}
              placeholder="Software Engineer"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              placeholder="IT"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">
              Years of Experience
            </label>
            <input
              type="number"
              min="0"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="1"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Career Break</label>
            <select
              name="careerBreak"
              value={formData.careerBreak}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            >
              <option value="">Select Duration</option>
              <option>Less than 1 year</option>
              <option>1-2 years</option>
              <option>3-5 years</option>
              <option>More than 5 years</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-8 mt-12 flex items-center gap-3">
          <div className="rounded-full bg-purple-100 p-3">
            <FaCode className="text-purple-600" />
          </div>

          <h2 className="text-2xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillOptions.map((skill) => (
            <label
              key={skill}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={() => handleSkillChange(skill)}
              />

              {skill}
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label className="mb-2 block font-medium">Other Skills</label>

          <input
            type="text"
            name="otherSkills"
            value={formData.otherSkills}
            onChange={handleChange}
            placeholder="Enter additional skills"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>
      </div>

      <div>
        <div className="mb-8 mt-12 flex items-center gap-3">
          <div className="rounded-full bg-orange-100 p-3">
            <FaBullseye className="text-orange-600" />
          </div>

          <h2 className="text-2xl font-bold">Career Preferences</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">Preferred Industry</label>

            <input
              type="text"
              name="preferredIndustry"
              value={formData.preferredIndustry}
              onChange={handleChange}
              placeholder="Healthcare, IT..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Work Mode</label>

            <select
              name="workMode"
              value={formData.workMode}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            >
              <option value="">Select Work Mode</option>

              <option>Remote</option>

              <option>Hybrid</option>

              <option>On-site</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">Career Goal</label>

            <textarea
              rows={4}
              name="careerGoal"
              value={formData.careerGoal}
              onChange={handleChange}
              placeholder="Describe your career goals..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>
        </div>
      </div>

      <div className="pt-8 text-center">
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Generate AI Career Plan
        </button>
      </div>
    </form>
  );
}
