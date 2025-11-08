import React from "react";

import caming from "../assets/logo/Cam Group.svg";
import vector from "../assets/vectors/Footer Vector.png";
import frame20 from "../assets/vectors/mainimg.jpg";
import imgtop from "../assets/vectors/Frame 20.png";
import tick from "../assets/images/portfolioimges/Vector 10.png"
import tick2 from "../assets/images/portfolioimges/Vector 9.png"
import rectangle from "../assets/images/portfolioimges/Rectangle 44.png"

const Portfolio = () => {
  return (
    <main className="w-full min-h-screen font-sans overflow-hidden flex flex-col md:flex-row">
      
      {/* Left Section */}
      <aside className="w-full md:w-1/4 flex items-center justify-center p-4">
        <img src={caming} alt="Cam Group Logo" className="h-[200px] md:h-[350px] w-[200px] md:w-[300px]" />
      </aside>

      {/* Center Section */}
      <article className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6 md:gap-10 p-4">
        <img src={imgtop} alt="Top Image" className="h-[80px] md:h-[100px] w-[160px] md:w-[200px] mb-5"/>
       <div className="relative"><img src={frame20} alt="Main Frame" className="h-[250px] md:h-[350px] w-[300px] md:w-[600px] mb-6 object-cover"/>
       <img src={rectangle} alt="" className="absolute top-18 left-3  h-50 w-15" />
        <img src={rectangle} alt="" className="absolute top-18 right-3  h-50 w-15" />
        <img src={tick} alt="" className="absolute top-35 left-5  h-18 w-10"/>
           <img src={tick2} alt="" className="absolute top-35 right-5  h-18 w-10"/>
       </div>
      </article>

      {/* Right Section */}
      <aside className="w-full md:w-1/4 relative flex justify-end p-4">
        <img src={vector} alt="Vector Design" className="h-[400px] w-[350px]  absolute bottom-2 right-2"/>
      </aside>

    </main>
  );
};


export default Portfolio;

