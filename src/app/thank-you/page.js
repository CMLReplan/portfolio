import Link from "next/link";

export const metadata = {
    title: "Message Sent | Carl Mathew L. Replan",
    };

    export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
                />
            </svg>
            </div>

            <h1 className="text-3xl font-black text-[#1a237e] mb-3">
            Message Sent!
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
            Thanks for reaching out — I&apos;ll get back to you as soon as I can.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                href="/#contact"
                className="px-8 py-4 bg-[#1a237e] text-white font-bold hover:bg-indigo-700 transition-all"
            >
                Back to Contact
            </Link>

            <Link
                href="/"
                className="px-8 py-4 border-2 border-[#1a237e] text-[#1a237e] font-bold hover:bg-[#1a237e] hover:text-white transition-all"
            >
                Go Home
            </Link>
            </div>
        </div>
        </main>
    );
}
