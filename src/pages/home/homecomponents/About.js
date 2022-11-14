import React from 'react';

function About() {
  return (
    <div className="p-5 mb-10">
      <div className="flex justify-center mb-5">
        <div className="w-[1000px]">
          <h1 className="text-center  underline font-bold text-3xl mb-5">"Coffee of Indonesian is a company that engaged on the export of coffee. We are providing the best quality and taste of Indonesian coffee"</h1>
        </div>
      </div>

      {/* Services */}
      <div className="h-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Batas */}
        <div className="hover:scale-105 transition duration-300 group" style={{ backgroundImage: `url(/services/s1.jpg)` }}>
          <div className="relative w-full h-20 lg:h-96 bg-[#1f3528] bg-opacity-50 group-hover:bg-opacity-0 transition duration-300">
            <div className="absolute bottom-8 left-5 text-3xl text-white font-bold">
              <p>Coffee</p>
              <div className="flex">
                <p>Export</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 arrow-animate ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* End Batas */}
        {/* Batas */}
        <div className="hover:scale-105 transition duration-300 group" style={{ backgroundImage: `url(/services/s2.jpg)` }}>
          <div className="relative w-full h-20 lg:h-96 bg-[#1f3528] bg-opacity-50 group-hover:bg-opacity-0 transition duration-300">
            <div className="absolute bottom-8 left-5 text-3xl text-white font-bold">
              <p>Coffee</p>
              <div className="flex">
                <p>Export</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 arrow-animate ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* End Batas */}
        {/* Batas */}
        <div className="hover:scale-105 transition duration-300 group" style={{ backgroundImage: `url(/services/s3.jpg)` }}>
          <div className="relative w-full h-20 lg:h-96 bg-[#1f3528] bg-opacity-50 group-hover:bg-opacity-0 transition duration-300">
            <div className="absolute bottom-8 left-5 text-3xl text-white font-bold">
              <p>Coffee</p>
              <div className="flex">
                <p>Export</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 arrow-animate ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* End Batas */}
        {/* Batas */}
        <div className="hover:scale-105 transition duration-300 group" style={{ backgroundImage: `url(/services/s4.jpg)` }}>
          <div className="relative w-full h-20 lg:h-96 bg-[#1f3528] bg-opacity-50 group-hover:bg-opacity-0 transition duration-300">
            <div className="absolute bottom-8 left-5 text-3xl text-white font-bold">
              <p>Coffee</p>
              <div className="flex">
                <p>Export</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 arrow-animate ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* End Batas */}
      </div>
      {/* End Services */}
    </div>
  );
}

export default About;
