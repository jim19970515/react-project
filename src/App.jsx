import { useState, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// components
//header
import { NavBar } from "./components/navBar";
import { Map } from "./components/map";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <header>
          <NavBar />
        </header>
        <main>
          <RouterProvider router={router} />
        </main>
        <footer></footer>
      </Suspense>
    </>
  );
}

export default App;
