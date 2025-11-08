import React from 'react';
import Navbar from './Components/NavbarComponent/Navbar';
import Home from './pages/Home';
import Hero from './pages/Hero';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function App() {
//  scroll function
  const handleWheel = (e) => {
    e.preventDefault();
    e.currentTarget.scrollBy({
      left: e.deltaY, 
      behavior: 'smooth',
    });
  };

  return (
    <main className="relative w-full h-screen bg-[#FFF8F0] overflow-hidden bgimgsection ">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Horizontal scroll container */}
      <div
        className="flex flex-row h-screen overflow-x-auto overflow-y-hidden scroll-smooth"
        onWheel={handleWheel}
      >
        <section className="min-w-screen h-full flex items-center justify-center">
          <Home />
        </section>

        <section className="min-w-screen h-full flex items-center justify-center">
          <Hero />
        </section>

        <section className="min-w-screen h-full flex items-center justify-center">
          <AboutUs />
        </section>

        <section className="min-w-screen h-full flex items-center justify-center">
          <Services />
        </section>

        <section className="min-w-screen h-full flex items-center justify-center">
          <Portfolio />
        </section>

        <section className="min-w-screen h-full flex items-center justify-center">
          <Contact />
        </section>
      </div>
    </main>
  );
}
