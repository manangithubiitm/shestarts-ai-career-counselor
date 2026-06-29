import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Assessment from "@/models/Assessment";

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();

        const assessment = await Assessment.create(body);
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
                message: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}