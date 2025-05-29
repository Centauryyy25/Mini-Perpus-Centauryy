import React from "react";
import BrutalCarousel from "./carousel";

const HomePageDesktop = () => {
  return (
    <div className="bg-[#fceadd] text-black overflow-auto scrollbar-hide font-sans">
      <div className="h-screen border-b-2 border-black   flex flex-col">

    {/* Navbar */}
    <header className="flex justify-between items-center px-6 py-4 border-b-2 border-black">
      <div className="flex items-center space-x-2">
        <div className="text-2xl">
          <img src="/asset/Untitled38_20250512074955.png" className="w-10 h-10" alt="🌟" />
        </div>
        <h1 className="text-xl font-bold font-space bold">Centauryy</h1>
      </div>
      <nav className="hidden md:flex font-space  space-x-6 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="hover:underline">ResearchArticles</div>
        <ul tabIndex={0} className="dropdown-content menu bg-[#FCEEE3] transition rounded-box z-1 w-52 p-2 shadow-xl">
          <li><a>Technology</a></li>
          <li><a>Components</a></li>
          <li><a>Networking</a></li>
          <li><a>GlobalAcces</a></li>
        </ul>
      </div>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Project</a>
      </nav>
      <button>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
      </button>
    </header>

    {/* Hero Section */}
    <div className="flex-1 flex items-center justify-center px-4">
      <section className="flex flex-col items-center justify-center text-center h-full px-4">
        <h2 className="text-5xl md:text-6xl font-space tracking-wider mb-2 font-semibold">
          Artichels &
        </h2>
        <h2 className="text-7xl md:text-8xl font-space font-black mb-6">
          Resources
        </h2>
        <p className="text-xl md:text-2xl font-space max-w-2xl mb-8">
          — Your dreams aren’t too big —<br />
          just unexplored. Let’s guide your steps to the world out there
        </p>
        <button className="bg-yellow-400 px-12 py-3 border border-black shadow-[5px_4px_0px_0px_black] hover:shadow-[0px_0px_0_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition">
          Subscribe
        </button>
      </section>
    </div>
    
  </div>

<div className="h-screen border-b-1 border-black">

      {/* Content Sections */}
      <section className="px-6 md:px-16 my-10">
        <h3 className="font-bold text-lg mb-4">Design</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <ArticleCard />
          <ArticleCard />
          <div className="hidden md:block">
            <ArticleCard />
          </div>
        </div>

        <h3 className="font-bold text-lg mb-4">Technology</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <ArticleCard />
          <ArticleCard />
          <div className="hidden md:block">
            <ArticleCard />
          </div>
        </div>
      </section>

      {/* See More Button */}
      <div className="text-center mb-16">
        <button className="bg-yellow-400 px-6 py-2 border-1 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[0px_0px_0_0_black] transition hover:translate-x-[3px] hover:translate-y-[3px]">
          See More Articels
        </button>
      </div>
</div>
<BrutalCarousel />
      <section className="h-100 border-1">


  <div className="flex flex-col justify-center items-center h-full px-4">
    {/* Kotak Rating, Views, Likes */}
    <div className="flex gap-4 w-full max-w-[883px] mb-6">
      {/* Box 1 - Rating */}
      <div className="flex-1 bg-gray-300 border border-black shadow-[3px_3px_0_0_black] flex flex-col justify-center items-center px-2 py-6 text-center font-mono text-xs gap-2">
        <div className="text-black font-bold text-sm">⭐ RATING</div>
        <div className="text-black">4.8 / 5</div>
        <div className="text-black">Based on 927 votes</div>
      </div>

      {/* Box 2 - Views */}
      <div className="flex-1 bg-gray-300 border border-black shadow-[3px_3px_0_0_black] flex flex-col justify-center items-center px-2 py-6 text-center font-mono text-xs gap-2">
        <div className="text-black font-bold text-sm">👁️ VIEWS</div>
        <div className="text-black">12.4K</div>
        <div className="text-black">This Month</div>
      </div>

      {/* Box 3 - Likes */}
      <div className="flex-1 bg-gray-300 border border-black shadow-[3px_3px_0_0_black] flex flex-col justify-center items-center px-2 py-6 text-center font-mono text-xs gap-2">
        <div className="text-black font-bold text-sm">❤️ LIKES</div>
        <div className="text-black">3.1K</div>
        <div className="text-black">From 758 users</div>
      </div>
    </div>

    {/* Footer CTA – COMMAND */}
    <div className="w-full max-w-[883px]">
      <div className="h-[55px] bg-yellow-400 border-1 border-black shadow-[4px_4px_0_0_black] hover:shadow-[0px_0px_0_0_black] flex items-center justify-center font-mono text-sm hover:translate-x-[3px] hover:translate-y-[3px] transition uppercase">
        🧠 Command: Execute the idea brutally!
      </div>
    </div>
  </div>
</section>
          
      {/* Footer */}
      <footer className="px-6 py-4 border-black text-center bg-black text-white text-xs">
        © 2025 Centauryy. All rights reserved.
      </footer>
    </div>
  );
};



const ArticleCard = () => (
  <div className="border border-black grayscale hover:grayscale-0 shadow-[5px_5px_0px_0px_black] hover:shadow-[0px_0px_0_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition overflow-hidden bg-white">
  {/* Header tanggal */}
  <div className="bg-gray-200 px-2 text-center py-1 border-b border-black text-xs font-mono">
    14.05.25.html
  </div>

  {/* Gambar preview */}
  <div className="w-full h-35 overflow-hidden border-b border-black">
    <img
      src="https://i.pinimg.com/736x/39/3b/a8/393ba8246897375c3c167a11a637b251.jpg"
      alt="Article Preview"
      className="w-full hover:bg-amber-300 h-full object-cover"
    />
  </div>

  {/* Konten artikel */}
  <div className="p-4">
    <h4 className="text-sm font-bold tracking-widest text-black">HeaderArticle</h4>
    <p className="text-xs mt-1 mb-3 text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <button className="bg-yellow-400 px-4 py-1 text-xs shadow-[3px_3px_0px_0px_black] hover:shadow-[0px_0px_0_0_black] border border-black hover:translate-x-[3px] hover:translate-y-[3px] transition">
      More
    </button>
  </div>
</div>

);

export default HomePageDesktop;