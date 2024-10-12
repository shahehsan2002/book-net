import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black to-blue-900 text-white overflow-hidden'>
      
      {/* Starry background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-blue-900 overflow-hidden z-0">
        {/* Layered Stars */}
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-1000" style={{top: '10%', left: '20%'}}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-2000" style={{top: '50%', left: '40%'}}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle" style={{top: '70%', left: '60%'}}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle" style={{top: '40%', right: '30%'}}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-3000" style={{top: '25%', right: '50%'}}></div>
      </div>

      {/* Parallax Planets */}
      <div className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-yellow-300 rounded-full blur-xl animate-spin-slow"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 md:w-40 md:h-40 bg-purple-400 rounded-full blur-2xl animate-spin-fast"></div>

      {/* Floating Astronaut */}
      <div className='absolute -top-20 right-0 w-56 h-56'>
        <img src="/astronaut.svg" alt="astronaut" className='animate-floating' />
      </div>

      {/* 404 Number with Glow Effect and Rotation */}
      <div className='z-10 text-[12rem] font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-glow rotate-6'>
        404
      </div>

      {/* Main Message with Neon Effect */}
      <h1 className='z-10 mt-4 text-5xl font-bold md:text-6xl lg:text-7xl text-white drop-shadow-lg transition duration-500 ease-in-out transform hover:text-yellow-400 hover:scale-110'>
        Lost in Space!
      </h1>

      {/* Subtext with Subtle Glow */}
      <p className='z-10 mt-2 text-xl md:text-2xl text-gray-300 opacity-80 animate-fadeIn'>
        We can't seem to find the page you're looking for.
      </p>

      {/* Take Me Home Button with a Space Ripple Effect */}
      <a
        href="/"
        className='z-10 mt-8 px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:bg-gradient-to-l hover:from-pink-600 hover:to-purple-500 relative overflow-hidden'>
        <span className='absolute inset-0 bg-gradient-to-r from-yellow-300 to-transparent opacity-20 rounded-full animate-ripple'></span>
        Take Me Home
      </a>

      {/* Shooting Stars */}
      <div className="absolute w-2 h-2 bg-white rounded-full blur-xl transform -rotate-45 animate-shootingStar delay-1000" style={{top: '30%', left: '70%'}}></div>
      <div className="absolute w-2 h-2 bg-white rounded-full blur-xl transform -rotate-45 animate-shootingStar delay-2000" style={{top: '60%', left: '20%'}}></div>

    </div>
  );
};

export default NotFoundPage;
