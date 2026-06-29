import connectDB from "@/lib/mongodb";
import Assessment from "@/models/Assessment";
import mongoose from "mongoose";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ScoreCard from "@/components/dashboard/ScoreCard";
import RecommendationCard from "@/components/dashboard/RecommendationCard";
import CareerSummaryCard from "@/components/dashboard/CareerSummaryCard";
import SkillGapCard from "@/components/dashboard/SkillGapCard";
import RoadmapCard from "@/components/dashboard/RoadmapCard";
import CoursesCard from "@/components/dashboard/CoursesCard";
import ProjectsCard from "@/components/dashboard/ProjectsCard";
import JobRolesCard from "@/components/dashboard/JobRolesCard";
import NextStepsCard from "@/components/dashboard/NextStepsCard";

export default async function DashboardPage({ params }) {
  await connectDB();
  const { id } = await params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <h2 className="text-2xl font-bold">Invalid Assessment ID</h2>
        </main>
        <Footer />
      </>
    );
  }
  const assessment = await Assessment.findById(id).lean();

  if (!assessment) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-10 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              No Career Assessment Found
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Please complete the assessment to generate your personalized AI
              Career Plan.
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const ai = assessment.aiResponse;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <DashboardHeader name={assessment.fullName} />

          {/* Top Cards */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScoreCard
              score={ai.confidenceScore}
              reason={ai.confidenceReason}
              transitionTime={ai.estimatedTransitionTime}
            />

            <RecommendationCard career={ai.recommendedCareer} />
          </div>

          {/* Career Summary */}
          <div className="mt-6">
            <CareerSummaryCard summary={ai.careerSummary} />
          </div>

          {/* Strengths & Skill Gaps */}
          <div className="mt-6">
            <SkillGapCard strengths={ai.strengths} skillGaps={ai.skillGaps} />
          </div>

          {/* Learning Roadmap */}
          <div className="mt-6">
            <RoadmapCard roadmap={ai.learningRoadmap} />
          </div>

          {/* Courses */}
          <div className="mt-6">
            <CoursesCard courses={ai.recommendedCourses} />
          </div>

          {/* Projects */}
          <div className="mt-6">
            <ProjectsCard projects={ai.recommendedProjects} />
          </div>

          {/* Job Roles */}
          <div className="mt-6">
            <JobRolesCard jobRoles={ai.jobRoles} />
          </div>

          {/* Next Steps */}
          <div className="mt-6">
            <NextStepsCard nextSteps={ai.nextSteps} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
