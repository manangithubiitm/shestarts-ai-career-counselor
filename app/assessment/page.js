import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AssessmentForm from "@/components/form/AssessmentForm";

export default function AssessmentPage() {
    return (
        <>
            <Navbar />
            <main className="bg-slate-50 py-16">
                <div className="container-custom px-6">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-10 text-center">
                            <h1 className="text-4xl font-bold text-slate-900">
                                AI Career Assessment
                            </h1>
                            <p className="mt-4 text-lg text-slate-600">
                                Tell us about yourself so our AI can generate personalized
                                career recommendations and a learning roadmap.
                            </p>
                        </div>
                        
                        <AssessmentForm />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}