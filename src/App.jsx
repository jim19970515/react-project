import { useState, Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { TfiAlignLeft } from "react-icons/tfi";
// components
//header
import { NavBar } from "./components/navBar";
import { Map } from "./components/map";
import { SwiperComponent } from "./components/swiper";
function App() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center p-2">
          <img className="h-12" src="/src/assets/img/logo.png" alt="logo" />
          <div className="flex items-center gap-4 text-xl text-[#525151]">
            <NavLink>繁中</NavLink>
            <NavLink>EN</NavLink>
            <TfiAlignLeft className="text-3xl ml-4" />
          </div>
        </div>
        <NavBar />
        <SwiperComponent />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <div className="fixed bottom-0.5  p-2  text-white ">
          <div className="flex items-center gap-4 bg-[#A12245] rounded-full px-4 py-3">
            <NavLink>
              <button>AI客服</button>
            </NavLink>
            <NavLink>
              <button>預約</button>
            </NavLink>
            <NavLink>
              <button>加入會員</button>
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
