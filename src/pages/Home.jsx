import React, { useState } from 'react';


const Home = () => {
  return (
      <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        
        .tagline-font {
          font-family: 'Island Moments', cursive;
        }
        
        .body-font {
          font-family: 'Instrument Sans', sans-serif;
        }

       
        @media (min-width: 1024px) {
          .tagline-container {
            width: 820px;
            height: 230px;
          }
          .services-container {
            height: 63px;
          }
          .description-container {
            width: 487px;
            height: 154px;
          }
          .mandala-size {
            width: 565px;
            height: 565px;
          }
        }

        /* Mobile responsive */
        @media (max-width: 1023px) {
          .tagline-container {
            width: 100%;
            height: auto;
          }
          .services-container {
            height: auto;
          }
          .description-container {
            width: 100%;
            height: auto;
          }
          .mandala-size {
            width: 100%;
            max-width: 400px;
            height: auto;
            aspect-ratio: 1;
          }
        }
      `}</style>

    <main className="w-full max-w-[1920px] mx-auto px-6 lg:px-12">
          <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-103px)] lg:min-h-[977px] py-12 lg:py-20 mt-10 ">
            
            {/* Left Side - Logo with Mandala */}
            {/* Hero Mandala: Width 565px, Height 565px */}
            <div className="flex items-center justify-center relative">
              {/* Mandala Background Pattern */}
              <div className="absolute inset-0 flex items-center justify-center z-1">
                <img 
                  src="../src/assets/images/Hero Mandala.png" 
                  alt="" 
                  className="h-[500px] w-[500px]"

                  aria-hidden="true"
                />
              </div>
              
              {/* VFilms Logo - centered on mandala */}
              <div className="relative z-10">
                <img 
                  src="../src/assets/logo/VFilms Logo.png" 
                  alt="VFilms" 
                  className="w-full max-w-[100px] sm:max-w-[150px] lg:max-w-[250px] h-auto"
               
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <article className="space-y-6 sm:space-y-8 lg:space-y-10 flex flex-col lg:items-center lg:justify-center ">
            
              <div className="tagline-container ">
                <h1 className="tagline-font  sm:text-6xl md:text-6xl lg:text-[70px] leading-tight text-[#0F3255] text-center w-[75%] ml-20 mt-5">
                  Varnan is where stories find their voice and form
                </h1>
              </div>

             
              <div className="services-container flex flex-wrap items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-[#F15D28] font-normal -mt-10">
                <span>Films</span>
                <span className="text-2xl sm:text-3xl lg:text-[40px]">.</span>
                <span>Brands</span>
                <span className="text-2xl sm:text-3xl lg:text-[40px]">.</span>
                <span>Art</span>
              </div>

             
              <p className="description-container text-[#252729] leading-[1.6] text-sm sm:text-base lg:text-[16px] font-normal text-center">
                Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them. 
                Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by 
                listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters. <br />
                V doesn't just tell stories - V honors them.
              </p>
            </article>
          </section>
        </main>
        </>
  )
}

export default Home