"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Our Mission",
        description: "Empowering curious minds with knowledge and resources to explore technology and design without boundaries."
    },
    {
        icon: Lightbulb,
        title: "Innovation First",
        description: "We believe in pushing the limits of what's possible, sharing cutting-edge insights and breakthrough ideas."
    },
    {
        icon: Users,
        title: "Community Driven",
        description: "Built by learners, for learners. Our content is shaped by the questions and curiosity of our community."
    },
    {
        icon: Heart,
        title: "Open Knowledge",
        description: "Quality education should be accessible. We're committed to sharing knowledge freely with everyone."
    }
];

const focusAreas = [
    "Data Center & Cloud Infrastructure",
    "Artificial Intelligence & Machine Learning",
    "Modern Web Technologies",
    "Hardware Architecture & Innovation",
    "Design Systems & UI/UX Principles"
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

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function AboutSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-16 px-6 md:px-16 border-b-2 border-black scroll-mt-20 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <motion.div
                        className="inline-block bg-yellow-400 border-2 border-black px-4 py-2 mb-4 shadow-[3px_3px_0px_0px_black] text-sm font-bold uppercase tracking-wider"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        About Us
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        Who We Are
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Centauryy is a personal knowledge hub dedicated to exploring and sharing
                        insights on technology, design, and everything in between.
                    </p>
                </motion.div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        className="bg-white border-2 border-black p-8 shadow-[5px_5px_0px_0px_black]"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInLeft}
                        whileHover={{
                            boxShadow: "8px 8px 0px 0px black",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.h3
                            className="text-2xl font-bold mb-4 flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.span
                                animate={{ rotate: [0, -10, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                            >
                                📖
                            </motion.span>
                            Our Story
                        </motion.h3>
                        <p className="text-gray-700 mb-4">
                            What started as a personal collection of articles and research notes
                            has grown into a curated library of technology insights. We believe
                            that complex topics can be explained simply, and that learning should
                            be both accessible and engaging.
                        </p>
                        <p className="text-gray-700">
                            Every article is crafted with care, breaking down intricate concepts
                            into digestible pieces while maintaining technical accuracy for those
                            who want to go deeper.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-black text-white border-2 border-black p-8 shadow-[5px_5px_0px_0px_#facc15]"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInRight}
                        whileHover={{
                            boxShadow: "8px 8px 0px 0px #facc15",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.h3
                            className="text-2xl font-bold mb-4 flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
                            >
                                🎯
                            </motion.span>
                            Our Focus
                        </motion.h3>
                        <motion.ul
                            className="space-y-3"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {focusAreas.map((area, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3"
                                    variants={scaleIn}
                                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                >
                                    <motion.span
                                        className="text-yellow-400 font-bold"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                                    >
                                        →
                                    </motion.span>
                                    <span>{area}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>

                {/* Values Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border-2 border-black p-6 shadow-[3px_3px_0px_0px_black] hover:shadow-[0px_0px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
                            variants={scaleIn}
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                        >
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <value.icon className="w-8 h-8 mb-4 text-yellow-600" />
                            </motion.div>
                            <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                            <p className="text-sm text-gray-600">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
