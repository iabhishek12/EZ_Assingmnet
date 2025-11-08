import React from "react";
import vector5 from "../assets/vectors/Vector 5.svg";
import img1 from "../assets/images/servicesimg/Frame 31 (2).png";
import img2 from "../assets/images/servicesimg/Frame 31 (1).png";
import img3 from "../assets/images/servicesimg/Frame 31.png";
import borderimg from "../assets/vectors/Frame 33.svg";
import stickerimg from "../assets/images/servicesimg/image 6.png"
const Services = () => {
  return (
    <>
      <section className="w-full h-screen overflow-hidden body-font flex flex-col  ">
        <header className="flex flex-col justify-center items-center mt-20">
          <div>
            <h1 className="font-semibold text-3xl font-serif">
              The storyboard reveals the breadth of our craft
            </h1>
          </div>
          <div className="w-180">
            <img src={vector5} alt="" />
          </div>
        </header>
        <main className="w-full max-w-[1920px] h-[600px] mx-auto relative flex justify-center">
          <div className="flex justify-center items-center  w-[80%]">
         
            <div className="relative">
<div className="absolute left-[30px] -top-[5px]"><img src={stickerimg} alt="" className="w-[120px]"/></div>
              <img src={img3} alt="" />
            </div>
            <div className="mt-12 relative flex flex-col ">
              <div className="absolute right-[80px] -top-[10px]"><img src={stickerimg} alt="" className="w-[120px]"/></div>
              <img src={img2} alt="" />
            </div>
            <div className="relative">
                <div className="absolute right-[35px] -top-[5px] rotate-30"><img src={stickerimg} alt="" className="w-[120px]"/></div>
              <img src={img1} alt="" />
            </div>
          </div>
        </main>
        <footer>
          <div>
            <img src={borderimg} alt="" />
          </div>
        </footer>
      </section>
    </>
  );
};

export default Services;
