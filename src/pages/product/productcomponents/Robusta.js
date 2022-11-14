import React from 'react';

function Robusta() {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      <div className="border aspect-[4/3] relative">
        <img src="/robusta/robusta.jpg" style={{ height: '100%' }} />
        <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl shadow-xl">JAVA</p>
      </div>
      <div className="border aspect-[4/3] relative">
        <img src="/robusta/robusta.jpg" style={{ height: '100%' }} />
        <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl shadow-xl">LAMPUNG</p>
      </div>
      <div className="border aspect-[4/3] relative">
        <img src="/robusta/robusta.jpg" style={{ height: '100%' }} />
        <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl shadow-xl">ACEH</p>
      </div>
      <div className="border aspect-[4/3] relative">
        <img src="/robusta/robusta.jpg" style={{ height: '100%' }} />
        <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl shadow-xl">BALI</p>
      </div>
      <div className="border aspect-[4/3] relative">
        <img src="/robusta/robusta.jpg" style={{ height: '100%' }} />
        <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl shadow-xl">PAPUA</p>
      </div>
    </div>
  );
}

export default Robusta;
