"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faShieldAlt, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Home() {
  // Enhanced testimonials slider with better mobile experience
  const testimonials = [
    "/video/testimonial1.MP4",
    "/video/testimonial2.MP4",
    "/video/testimonial3.MP4",
  ];
  
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: { perView: 1.5, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    created() {
      // Auto-play functionality
      setInterval(() => {
        instanceRef.current?.next();
      }, 5000);
    },
  });

  // Modal state for course enquiry
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [courseForm, setCourseForm] = useState({ name: "", phone: "", place: "" });

  const handleCourseFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
  };

  const handleCourseFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, phone, place } = courseForm;
    const msg = `Enquiry of course. Name: ${name}, Phone: ${phone}, Place: ${place}`;
    window.open(`https://wa.me/7034688802?text=${encodeURIComponent(msg)}`, "_blank");
    setShowCourseForm(false);
    setCourseForm({ name: "", phone: "", place: "" });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-white to-black dark:from-black dark:to-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/globe.svg')] bg-center bg-no-repeat bg-contain pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">Empower Your Future<br /><span className="text-white/70">with Proskill</span></h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/80">Unlock your potential with world-class courses, tools, and a thriving community. Learn, grow, and succeed with Proskill Education.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowCourseForm(true)}
            className="px-8 py-3 rounded-full bg-white text-black font-bold text-lg shadow-lg hover:bg-black hover:text-white border-2 border-white hover:border-white transition-all duration-200"
            type="button"
          >
            Explore Courses
          </button>
          <a
            href="https://wa.me/7034688802?text=Enquiry%20for%20shopping%20resin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-transparent text-white font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-200"
          >
            Shop Now
          </a>
        </div>
        {/* Course Enquiry Modal */}
        {showCourseForm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <form onSubmit={handleCourseFormSubmit} className="bg-white dark:bg-black p-8 rounded-xl shadow-xl flex flex-col gap-4 w-full max-w-sm">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">Course Enquiry</h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={courseForm.name}
                onChange={handleCourseFormChange}
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={courseForm.phone}
                onChange={handleCourseFormChange}
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
                required
              />
              <input
                type="text"
                name="place"
                placeholder="Your Place"
                value={courseForm.place}
                onChange={handleCourseFormChange}
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
                required
              />
              <div className="flex gap-2 mt-2">
              <button type="button" onClick={() => setShowCourseForm(false)} className="flex-1 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2 rounded bg-black text-white font-bold hover:bg-gray-800 transition">Submit</button>
              </div>
            </form>
          </div>
        )}
      </section>

      {/* Product Section */}
      <section className="w-full max-w-6xl mx-auto py-16 sm:py-20 px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-black dark:text-white">Our Featured Product</h2>
        <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 w-full">
          <div className="w-full lg:w-auto flex justify-center">
            <Image 
              src="/proskillresin.png" 
              alt="Proskill Resin" 
              width={300} 
              height={300} 
              className="rounded-xl object-contain bg-gray-100 dark:bg-gray-900 w-full max-w-xs sm:max-w-sm lg:max-w-none" 
            />
          </div>
          <div className="flex-1 flex flex-col items-start text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black dark:text-white">Proskill Resin</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Premium quality resin for all your creative and professional needs. Trusted by experts for its clarity, strength, and versatility.
            </p>
            <a
              href="https://wa.me/919999999999?text=I'm%20interested%20in%20Proskill%20Resin%20product"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 rounded-full border border-black dark:border-white text-base sm:text-lg font-bold bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-200 active:scale-95"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Preview Section */}
      <section className="w-full max-w-4xl mx-auto py-12 sm:py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black dark:text-white">Follow Us on Instagram</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/the.proskill/embed"
            width="100%"
            height="480"
            frameBorder="0"
            scrolling="no"
            style={{ 
              border: 'none', 
              overflow: 'hidden', 
              borderRadius: '16px', 
              background: '#fff',
              maxWidth: '400px'
            }}
            title="Instagram Feed"
          ></iframe>
        </div>
        <p className="mt-4 text-base text-white">See our latest updates and stories on 
          <button
            onClick={() => window.open('https://www.instagram.com/the.proskill/?hl=en', '_blank', 'noopener,noreferrer')}
            className="inline-block ml-1 px-4 py-1 rounded-full border border-white bg-white text-black font-semibold hover:bg-black hover:text-white transition-colors duration-200"
            type="button"
          >
            Instagram
          </button>
        </p>
      </section>

      {/* Enhanced Swipable Testimonials Section */}
      <section className="w-full py-12 sm:py-16 px-4 text-center bg-black">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">What Our Learners Say</h2>
        <div className="max-w-6xl mx-auto">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((src, idx) => (
              <div key={src} className="keen-slider__slide">
                <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-3 sm:p-4 mx-2 h-full">
                  <video 
                    controls 
                    className="rounded-xl w-full h-48 sm:h-56 lg:h-64 object-cover"
                    preload="metadata"
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 flex flex-col items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <FontAwesomeIcon 
              icon={faGlobe} 
              style={{ width: '40px', height: '40px' }} 
              className="text-black mb-4" 
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">International Shipping</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
              We deliver our products and services worldwide, ensuring you can access Proskill from anywhere.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <FontAwesomeIcon 
              icon={faShieldAlt} 
              style={{ width: '40px', height: '40px' }} 
              className="text-black mb-4" 
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Quality Assurance</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
              Our team is committed to providing the highest quality in education and support for your success.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <FontAwesomeIcon 
              icon={faShippingFast} 
              style={{ width: '40px', height: '40px' }} 
              className="text-black mb-4" 
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Fast Delivery</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
              Experience quick and reliable delivery of our services and resources, wherever you are.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}