import React from "react";
import BrutalCarousel from "./carousel";
import SearchModal from "./SearchModal";
import ArticleCard from "./cardArticel";
import { useState } from "react";
import Image from "next/image";
import useMediumPosts from "../../hooks/useMediumPosts";
import { Loader2, AlertCircle } from 'lucide-react';

const HomePageDesktop = () => {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { posts, isLoading, error } = useMediumPosts();

  const handleSearchClick = () => setIsSearchModalOpen(true);
  const handleSearchModalClose = () => setIsSearchModalOpen(false);

  // Group posts by categories for section display
  const getPostsByCategory = (category: string) => {
    return posts.filter(post => 
      post.categories?.some(cat => 
        cat.toLowerCase().includes(category.toLowerCase())
      )
    ).slice(0, 3);
  };

  const designPosts = getPostsByCategory('design');
  const techPosts = getPostsByCategory('tech') || getPostsByCategory('technology');
  
  // Fallback to recent posts if no category matches
  const fallbackPosts = posts.slice(0, 6);

  return (
    <div className="bg-[#fceadd] text-black overflow-auto scrollbar-hide font-sans">
      <div className="h-screen border-b-2 border-black   flex flex-col">

    {/* Navbar */}
    <header className="flex justify-between items-center px-6 py-4 border-b-2 border-black">
      <div className="flex items-center space-x-2">
        <div className="text-2xl">
          <Image src="/asset/Untitled38_20250512074955.png" width={10} height={10} className="w-10 h-10" alt="🌟" />
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
      <button onClick={handleSearchClick} className="cursor-pointer ">
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


      {/* Content Sections */}
      <section className="px-6 md:px-16 my-10 border-b-2 border-black">
          <h3 className="font-bold text-lg mb-4">Design</h3>
          
          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white border-2 border-black h-64 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin" />
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-red-100 border-2 border-red-500 h-64 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
              ))}
            </div>
          )}

          {/* Design Articles Grid */}
          {!isLoading && !error && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {designPosts.length > 0 ? (
                <>
                  {designPosts.slice(0, 2).map((post, index) => (
                    <ArticleCard key={index} post={post} />
                  ))}
                  <div className="hidden md:block">
                    {designPosts[2] && <ArticleCard post={designPosts[2]} />}
                  </div>
                </>
              ) : (
                // Fallback to recent posts
                <>
                  {fallbackPosts.slice(0, 2).map((post, index) => (
                    <ArticleCard key={index} post={post} />
                  ))}
                  <div className="hidden md:block">
                    {fallbackPosts[2] && <ArticleCard post={fallbackPosts[2]} />}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Technology Section */}
          <h3 className="font-bold text-lg mb-4">Technology</h3>
          
          {!isLoading && !error && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {techPosts.length > 0 ? (
                <>
                  {techPosts.slice(0, 2).map((post, index) => (
                    <ArticleCard key={index} post={post} />
                  ))}
                  <div className="hidden md:block">
                    {techPosts[2] && <ArticleCard post={techPosts[2]} />}
                  </div>
                </>
              ) : (
                // Fallback to more recent posts
                <>
                  {fallbackPosts.slice(3, 5).map((post, index) => (
                    <ArticleCard key={index} post={post} />
                  ))}
                  <div className="hidden md:block">
                    {fallbackPosts[5] && <ArticleCard post={fallbackPosts[5]} />}
                  </div>
                </>
              )}
            </div>
          )}

        {/* See More Button - Exact same style as requested */}
        <div className="text-center mb-16">
          <button 
            onClick={handleSearchClick}
            className="bg-yellow-400 px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[0px_0px_0_0_black] transition hover:translate-x-[3px] hover:translate-y-[3px] font-bold"
            >
            See More Articles
          </button>
        </div>
            </section>
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
          
      {/* Search Modal */}
      <SearchModal open={isSearchModalOpen} onClose={handleSearchModalClose} />

      {/* Footer */}
      <footer className="px-6 py-4 border-black text-center bg-black text-white text-xs">
        © 2025 Centauryy. All rights reserved.
      </footer>

    </div>
  );
};

export default HomePageDesktop;