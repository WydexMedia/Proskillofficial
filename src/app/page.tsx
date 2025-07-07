import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faShieldAlt, faShippingFast } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-white to-black dark:from-black dark:to-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/globe.svg')] bg-center bg-no-repeat bg-contain pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">Empower Your Future<br /><span className="text-white/70">with Proskill</span></h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/80">Unlock your potential with world-class courses, tools, and a thriving community. Learn, grow, and succeed with Proskill Education.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses" className="px-8 py-3 rounded-full bg-white text-black font-bold text-lg shadow-lg hover:bg-black hover:text-white border-2 border-white hover:border-white transition-all duration-200">Explore Courses</Link>
          <a href="https://calculator.proskilledu.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-transparent text-white font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-200">Try Calculator</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-3 gap-10 -mt-16 z-10">
        <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <Image src="/window.svg" alt="Courses" width={48} height={48} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Expert-Led Courses</h2>
          <p className="text-base text-gray-700 dark:text-gray-300">Learn from industry leaders with hands-on, practical content designed for real-world success.</p>
        </div>
        <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <Image src="/file.svg" alt="Tools" width={48} height={48} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Powerful Tools</h2>
          <p className="text-base text-gray-700 dark:text-gray-300">Access calculators, planners, and resources to accelerate your learning and career growth.</p>
        </div>
        <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <Image src="/globe.svg" alt="Community" width={48} height={48} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Vibrant Community</h2>
          <p className="text-base text-gray-700 dark:text-gray-300">Join a supportive network of learners, mentors, and professionals from around the world.</p>
        </div>
      </section>

      {/* Instagram Preview Section */}
      <section className="w-full max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Follow Us on Instagram</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/the.proskill/embed"
            width="400"
            height="480"
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden', borderRadius: '16px', background: '#fff' }}
            title="Instagram Feed"
          ></iframe>
        </div>
        <p className="mt-4 text-base text-white">See our latest updates and stories on <a href="https://www.instagram.com/the.proskill/?hl=en" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Instagram</a></p>
      </section>

      {/* Testimonials Preview Section */}
      <section className="w-full max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">What Our Learners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <video controls width="100%" className="rounded-xl mb-2">
              <source src="/video/testimonial1.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <video controls width="100%" className="rounded-xl mb-2">
              <source src="/video/testimonial2.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <video controls width="100%" className="rounded-xl mb-2">
              <source src="/video/testimonial3.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 rounded-2xl shadow-md border border-gray-200">
            <FontAwesomeIcon icon={faGlobe} style={{ width: '50px', height: '50px' }} className="text-black" />
            <h3 className="text-xl font-bold mb-2">International Shipping</h3>
            <p className="text-gray-700 text-center">We deliver our products and services worldwide, ensuring you can access Proskill from anywhere.</p>
          </div>
          <div className="flex flex-col items-center p-8 rounded-2xl shadow-md border border-gray-200">
            <FontAwesomeIcon icon={faShieldAlt} style={{ width: '50px', height: '50px' }} className="text-black" />
            <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
            <p className="text-gray-700 text-center">Our team is committed to providing the highest quality in education and support for your success.</p>
          </div>
          <div className="flex flex-col items-center p-8 rounded-2xl shadow-md border border-gray-200">
            <FontAwesomeIcon icon={faShippingFast} style={{ width: '50px', height: '50px' }} className="text-black" />
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-700 text-center">Experience quick and reliable delivery of our services and resources, wherever you are.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
