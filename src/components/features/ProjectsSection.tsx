"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";


const projects = [
    {
        title: "Centauryy Blog",
        description: "A brutalist-styled blog platform built with Next.js 15, featuring Medium RSS integration and fuzzy search capabilities.",
        tags: ["Next.js", "React 19", "TailwindCSS"],
        status: "Active",
        link: "https://medium.com/@centauryy",
        color: "bg-yellow-400"
    },
    {
        title: "Tech Research Hub",
        description: "Comprehensive research articles covering data center technologies, AI infrastructure, and modern computing architectures.",
        tags: ["Research", "Technology", "Writing"],
        status: "Ongoing",
        link: "/articles",
        color: "bg-blue-400"
    },
    {
        title: "Design System Library",
        description: "A collection of reusable brutalist UI components and design patterns for modern web applications.",
        tags: ["UI/UX", "Components", "Design"],
        status: "In Development",
        link: "#",
        color: "bg-pink-400"
    },
    {
        title: "AI Infrastructure Guide",
        description: "Deep dive into NVIDIA's AI ecosystem, from Blackwell GPUs to Nemotron LLMs and edge computing solutions.",
        tags: ["AI", "NVIDIA", "Infrastructure"],
        status: "Research",
        link: "/articles",
        color: "bg-purple-400"
    },
    {
        title: "Cloud Architecture Docs",
        description: "Documentation and best practices for building scalable cloud infrastructure with modern DevOps approaches.",
        tags: ["Cloud", "DevOps", "AWS"],
        status: "Ongoing",
        link: "#",
        color: "bg-green-400"
    },
    {
        title: "ARM & CXL Research",
        description: "Exploring the future of data center infrastructure with ARM processors and CXL memory technologies.",
        tags: ["ARM", "CXL", "Hardware"],
        status: "Featured",
        link: "/articles",
        color: "bg-orange-400"
    }
];

const stats = [
    { label: "Articles Published", value: "20+", icon: "📝" },
    { label: "Topics Covered", value: "15+", icon: "📚" },
    { label: "Monthly Readers", value: "1K+", icon: "👥" },
    { label: "Hours of Research", value: "500+", icon: "⏱️" },
];

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Animation triggers
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    // Number of cards to show based on screen size
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const maxIndex = Math.max(0, projects.length - cardsToShow);
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, cardsToShow]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev === 0 ? Math.max(0, projects.length - cardsToShow) : prev - 1));
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        const maxIndex = Math.max(0, projects.length - cardsToShow);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handleDotClick = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    const totalDots = Math.max(1, projects.length - cardsToShow + 1);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-16 px-6 md:px-16 border-b-2 border-black scroll-mt-20 bg-[#f5e6d3] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                >
                    <motion.div
                        className="inline-block bg-black text-white border-2 border-black px-4 py-2 mb-4 shadow-[3px_3px_0px_0px_#facc15] text-sm font-bold uppercase tracking-wider"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Our Work
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        Projects & Initiatives
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Explore our ongoing projects and initiatives that aim to make
                        technology knowledge more accessible and engaging.
                    </p>
                </motion.div>

                {/* Projects Carousel */}
                <motion.div
                    className="relative mb-16"
                    initial="hidden"
                    animate={controls}
                    variants={staggerContainer}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-yellow-400 border-2 border-black p-2 shadow-[3px_3px_0px_0px_black] hover:shadow-[0px_0px_0px_0px_black] hover:translate-x-[-13px] hover:translate-y-[-47%] transition-all hidden md:block"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-yellow-400 border-2 border-black p-2 shadow-[3px_3px_0px_0px_black] hover:shadow-[0px_0px_0px_0px_black] hover:translate-x-[19px] hover:translate-y-[-47%] transition-all hidden md:block"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden mx-0 md:mx-8" ref={carouselRef}>
                        <motion.div
                            className="flex gap-6"
                            animate={{
                                x: `-${currentIndex * (100 / cardsToShow + 2)}%`
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            {projects.map((project, index) => (
                                <motion.a
                                    key={index}
                                    href={project.link}
                                    className={`group flex-shrink-0 bg-white border-2 border-black shadow-[5px_5px_0px_0px_black] hover:shadow-[0px_0px_0px_0px_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all overflow-hidden`}
                                    style={{ width: `calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * 24 / cardsToShow}px)` }}
                                    variants={scaleIn}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {/* Color Header */}
                                    <div className={`${project.color} h-3 border-b-2 border-black`} />

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Status Badge */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="bg-gray-100 border border-black px-3 py-1 text-xs font-bold uppercase">
                                                {project.status}
                                            </span>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black transition" />
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-black text-white text-xs px-2 py-1 font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: totalDots }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 border-2 border-black transition-all ${index === currentIndex
                                    ? 'bg-yellow-400 scale-125'
                                    : 'bg-white hover:bg-gray-200'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-4 md:hidden">
                        <button
                            onClick={handlePrev}
                            className="bg-yellow-400 border-2 border-black p-2 shadow-[3px_3px_0px_0px_black] active:shadow-[0px_0px_0px_0px_black] active:translate-x-[3px] active:translate-y-[3px] transition-all"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-yellow-400 border-2 border-black p-2 shadow-[3px_3px_0px_0px_black] active:shadow-[0px_0px_0px_0px_black] active:translate-x-[3px] active:translate-y-[3px] transition-all"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="bg-black text-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_#facc15]"
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                >
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        variants={staggerContainer}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={scaleIn}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <motion.div
                                    className="text-3xl mb-2"
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2,
                                        repeat: Infinity,
                                        repeatDelay: 5
                                    }}
                                >
                                    {stat.icon}
                                </motion.div>
                                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                >
                    <motion.a
                        href="https://medium.com/@centauryy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-yellow-400 px-8 py-4 border-2 border-black shadow-[5px_5px_0px_0px_black] hover:shadow-[0px_0px_0px_0px_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-bold text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Read on Medium
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
