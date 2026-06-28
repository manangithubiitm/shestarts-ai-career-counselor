import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
        <Navbar />

        <main className="flex min-h-[80vh] items-center justify-center">
            <h1 className="text-center text-5xl font-bold text-slate-800">
                Welcome to SheStarts AI Career Counselor
            </h1>
        </main>

        <Footer />
    </>
  );
}