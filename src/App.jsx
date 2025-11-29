import { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";

// components
//header
import { NavBar } from "./components/navBar";
import { Map } from "./components/map";

function App() {
  return (
    <>
      <header>
        <NavBar />
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
