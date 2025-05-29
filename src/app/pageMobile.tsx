import React from "react";
import Carousel from "./carousel";

const HomePageMobile = () => {
  return (
    <div className="bg-[#fceade] text-black min-h-screen font-space">
      {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-black relative">
          {/* Hamburger Menu */}

          <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="w-8 h-8 flex flex-col justify-center items-center gap-1 rounded drawer-button">
              <div className="w-4 h-0.5 bg-black" />
              <div className="w-4 h-0.5 bg-black" />
              <div className="w-4 h-0.5 bg-black" />
          </label>
        </div>
        <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content trabs w-full min-h-full p-4 relative">
          {/* Tombol Close */}
          <label
            htmlFor="my-drawer"
            className="top-4 right-4 text-xl font-bold cursor-pointer"
          >
            ✕
          </label>


          {/* Sidebar content */}
          <div className="py-8">
        
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
          </div>
        </div>
      </div>
      </div>

          {/* Center Title */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold font-space">Centauryy</h1>

          {/* Search Icon */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Navbar */}
       <div className="bg-[#fceade] p-4 grid grid-cols-5 grid-rows-2 gap-2 text-center">
        <span className="col-start-1 row-start-1 ml-10 text-end hover:underline cursor-pointer">Design</span>
        <span className="col-start-3 row-start-1  text-justify hover:underline cursor-pointer">Technology</span>
        <span className="col-start-4 row-start-1 px-10 hover:underline cursor-pointer">Components</span>
        <span className="col-start-2 row-start-2 text-center hover:underline cursor-pointer">Networking</span>
        <span className="col-start-4 row-start-2 text-justify -ml-6 hover:underline cursor-pointer">GlobalAccess</span>
      </div>



      {/* Hero */}
      <div className="text-center h-125 py-8 flex flex-col justify-center items-center">
  <h1 className="text-3xl tracking-wider">Artichels &</h1>
  <h2 className="text-4xl font-bold tracking-widest">Resources</h2>
  <p className="mt-2 text-sm font-semibold max-w-xs mx-auto">
    Your dreams aren’t too big — just unexplored. Let’s guide your steps to the world out there
  </p>
  <div className="mt-4">
    <button className="btn rounded bg-yellow-400 border border-black text-black px-6 py-1 shadow-[5px_4px_0px_0px_black] hover:shadow-[0px_0px_0_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition">
      Subscribe
    </button>
  </div>
</div>

      <div className="border-t border-black px-4 py-6">
        {['Design', 'Technology'].map((category) => (
          <div key={category} className="mb-6">
            <h3 className="font-bold text-lg mb-2">{category}</h3>
            {[1, 2].map((_, idx) => (
              <div
                key={idx}
                className="border border-black mb-4 shadow-[4px_4px_0_black] bg-white"
              >
                  <p className="text-[10px] text-gray-500 mt-2">dd.mm.yy.html</p>
                  <img
                    src="https://i.pinimg.com/736x/39/3b/a8/393ba8246897375c3c167a11a637b251.jpg"
                    alt="Article Preview"
                    className="w-full hover:bg-amber-300 hover:mask-b-from-0% hover:mask-b-to-0% mask-b-from-20% mask-b-to-80% h-40 object-cover"
                  />
                <div className="p-4">
                  {/* Gambar Preview */}

                  {/* Tanggal */}

                  {/* Judul */}
                  <h4 className="text-sm font-bold tracking-widest text-black mt-1">
                    HeaderArticle
                  </h4>

                  {/* Deskripsi */}
                  <p className="text-xs mt-1 mb-3 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  {/* Tombol */}
                  <button className="bg-yellow-400 px-4 py-1 text-xs shadow-[2px_2px_0_black] hover:shadow-[0px_0px_0_0_black] border border-black hover:translate-x-[2px] hover:translate-y-[2px] transition">
                    More
                  </button>
                </div>


              </div>
            ))}
          </div>
        ))}

        <button className="btn w-full bg-yellow-400 border border-black shadow-[4px_4px_0_black] mt-4">
          See More Articles
        </button>
      </div>

      {/* Carousel Section */}
      <Carousel />

      <div className="w-full px-4 py-4 text-center">
  <h2 className="text-xl font-bold font-mono uppercase">All CallBack User</h2>
</div>

<section className="h-auto">
  <div className="flex flex-col justify-center items-center h-full px-4 py-6">

    {/* Kotak Rating, Views, Likes */}
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[883px] mb-6">
      {/* Box 1 - Rating */}
      <div className="flex-1 bg-gray-300 border border-black shadow-[3px_3px_0_0_black] flex flex-col justify-center items-center px-4 py-6 text-center font-mono text-xs gap-2">
        <div className="text-black font-bold text-sm">⭐ RATING</div>
        <div className="text-black">4.8 / 5</div>
        <div className="text-black">Based on 927 votes</div>
      </div>

      {/* Box 2 - Views */}
      <div className="flex-1 bg-gray-300 border border-black shadow-[3px_3px_0_0_black] flex flex-col justify-center items-center px-4 py-6 text-center font-mono text-xs gap-2">
        <div className="text-black font-bold text-sm">👁️ VIEWS</div>
        <div className="text-black">12.4K</div>
        <div className="text-black">This Month</div>
      </div>

      {/* Box 3 - Likes */}
      <div className="flex-1 bg-gray-300 border border-black shadow-[3px_3px_0_0_black] flex flex-col justify-center items-center px-4 py-6 text-center font-mono text-xs gap-2">
        <div className="text-black font-bold text-sm">❤️ LIKES</div>
        <div className="text-black">3.1K</div>
        <div className="text-black">From 758 users</div>
      </div>
    </div>

    {/* Footer CTA – COMMAND */}
    <div className="w-full max-w-[883px]">
      <div className="h-auto sm:h-[55px] bg-yellow-400 border-1 border-black shadow-[4px_4px_0_0_black] hover:shadow-[0px_0px_0_0_black] flex items-center justify-center font-mono text-sm hover:translate-x-[3px] hover:translate-y-[3px] transition uppercase px-4 py-3 text-center">
        🧠 Command: Execute the idea brutally!
      </div>
    </div>

  </div>
</section>



      {/* Footer */}
      <footer className="text-center text-xs bg-black text-white py-4 border-t border-black">
        © 2025 Centauryy. All rights reserved.
      </footer>
    </div>
);
}

export default HomePageMobile;
