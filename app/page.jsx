import React from 'react';

const Landing = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(\i_bg.svg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        {/* <div className="w-full h-1/4 bg-slate-900 bg-opacity-50"></div> */}
        <div className="hero-content text-white text-center">
              <div className="max-w-screen-lg">
                <h1 className="mb-2 text-8xl md:text-9xl font-bold">MOALBOAL</h1>
                <h1 className="mb-5 text-lg md:text-3xl font-thin"><i>EXPERIENCE CEBU'S HIDDEN TREASURE</i></h1>
                <p className="mb-5 text-md md:text-lg font-thin pt-10 pb-10 px-20">
                  <b>Moalboal</b> is a tropical escape renowned for white-sand beaches,
                  vibrant coral reefs, and the famous sardine run. Dive into
                  adventure or relax by the serene shores—Moalboal has it all.
                </p>
                <button className="btn hover:text-white font-semibold text-md hover:bg-slate-800">
                  <a href="/home">Get Started ➤</a>
                </button>
              </div>
            </div>
      </div>
    </>
  );
};

export default Landing;