import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Search, Filter, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Research Articles | Centauryy Project",
    description: "Explore our collection of research articles on technology, design, and innovation.",
};

// Placeholder article categories
const categories = [
    { name: "Technology", count: 12, icon: "💻" },
    { name: "Design", count: 8, icon: "🎨" },
    { name: "Components", count: 15, icon: "🧩" },
    { name: "Networking", count: 6, icon: "🌐" },
    { name: "Global Access", count: 4, icon: "🚀" },
];

// Placeholder featured topics
const featuredTopics = [
    "ARM Architecture",
    "CXL Memory",
    "NVIDIA AI",
    "Edge Computing",
    "Data Center",
    "Cloud Infrastructure",
];

export default function ArticlesPage() {
    return (
        <div className="min-h-screen bg-[#fceadd] text-black font-space">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 border-b-2 border-black">
                <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
                    <Image src="/asset/favicon.png" width={40} height={40} alt="Centauryy Logo" />
                    <h1 className="text-xl font-bold">Centauryy</h1>
                </Link>
                <nav className="hidden md:flex space-x-6 text-sm">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="font-bold underline">Research Articles</span>
                    <Link href="/#about" className="hover:underline">About</Link>
                    <Link href="/#projects" className="hover:underline">Projects</Link>
                </nav>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm hover:underline"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>
            </header>

            {/* Hero Section */}
            <section className="border-b-2 border-black py-16 px-6 md:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-yellow-400 border-2 border-black px-4 py-2 mb-6 shadow-[4px_4px_0px_0px_black]">
                        <BookOpen className="inline w-5 h-5 mr-2" />
                        Research Hub
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4">
                        Research Articles
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                        Dive deep into technology, design, and innovation. Our curated collection
                        of articles explores the cutting edge of modern tech.
                    </p>

                    {/* Search Bar Placeholder */}
                    <div className="max-w-xl mx-auto">
                        <div className="flex items-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] overflow-hidden">
                            <div className="px-4">
                                <Search className="w-5 h-5 text-gray-500" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search articles... (coming soon)"
                                className="flex-1 py-3 px-2 outline-none bg-transparent"
                                disabled
                            />
                            <button className="bg-yellow-400 px-6 py-3 border-l-2 border-black font-bold hover:bg-yellow-300 transition">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-12 px-6 md:px-16 border-b-2 border-black">
                <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="bg-white border-2 border-black p-4 text-center shadow-[3px_3px_0px_0px_black] hover:shadow-[0px_0px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] transition cursor-pointer"
                        >
                            <div className="text-3xl mb-2">{category.icon}</div>
                            <h3 className="font-bold">{category.name}</h3>
                            <p className="text-sm text-gray-600">{category.count} articles</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Topics */}
            <section className="py-12 px-6 md:px-16 border-b-2 border-black">
                <h2 className="text-2xl font-bold mb-6 text-center">Featured Topics</h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {featuredTopics.map((topic) => (
                        <span
                            key={topic}
                            className="bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition cursor-pointer"
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-20 px-6 md:px-16">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-yellow-400 border-2 border-black p-8 shadow-[6px_6px_0px_0px_black]">
                        <Clock className="w-12 h-12 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-4">Full Archive Coming Soon</h2>
                        <p className="text-gray-800 mb-6">
                            We're building a comprehensive article archive with advanced search,
                            filtering, and reading features. Stay tuned!
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-black text-white px-8 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] hover:shadow-[0px_0px_0px_0px_rgba(250,204,21,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition"
                        >
                            Browse Latest on Home
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-4 border-t-2 border-black text-center bg-black text-white text-xs">
                © 2025 Centauryy. All rights reserved.
            </footer>
        </div>
    );
}
