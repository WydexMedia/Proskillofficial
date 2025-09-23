// src/app/Home/HomeComponents/OurStory.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const OurStory: React.FC = () => {
  return (
    <section className="bg-black py-20 px-4 md:px-8 lg:px-16 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-gray-400/20 to-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white text-sm font-semibold tracking-wider uppercase">
              Our Story
            </span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="text-gray-300">
              Crafting
            </span>
            <br />
            <span className="text-white">
              Creative Futures
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side – Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                ProSkill began with a vision to make learning skills simple and practical. Today, we are the <span className="font-bold text-white">Best skill academy in Kerala</span>, offering creative programs like the resin art course in Kerala and mehendi art course with free kits and lifetime support.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our journey is driven by passion for creativity and hands-on learning. We offer both online and offline classes, covering exciting projects like ocean art, clock making, keychain making, and frame making. We continue to inspire students to turn their talents into real opportunities.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>

            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right side – Image */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/resinclock.jpg"
                  alt="ProSkill Academy - Best skill academy in Kerala"
                  width={500}
                  height={600}
                  className="rounded-2xl w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-4 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">10K+</div>
                  <div className="text-xs text-gray-600">Happy Students</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-xl font-bold text-black">4.9★</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-white rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-white rounded-full opacity-70 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
