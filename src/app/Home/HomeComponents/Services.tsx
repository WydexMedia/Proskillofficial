import React from "react";
import { Palette, Brush, CheckCircle, Award, Users, Star, Truck, Headphones } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Resin Art Course",
    description:
      "Join ProSkill — the Best skill academy in Kerala — and build hands‑on mastery with our resin art course in Kerala. Learn through guided projects: ocean art, clock making, keychain making, and frame making. Online and offline batches available.",
    icon: <Palette className="w-12 h-12" aria-hidden />,
    features: [
      "Free resin art kit with delivery",
      "Lifetime doubt-clearing support",
      "Online & offline classes",
      "Ocean art, clock making, keychain/key frame making",
    ],
  },
  {
    id: 2,
    title: "Mehendi Art Course",
    description:
      "Learn traditional to modern designs with structured practice and reviews. ProSkill — the Best skill academy in Kerala — offers flexible online classes and lifetime support, alongside our popular resin art course in Kerala.",
    icon: <Brush className="w-12 h-12" aria-hidden />,
    features: [
      "Free mehendi kit with delivery",
      "Expert guidance and lifetime support",
      "Online classes available",
      "Traditional & contemporary pattern practice",
    ],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-white py-24 px-4 md:px-8 lg:px-12"
      aria-labelledby="services-heading"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-800 shadow-sm">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          Premium Learning Experience
        </span>
        <h2
          id="services-heading"
          className="mt-8 text-4xl md:text-6xl font-black tracking-tight text-black leading-tight"
        >
          Master your creative skills with 
          <span className="block text-gray-500">
            structured, expert‑led courses
          </span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Practical sessions, clear outcomes, and lifetime support. Choose a course and start building portfolio‑ready work.
        </p>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
            <Award className="w-6 h-6 text-gray-800" aria-hidden />
            <span className="text-black font-semibold">Trusted Academy</span>
          </div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
            <Users className="w-6 h-6 text-gray-800" aria-hidden />
            <span className="text-black font-semibold">1000+ Learners</span>
          </div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
            <Star className="w-6 h-6 text-gray-800" aria-hidden />
            <span className="text-black font-semibold">Highly Rated</span>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {courses.map((course) => (
          <article
            key={course.id}
            className="group relative rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gray-400 hover:-translate-y-1"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-8 w-12 h-1 bg-black rounded-b-full"></div>
            
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-black border-2 border-gray-300 group-hover:bg-black group-hover:text-white transition-all duration-300">
                {course.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold tracking-tight text-black transition-colors">
                  {course.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{course.description}</p>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {course.features.map((f, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black">
                    <CheckCircle className="h-4 w-4 text-white" aria-hidden />
                  </span>
                  <span className="text-gray-700 font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400/50 focus-visible:ring-offset-2"
              >
                Enroll Now
                <div className="ml-2 w-2 h-2 bg-white rounded-full"></div>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Highlights */}
      <div className="mt-24 flex flex-wrap items-center justify-center gap-8">
        <div className="inline-flex items-center gap-4 rounded-2xl border-2 border-gray-300 bg-gray-50 px-8 py-4 text-black shadow-lg hover:bg-black hover:text-white hover:border-gray-800 transition-all duration-300 group">
          <Truck className="h-6 w-6 text-gray-800 group-hover:text-white" aria-hidden />
          <span className="font-bold">Free Delivery</span>
        </div>
        <div className="inline-flex items-center gap-4 rounded-2xl border-2 border-gray-300 bg-gray-50 px-8 py-4 text-black shadow-lg hover:bg-black hover:text-white hover:border-gray-800 transition-all duration-300 group">
          <Headphones className="h-6 w-6 text-gray-800 group-hover:text-white" aria-hidden />
          <span className="font-bold">Lifetime Support</span>
        </div>
        <div className="inline-flex items-center gap-4 rounded-2xl border-2 border-gray-300 bg-gray-50 px-8 py-4 text-black shadow-lg hover:bg-black hover:text-white hover:border-gray-800 transition-all duration-300 group">
          <Users className="h-6 w-6 text-gray-800 group-hover:text-white" aria-hidden />
          <span className="font-bold">Expert Guidance</span>
        </div>
      </div>
    </section>
  );
}

export default Services;