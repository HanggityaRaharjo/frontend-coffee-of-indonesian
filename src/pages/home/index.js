import { useEffect, useState } from 'react';
import './index.css';
import About from './homecomponents/About';
import Contact from '../../components/Contact';
import { Link } from 'react-router-dom';

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const [nav, setNav] = useState(false);
  const [currentBg, setCurrentBg] = useState(1);
  const [image, setImage] = useState(false);

  const ShowSidebar = () => {
    !sidebar ? setSidebar(true) : setSidebar(false);
  };

  useEffect(() => {
    setTimeout(() => {
      image === false ? setImage(true) : setImage(false);
      currentBg !== 7 ? setCurrentBg(currentBg + 1) : setCurrentBg(1);
    }, 5000);
  }, [currentBg, image]);

  const getData = () => {
    window.scrollY >= 300 ? setNav(true) : setNav(false);
  };
  window.addEventListener('scroll', getData);
  return (
    <div>
      <div>
        {/* Navigation */}
        <div className={!nav ? 'nav' : 'nav-active'}>
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
        <div>
          {/* Banner */}
          <div className="text-white">
            <div className="flex justify-center absolute">
              <img className={image ? 'image-slider' : 'image-slider-close'} src={`/banner/${currentBg}.jpg`} alt="coffe-ofindonesian" />
            </div>

            <div className="bg-green-900 relative bg-opacity-40 z-10 flex min-h-screen w-full justify-center items-center">
              <h1 className="text-center text-2xl font-bold">
                PROVIDING THE BEST QUALITY AND TASTE OF <span className="bg-[#1f3528] px-2"> INDONESIAN COFFEE</span>
              </h1>
            </div>
          </div>
          {/* End Banner */}
          <About />
          <div className="m-5">
            <img src="/indonesia.png" className="" />
          </div>
          <div className="grid grid-cols-2 mb-5">
            <div className="flex justify-center">
              <div className="bg-[#1f3528] shadow-xl text-white py-5 px-10">
                <h5 className="font-bold ">Our plantation is located in West Java, Indonesia</h5>
                <table>
                  <tr>
                    <td>Typical farm size</td>
                    <td className="w-2"> : </td>
                    <td>60 hectares</td>
                  </tr>
                  <tr>
                    <td>Altitude</td>
                    <td className="w-2"> : </td>
                    <td>1.200 - 1.333 masl</td>
                  </tr>
                  <tr>
                    <td>Soils</td>
                    <td className="w-2"> : </td>
                    <td>Latosol</td>
                  </tr>
                  <tr>
                    <td>Average annual temperature</td>
                    <td className="w-2"> : </td>
                    <td>18 C</td>
                  </tr>
                  <tr>
                    <td>Average rainfall</td>
                    <td className="w-2"> : </td>
                    <td>1.782 mm</td>
                  </tr>
                  <tr>
                    <td>Humidity</td>
                    <td className="w-2"> : </td>
                    <td>82%</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#1f3528] shadow-xl text-white py-5 px-10">
                <h5 className="font-bold ">Our plantation is located in West Java, Indonesia</h5>
                <table>
                  <tr>
                    <td>Typical farm size</td>
                    <td className="w-2"> : </td>
                    <td>60 hectares</td>
                  </tr>
                  <tr>
                    <td>Altitude</td>
                    <td className="w-2"> : </td>
                    <td>1.200 - 1.333 masl</td>
                  </tr>
                  <tr>
                    <td>Soils</td>
                    <td className="w-2"> : </td>
                    <td>Latosol</td>
                  </tr>
                  <tr>
                    <td>Average annual temperature</td>
                    <td className="w-2"> : </td>
                    <td>18 C</td>
                  </tr>
                  <tr>
                    <td>Average rainfall</td>
                    <td className="w-2"> : </td>
                    <td>1.782 mm</td>
                  </tr>
                  <tr>
                    <td>Humidity</td>
                    <td className="w-2"> : </td>
                    <td>82%</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <Contact />
        </div>
        {/* End Content */}
      </div>
    </div>
  );
}
