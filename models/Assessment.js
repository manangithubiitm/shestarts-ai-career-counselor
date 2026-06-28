import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        education: {
            type: String,
            required: true,
        },
        previousRole: {
            type: String,
            default: "",
        },
        industry: {
            type: String,
            default: "",
        },
        experience: {
            type: Number,
            default: 0,
        },
        careerBreak: {
            type: String,
            default: "",
        },
        skills: {
            type: [String],
            default: [],
        },
        otherSkills: {
            type: String,
            default: "",
        },
        preferredIndustry: {
            type: String,
            default: "",
        },
        workMode: {
            type: String,
            default: "",
        },
        careerGoal: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Assessment || mongoose.model("Assessment", AssessmentSchema);