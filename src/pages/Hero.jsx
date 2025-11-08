import React, { useState } from 'react'; 
import { Menu, X } from 'lucide-react';
import gateimage from '../assets/images/136881584_562ce9a4-ee1d-4be1-8b12-5b603ee14c6b 1.png'
import cardImage from "../assets/images/Group 9.png"
import curveimage from '../assets/vectors/Vector.svg'
import groupimage from "../assets/vectors/Group 2.svg"
import filmakercurve from "../assets/vectors/Vector (1).svg"
import artcurve from "../assets/vectors/Vector (2).svg"

export default function VFilmsPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>

      <div className="w-full h-screen  overflow-hidden body-font section">

        {/* Main Content */}
        <main className="w-full max-w-[1920px] mx-auto relative h-[100%]">
          <section className="relative w-full h-full px-6 lg:px-12 py-12 lg:py-16">
            
            {/* Sticky Note with Clip */}
            <div 
              className="absolute transform -rotate-2 z-20"
              style={{
                top: '0px',
                left: '130px',
              }}
            >
              <img src={cardImage} alt="img" className='h-[350px] w-[450px]' />
            </div>

            {/* Left Side Icon */}
            <div 
              className="absolute"
              style={{
                bottom: '30px',
                left: '0px',
                width: '380px',
                height: '360px',
              }}
            >
              <img 
                src={gateimage} 
                alt="Gateway Monument"
                className="w-full h-full object-contain"
              
              />
            </div>

            {/* Arrow 1 -  Branding Experts */}
            <div 
              className="absolute z-10"
              style={{
                bottom: '270px',
                left: '400px',
                width: '150px',
                height: '150px',
              }}
            >
              <img 
                src={curveimage} 
                alt=""
                className="w-[150px] h-full object-contain ml-20 mt-[-20px] rotate-[5deg]"
                aria-hidden="true"
              />
              <div 
                className="absolute handwriting-font text-2xl text-gray-800 whitespace-nowrap"
                style={{
                  bottom: '-20px',
                  left: '30px',
                }}
              >
                Branding Experts
              </div>
            </div>

            {/* Center - group image*/}
            <div 
              className="absolute"
              style={{
                bottom: '180px',
                left: '65%',
                transform: 'translateX(-60%)',
                width: '530px',
                height: '430px',
              }}
            >
              <img 
                src={groupimage}
                alt="Team "
                className="w-full h-full object-contain"
              />

              {/* Film Makers */}
              <div 
                className="absolute handwriting-font text-2xl text-gray-800"
                style={{
                  top: '-80px',
                  left: '50px',
                }}
              >
                Film Makers
              </div>

              {/* Arrow to Film Makers */}
              <div 
                className="absolute"
                style={{
                  top: '-50px',
                  left: '100px',
                  width: '130px',
                  height: '100px',
                }}
              >
                <img 
                  src={filmakercurve}
                  alt=""
                  className="w-full h-full object-contain rotate-[-8deg]"
                  aria-hidden="true"
                />
              </div>

              {/* Art Curators */}
              <div 
                className="absolute handwriting-font text-2xl text-gray-800 whitespace-nowrap"
                style={{
                  top: '10px',
                  right: '-170px',
                }}
              >
                Art Curators
              </div>

              {/* Arrow to Art Curators */}
              <div 
                className="absolute"
                style={{
                  top: '50px',
                  right: '-150px',
                  width: '150px',
                  height: '100px',
                }}
              >
                <img 
                  src={artcurve}
                  alt=""
                  className="w-full h-full object-contain rotate-[10deg]"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Bottom Center*/}
            <div 
              className="absolute w-full"
              style={{
                bottom: '80px',
                left: '60%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                
              }}
            >
              <h2 className="serif-font text-4xl text-gray-800 mb-6  px-4 ml-10">
                Take a closer look at the stories V bring to life.
              </h2>
              <button className="bg-[#FF6B4A] text-white px-8 py-3 rounded-full hover:bg-[#FF5533] transition font-medium text-lg shadow-lg">
                View Portfolio
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

