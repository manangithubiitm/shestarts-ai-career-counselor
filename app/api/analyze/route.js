import { NextResponse } from "next/server";
import { generateCareerAnalysis } from "@/lib/nvidia";
import connectDB from "@/lib/mongodb";
import Assessment from "@/models/Assessment";

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const aiResponse = await generateCareerAnalysis(body);

        const assessment = await Assessment.create({
            ...body,
            aiResponse,
        });
        console.log("Assessment saved:", assessment);

        return NextResponse.json({
            success: true,
            message: "Assessment received successfully.",
            assessment,
        });
    } catch(error) {
        console.error("API Error:", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}