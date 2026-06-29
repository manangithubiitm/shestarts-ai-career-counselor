"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaBriefcase, FaCode, FaBullseye, FaSpinner } from "react-icons/fa";
export default function AssessmentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Analyzing your profile..."
  );
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Analyzing your profile...");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoadingMessage("Matching your skills with career opportunities...");
      console.log(data);
      setLoadingMessage("Preparing your personalized AI roadmap...");
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }
      setLoadingMessage("Redirecting to your dashboard...");
      router.push(`/dashboard/${data.assessment._id}`);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 rounded-3xl bg-white p-8 shadow-lg"
    >
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
              disabled={loading}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              required
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              placeholder="example@gmail.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">Highest Education</label>
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              disabled={loading}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              required
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
              disabled={loading}
              placeholder="Software Engineer"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              required
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
              disabled={loading}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              required
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">
              Years of Experience
            </label>
            <input
              type="number"
              min="0"
              max="40"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="1"
              disabled={loading}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              required
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Career Break</label>
            <select
              name="careerBreak"
              value={formData.careerBreak}
              onChange={handleChange}
              disabled={loading}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              required
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
                disabled={loading}
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
            disabled={loading}
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
              disabled={loading}
              placeholder="Healthcare, IT..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Work Mode</label>

            <select
              name="workMode"
              value={formData.workMode}
              disabled={loading}
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
              disabled={loading}
              placeholder="Describe your career goals..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              required
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-8">
        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 rounded-xl px-10 py-4 text-lg font-semibold text-white transition-all duration-300
          ${
            loading 
              ? "cursor-not-allowed bg-slate-400"
              : "bg-blue-600 hover:scale-105 hover:bg-blue-700"
          }`}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Generating AI Career Plan...</span>
            </>
          ) : (
            "Generate AI Career Plan"
          )}
        </button>
        {loading && (
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
            <div className="mb-3 flex items-center justify-center gap-2 text-blue-600">
              <FaSpinner className="animate-spin text-xl" />
              <h3 className="text-lg font-semibold">
                {loadingMessage}
              </h3>
            </div>
            <p className="text-slate-600">
              Please wait while we review your experience, skills and career goals.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
