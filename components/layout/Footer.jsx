export default function Footer() {
    return (
        <footer className="bg-slate-900 py-8 text-center text-white">
            <p className="text-lg font-semibold">
                &copy; {new Date().getFullYear()} SheStarts AI Career Counselor
            </p>
            <p className="mt-2 text-sm text-slate-400">
                Empowering women to confidently restart their careers with AI.
            </p>
        </footer>
    );
}