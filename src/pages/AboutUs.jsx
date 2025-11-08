
import mountainimage from "../assets/images/OBJECTS.png"
import circularimage from "../assets/images/Group 10.png"
import frame1 from "../assets/images/Frame 9.png"
import frame2 from "../assets/images/Frame 22.png"
import frame3 from "../assets/images/Frame 23.png"
export default function VFilmsAbout() {
  return (
    <>
      
      <div className="w-full h-screen  overflow-hidden body-font section">
        <main className="w-full max-w-[1920px] mx-auto relative h-[100%]" >
          <section className="relative flex flex-row justify-between items-start w-full h-full px-16 py-20">
            
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-6 w-1/2 mt-20 ">
              <h2 className="serif-font text-4xl text-gray-900">
                A montage of familiar faces and names.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-md  w-[55%] flex flex-wrap text-center ml-10">
                Some stories come from the biggest names.
                Others begin with bold, rising voices.
                We’ve been fortunate to walk alongside both –
                listening, creating, and building stories that matter.
              </p>

              {/* Yellow Cards */}
      <div className="relative flex ">
  {/* Card 1 */}
  <div className="relative z-10">
    <img src={frame1} alt="Frame 1" className="w-[250px]" />
  </div>

  {/* Card 2 */}
  <div className="relative -ml-25 z-20">
    <img src={frame2} alt="Frame 2" className="w-[250px]" />
  </div>

  {/* Card 3 */}
  <div className="relative -ml-25 z-30">
    <img src={frame3} alt="Frame 3" className="w-[250px]" />
  </div>
</div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="relative w-1/2 flex flex-col items-center justify-around  gap-4">
              
              {/* Handwriting Quote */}
              <div className="handwriting-font text-[40px] text-gray-800 leading-tight text-center w-[500px] max-w-[900px] mb-7 mt-2 ">
                Every project is more than just a brief –
                it’s a new chapter waiting to be written.
                Together, we’ve crafted tales that inspire,
                connect, and endure.
              </div>

              {/* Brand Logos Placeholder */}
              <div className="relative flex justify-center items-center w-full h-[340px] top-10 left-15 ">
                {/* Replace with brand logos around circle */}
               <img src={circularimage} alt="" className=""/>
              </div>

              {/* Mountain + Circular Image Placeholder */}
              <div className="relative flex justify-center items-center left-10 bottom-50">
               <img src={mountainimage} alt="" className="h-full w-[450px] "/>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
