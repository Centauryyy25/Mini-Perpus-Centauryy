// CarouselBrutal.tsx
"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "HeaderArticle 1",
    image: "https://i.pinimg.com/736x/39/3b/a8/393ba8246897375c3c167a11a637b251.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "HeaderArticle 2",
    image: "https://i.pinimg.com/736x/c4/e0/72/c4e072f141b24182f5679d291ceae392.jpg",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "HeaderArticle 3",
    image: "https://i.pinimg.com/736x/39/3b/a8/393ba8246897375c3c167a11a637b251.jpg",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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

