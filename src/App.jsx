import { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
// components
//header
import { NavBar } from "./components/navBar";
import { Map } from "./components/map";
import { SwiperComponent } from "./components/swiper";
function App() {
  return (
    <>
      <header>
        <div className="flex justify-center items-center">
          <img className="h-24" src="/src/assets/img/logo.png" alt="logo" />
        </div>
        <NavBar />
        <SwiperComponent />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
