import React from 'react';
import Contact from './Contact';

const Team = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-2xl font-bold my-5">
        <span className="border-b-4 border-[#d7b26b]">Our Team</span>
      </h1>
      <p className="text-center text-3xl font-bold mb-5">We have a team of highly skilled, committed and motivated professionals specializing in respective core fields.</p>
      <div className="flex justify-center gap-20 mb-5">
        <div className="w-96 rounded-lg">
          <img src="/team/rizky.jpg" alt="rizky" className="rounded-lg shadow-xl" />
          <h3 className="text-xl text-center font-bold">Rizky Pratama,S.Kom</h3>
          <div className="flex justify-center">
            <h5 className="text-center bg-[#1f3528] px-4 py-2 text-white rounded-full">Founder</h5>
          </div>
          <div className="flex justify-center gap-8 mt-2">
            <img src="/icons/linkedin.png" className="w-6" />
            <img src="/icons/twitter.png" className="w-6" />
            <img src="/icons/facebook.png" className="w-6" />
            <img src="/icons/instagram.png" className="w-6" />
          </div>
        </div>
        <div className="w-96 rounded-lg">
          <img src="/team/aria.jpg" alt="aria" className="rounded-lg shadow-xl" />
          <h3 className="text-xl text-center font-bold">Aria Batara Brahma, S.T</h3>
          <div className="flex justify-center">
            <h5 className="text-center bg-[#1f3528] px-4 py-2 text-white rounded-full">Co-Founder</h5>
          </div>
          <div className="flex justify-center gap-8 mt-2">
            <img src="/icons/linkedin.png" className="w-6" />
            <img src="/icons/twitter.png" className="w-6" />
            <img src="/icons/facebook.png" className="w-6" />
            <img src="/icons/instagram.png" className="w-6" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Team;
