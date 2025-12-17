import { useState, Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { TfiAlignLeft } from "react-icons/tfi";
// components
//header
import { NavBar } from "./components/navBar";
// import { Map } from "./components/map";
import { SplashScreen } from "./components/SplashScreen";

//icon
import { TfiThemifyFavicon, TfiMapAlt } from "react-icons/tfi";
import { GiBed } from "react-icons/gi";
// images
import logoImg from "./assets/img/logo.png";
//libs
// import Ga4RouteListener from "./libs/Ga4RouteListener";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  const handleLoaded = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <SplashScreen onLoaded={() => handleLoaded()} />
      <div className="min-h-screen bg-[#ffd6e2]">
        <header className="sticky top-0 z-10 bg-[#ffd6e2]">
          <div className="flex justify-between items-center p-2">
            <img className="h-12" src={logoImg} alt="logo" />
            <div className="flex items-center gap-4 text-xl text-[#525151]">
              <NavLink>繁中</NavLink>
              <NavLink>EN</NavLink>
              <TfiAlignLeft className="text-3xl ml-4" onClick={toggleSideBar} />
            </div>
          </div>
          <NavBar />
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <div className="flex flex-col justify-start items-start gap-4 bg-[#A12245] p-4 shadow-lg rounded-lg">
            <p className="text-center text-xl text-white">
              24小時服務專線：<span>02-1234-5678</span>
            </p>
            <p className="text-center text-xl text-white">
              email：<span>info@hotel.com</span>
            </p>
            <p className="text-center text-xl text-white">
              傳真：<span>02-1234-5678</span>
            </p>
            <p className="text-center text-xl text-white">
              地址：<span>台北市中山區中山北路一段xxx號</span>
            </p>
          </div>
        </footer>

        <div className="fixed bottom-32 right-0 h-fit z-2">
          <div className="flex flex-col justify-center items-center gap-2 w-fit transition-all bg-[#A12245] duration-300 text-white rounded-full px-4 py-1 shadow-2xl">
            <div className="flex flex-col items-center gap-0.5 w-8  active:bg-[#851533] rounded-lg">
              <GiBed className="text-xl" />
              <NavLink>立即訂房</NavLink>
            </div>
            <div className="flex flex-col items-center gap-0.5 w-8 active:bg-[#851533] rounded-lg">
              <TfiThemifyFavicon className="text-xl" />
              <NavLink>客服中心</NavLink>
            </div>
            <div className="flex flex-col items-center gap-1 w-8 active:bg-[#851533] rounded-lg">
              <TfiMapAlt className="text-xl" />
              <NavLink>導航</NavLink>
            </div>
          </div>
        </div>
        <div
          className=" absolute top-0 left-0 backdrop-blur-sm h-screen w-screen bg-black/50 z-10"
          onClick={toggleSideBar}
          style={{ display: sideBar ? "block" : "none" }}
        >
          <div className="flex justify-end w-full h-full">
            <div className="w-1/2 h-screen bg-[#ffd6e2]">
              <h2>Side Bar</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
