import React, { useEffect, useRef } from 'react';
import { Palette, Sparkles, Lightbulb, Check } from 'lucide-react'; 

function About() {
    const observerRef = useRef<IntersectionObserver | null>(null);
    
    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);
        
        const elements = document.querySelectorAll<HTMLElement>('.platform-card, .section-header');
        elements.forEach(el => {
            observerRef.current?.observe(el);
        });
        
        return () => {
            observerRef.current?.disconnect();
        };
    }, []);
    
    return (
        <>
            {/* About Section */}
            <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div 
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'><circle cx='10' cy='10' r='1' fill='%23000000'/></pattern></defs><rect width='100' height='100' fill='url(%23dots)'/></svg>")`
                        }}
                    />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="section-header text-center mb-12 sm:mb-16 lg:mb-20">
                        
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-black leading-tight">
                            Master Creative Skills With 
                            <span className="block text-gray-800 mt-2">
                                Expert Guidance
                            </span>
                        </h2>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Choosing the right skill academy is one of the most important decisions for your creative journey.
                            We help you master resin art and mehendi art with expert guidance, free kits, and lifetime support.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
                        {/* Resin Art Course Card */}
                        <div className="platform-card group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10">
                            {/* Card Header */}
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black text-white rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <Palette className="w-8 h-8 sm:w-10 sm:h-10" />
                                </div>
                                <div className="w-full h-1 bg-gradient-to-r from-black to-transparent rounded-full"></div>
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black leading-tight">
                                Resin Art Course: Unlock Your Creative Potential
                            </h3>
                            
                            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Join ProSkill, the best skill academy in Kerala, and unlock your creativity with our resin art course in Kerala. 
                                We offer both online and offline classes, covering exciting projects like ocean art, clock making, keychain making, and frame making.
                            </p>

                            {/* Best For Section */}
                            <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 border border-gray-200">
                                <h4 className="text-black mb-4 text-base sm:text-lg font-semibold flex items-center">
                                    <Lightbulb className="w-5 h-5 mr-2 text-black" />
                                    Perfect for:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="relative pl-6 text-gray-700 text-sm sm:text-base">
                                        <span className="absolute left-0 text-black font-bold">→</span>
                                        Beginners wanting to learn resin art from scratch
                                    </li>
                                    <li className="relative pl-6 text-gray-700 text-sm sm:text-base">
                                        <span className="absolute left-0 text-black font-bold">→</span>
                                        Creative individuals looking to start a business
                                    </li>
                                    <li className="relative pl-6 text-gray-700 text-sm sm:text-base">
                                        <span className="absolute left-0 text-black font-bold">→</span>
                                        Anyone interested in ocean art, clock making, and crafts
                                    </li>
                                </ul>
                            </div>

                            {/* Benefits List */}
                            <ul className="space-y-4">
                                <li className="relative pl-8 text-gray-700 text-sm sm:text-base flex items-start">
                                    <Check className="absolute left-0 w-5 h-5 text-black" />
                                    <span>Free resin art kit with delivery to your home</span>
                                </li>
                                <li className="relative pl-8 text-gray-700 text-sm sm:text-base flex items-start">
                                    <Check className="absolute left-0 w-5 h-5 text-black" />
                                    <span>Lifetime doubt-clearing support from expert instructors</span>
                                </li>
                                <li className="relative pl-8 text-gray-700 text-sm sm:text-base flex items-start">
                                    <Check className="absolute left-0 w-5 h-5 text-black" />
                                    <span>Both online and offline classes available</span>
                                </li>
                            </ul>
                            
                            {/* Card Footer */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Hands-on Learning</span>
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mehendi Art Course Card */}
                        <div className="platform-card group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/10">
                            {/* Card Header */}
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 text-white rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
                                </div>
                                <div className="w-full h-1 bg-gradient-to-r from-gray-800 to-transparent rounded-full"></div>
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black leading-tight">
                                Mehendi Art Course: Master Beautiful Designs
                            </h3>
                            
                            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                                ProSkill, the best skill academy in Kerala, offers a creative mehendi art course for learners who want to master beautiful designs. 
                                Our classes are conducted online, making it easy to learn from anywhere.
                            </p>

                            {/* Best For Section */}
                            <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 border border-gray-200">
                                <h4 className="text-black mb-4 text-base sm:text-lg font-semibold flex items-center">
                                    <Lightbulb className="w-5 h-5 mr-2 text-black" />
                                    Perfect for:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="relative pl-6 text-gray-700 text-sm sm:text-base">
                                        <span className="absolute left-0 text-gray-800 font-bold">→</span>
                                        Aspiring mehendi artists wanting to learn traditional designs
                                    </li>
                                    <li className="relative pl-6 text-gray-700 text-sm sm:text-base">
                                        <span className="absolute left-0 text-gray-800 font-bold">→</span>
                                        Individuals interested in bridal and modern mehendi styles
                                    </li>
                                    <li className="relative pl-6 text-gray-700 text-sm sm:text-base">
                                        <span className="absolute left-0 text-gray-800 font-bold">→</span>
                                        Anyone looking to start a mehendi business
                                    </li>
                                </ul>
                            </div>

                            {/* Benefits List */}
                            <ul className="space-y-4">
                                <li className="relative pl-8 text-gray-700 text-sm sm:text-base flex items-start">
                                    <Check className="absolute left-0 w-5 h-5 text-black" />
                                    <span>Free mehendi kit with delivery to your home</span>
                                </li>
                                <li className="relative pl-8 text-gray-700 text-sm sm:text-base flex items-start">
                                    <Check className="absolute left-0 w-5 h-5 text-black" />
                                    <span>Expert guidance and lifetime support from professional artists</span>
                                </li>
                                <li className="relative pl-8 text-gray-700 text-sm sm:text-base flex items-start">
                                    <Check className="absolute left-0 w-5 h-5 text-black" />
                                    <span>Learn traditional and modern mehendi designs</span>
                                </li>
                            </ul>
                            
                            {/* Card Footer */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Creative Expression</span>
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom CTA */}
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-1 bg-black rounded-full mb-4">
                            <div className="bg-white rounded-full px-8 py-3">
                                <span className="text-sm font-semibold text-black">
                                    Ready to Start Your Creative Journey?
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Let&apos;s discuss which course aligns best with your creative goals and interests
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;