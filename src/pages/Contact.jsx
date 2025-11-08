import React, { useState } from "react";
import axios from "axios";
import topimg1 from "../assets/images/servicesimg/Footer Vector.png";
import footerimg from "../assets/images/servicesimg/Footer Vector (1).png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Frontend validation
  const validateForm = () => {
    const { name, phone, email, message } = formData;
    if (!name || !phone || !email || !message) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData
      );
      if (response.status === 200) {
        setSuccessMessage("Form Submitted");
        setFormData({ name: "", phone: "", email: "", message: "" }); // reset form
      }
  
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    }
  };

  return (
    <main className="relative w-full min-h-screenfont-sans overflow-hidden ">
      {/* Decorative Images */}
      <img
        src={footerimg}
        alt="Top Right Design"
        className="absolute top-0 right-0 w-90 h-90 object-contain"
      />
      <img
        src={topimg1}
        alt="Bottom Left Design"
        className="absolute bottom-0 left-1 w-90 h-90 object-contain"
      />

      <section className="flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-24 gap-12 ml-8">
        {/* Intro Section */}
        <article className="w-[30%] -ml-10 ">
          <p className="text-lg leading-relaxed text-[#252729] w-[87%] text-start">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V’re just a message away.
            <br />
            Let’s catch up over coffee.
            <br />
            Great stories always begin with a good conversation
          </p>
        </article>

        {/* Contact Form Section */}
        <section className="text-[#252729] rounded-lg w-full max-w-[580px] flex flex-col left-[100px] h-[550px] gap-5 ml-7">
          <header className="flex flex-col text-center gap-4">
            <h1 className="text-4xl">Join the story</h1>
            <p className="text-xl font-semibold mb-6">
              Ready to bring your vision to life? Let’s talk.
            </p>
          </header>

          <form
            className="space-y-4 flex flex-col justify-center items-center z-1"
            aria-label="Contact Form"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label className="block">
                
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  className="w-full px-4 py-2 bg-white rounded outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="w-full">
              <label className="block">
               
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-2 bg-white rounded outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="w-full">
              <label className="block">
              
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full px-4 py-2 bg-white rounded outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="w-full">
              <label className="block">
             
                <textarea
                  name="message"
                  placeholder="Your message*"
                  rows="4"
                  className="w-full px-4 py-2 bg-white rounded outline-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

            <button
              type="submit"
              className="w-[100px] bg-[#F15D2B] text-white py-2 rounded-3xl"
            >
              Submit
            </button>
          </form>

          <footer className="mt-15 text-sm text-gray-600 flex justify-center items-center gap-5 font-semibold">
            <p>
              <a href="mailto:vernita@varnanfilms.co.in" className="text-[#F15D2B]">
                vernita@varnanfilms.co.in
              </a>
            </p>
            <span className="text-[#F15D2B] text-2xl">|</span>
            <p>
              <a href="tel:+919873684567" className="text-[#F15D2B]">
                +91 9873684567
              </a>
            </p>
          </footer>
        </section>
      </section>
    </main>
  );
};

export default Contact;
