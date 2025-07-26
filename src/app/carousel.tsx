// CarouselBrutal.tsx
"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Dominasi ARM dan CXL: Masa Depan Infrastruktur Data Center",
    image: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*jM6UsFttro0ZroYS.png",
    description:
      "Revolusi infrastruktur data center sedang berlangsung dengan dua teknologi fundamental yang mengubah paradigma...",
  },
  {
    id: 2,
    title: "Mengupas Inovasi AI NVIDIA 2025: Dari Blackwell hingga Nemotron",
    image: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*Z0Y2DICSzMdrWVuh.png",
    description:
      "Tahun 2025 menjadi saksi keunggulan NVIDIA dalam lanskap kecerdasan buatan (AI). Dengan rilis teknologi revolusioner seperti GPU Blackwell dan Nemotron LLM, NVIDIA terus mendominasi panggung AI global. Dikenal..",
  },
  {
    id: 3,
    title: "Dari Cloud ke Edge: Evolusi Produk AI NVIDIA di Tahun 2025",
    image: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*dfJZSeucAz2JaJV7.png",
    description:
      "Dalam beberapa tahun terakhir, dunia telah menyaksikan transformasi besar dalam cara teknologi kecerdasan buatan (AI) dijalankan dan...",
  },
];

export default function CarouselBrutal() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  const getPrevIndex = (i: number) => (i === 0 ? cards.length - 1 : i - 1);
  const getNextIndex = (i: number) => (i === cards.length - 1 ? 0 : i + 1);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#FCEEE3] relative overflow-hidden py-10">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">

        {/* Header */}
        <div className="bg-yellow-400 mt-20 border-2 border-black px-6 py-5 text-left shadow-[5px_4px_0_0_black] w-full md:w-1/3">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase font-mono text-black leading-none">
            Latest & Greatest
          </h1>
          <p className="text-sm sm:text-base font-mono text-black mt-2">
            Discover bold, raw, and unfiltered creations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full md:w-2/3 flex items-center justify-center gap-4">

          {/* Left preview */}
          <motion.div
            key={`left-${index}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.7, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block w-1/4 h-96 bg-center bg-cover blur-sm scale-90 opacity-70 border-[2px] border-black rounded-none"
            style={{ backgroundImage: `url(${cards[getPrevIndex(index)].image})` }}
          />

          {/* Active Card */}
          <div className="relative w-full md:w-[50rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={cards[index].id}
                initial={{ opacity: 0, x: direction === "left" ? -300 : 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "left" ? 300 : -300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="group rounded-none border-2 border-black shadow-[6px_6px_0px_0px_black] overflow-hidden bg-white relative"
              >
                <div
                  className="h-64 md:h-96 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${cards[index].image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-50 transition-opacity duration-500 flex flex-col justify-end p-4">
                    <div className="hover:opacity-100">
                      <h4 className="text-sm font-bold tracking-widest text-white">{cards[index].title}</h4>
                      <p className="text-xs mt-1 mb-3 text-white">{cards[index].description}</p>
                      <button className="bg-yellow-400 px-4 py-1 text-xs shadow-[3px_3px_0px_0px_black] hover:shadow-[0px_0px_0_0_black] border border-black hover:translate-x-[3px] hover:translate-y-[3px] transition">
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-[-40px] top-1/2 -translate-y-1/2 hidden md:block text-black hover:scale-110"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-[-40px] top-1/2 -translate-y-1/2 hidden md:block text-black hover:scale-110"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Right preview */}
          <motion.div
            key={`right-${index}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.7, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block w-1/4 h-96 bg-center bg-cover blur-sm scale-90 opacity-70 border-[2px] border-black rounded-none"
            style={{ backgroundImage: `url(${cards[getNextIndex(index)].image})` }}
          />
        </div>
      </div>
    </div>
  );
}

