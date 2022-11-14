import { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Arabica from './productcomponents/Arabica';
import Robusta from './productcomponents/Robusta';
import Contact from '../../components/Contact';

export default function Product() {
  const [sidebar, setSidebar] = useState(false);
  const [category, setCategory] = useState(false);

  const ShowSidebar = () => {
    !sidebar ? setSidebar(true) : setSidebar(false);
  };

  const CoffeeCategory = () => {
    !category ? setCategory(true) : setCategory(false);
  };

  const ModalBox = () => {
    return (
      <div className="min-h-screen bg-black bg-opacity-50 p-10 w-screen fixed z-[999] flex justify-center items-center">
        <div className="w-full h-[500px] bg-white">asdasd</div>
      </div>
    );
  };

  return (
    <div>
      {/* <ModalBox /> */}
      <div>
        {/* Navigation */}
        <div className="nav-active">
          <div className="font-bold">
            <button onClick={() => ShowSidebar()} className="hover:scale-125 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-10">
            <a
              href="https://www.google.com/maps/place/Jl.+Raya+Cabangbungin,+Sindangjaya,+Kec.+Cabangbungin,+Kabupaten+Bekasi,+Jawa+Barat/@-6.0808238,107.1374496,17z/data=!3m1!4b1!4m5!3m4!1s0x2e6a28e2b67b40a5:0xd82b64da76c7b50c!8m2!3d-6.0808291!4d107.1396383"
              target={'_blank'}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h5 className="text-xl ">Find Location</h5>
              </div>
            </a>
            <img src="/Logo.png" className="w-16" alt="coffe-of-indonesian" />
          </div>
        </div>
        {/* End Navigation */}
        {/* Sidebar */}
        <div>
          <div className={sidebar ? 'sidebar-open relative' : 'sidebar-close'}>
            <button className="absolute right-2" onClick={() => ShowSidebar()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 rounded-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <div className="flex items-center gap-5">
              <img src="/Logo.png" className="w-16" alt="coffe-of-indonesian" />
              <div className="font-bold border-b-4 border-[#d7b26b]">
                <p>COFFEE OF</p>
                <p>INDONESIAN</p>
              </div>
            </div>
            {/* Sidebar Menu */}
            <div className="mt-5">
              <Link to={'/'}>
                <div className="flex items-center gap-5 mb-5 hover:translate-x-5 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <h1>Home</h1>
                </div>
              </Link>
              <Link to={'/product'}>
                <div className="flex items-center gap-5 mb-5 hover:translate-x-5 transition duration-300">
                  <img src="/icons/beans2.png" className="w-8" />
                  <h1>Product</h1>
                </div>
              </Link>
              <Link to={'/company'}>
                <div className="flex items-center gap-5 mb-5 hover:translate-x-5 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                  <h1>Company</h1>
                </div>
              </Link>
            </div>
            {/* End Sidebar Menu */}
          </div>
        </div>
        {/* End Sidebar */}
        {/* Content */}
        <div className="pt-32">
          <div className="h-20 bg-[#1f3528] text-white flex justify-center items-center gap-5">
            <button onClick={() => (category ? CoffeeCategory() : '')} className="border-2 w-32 h-12 rounded-lg hover:bg-white hover:text-[#1f3528] hover:font-bold active:scale-90 transition-all duration-150">
              Arabica
            </button>
            <button onClick={() => (!category ? CoffeeCategory() : '')} className="border-2 w-32 h-12 rounded-lg hover:bg-white hover:text-[#1f3528] hover:font-bold active:scale-90 transition-all duration-150">
              Robusta
            </button>
          </div>
          {category ? <Robusta /> : <Arabica />}
          <Contact />
        </div>
        {/* End Content */}
      </div>
    </div>
  );
}
