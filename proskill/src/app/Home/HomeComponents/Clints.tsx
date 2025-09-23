import { useRouter } from 'next/navigation';
import { Users, Award, TrendingUp, Star, ArrowRight, CheckCircle,Instagram, Home, Search, Video } from 'lucide-react';

const successStats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "10K+",
    label: "Happy Students",
    description: "Creative learners who transformed their skills"
  }
];

const successFeatures = [
  "Free kits with every course",
  "Lifetime doubt-clearing support",
  "Online & offline learning options",
  "Expert guidance from professionals",
  "Business mentorship included",
  "Certificate upon completion"
];

export default function SuccessStats() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-8 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200/50 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-sm font-bold tracking-wider uppercase">
              Our Success Stories
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 mb-8 leading-tight">
            Transforming
            <br />
            <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800">
              Creative Dreams
            </span>
          </h2>
          
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
              Join the <span className="font-bold text-purple-600">best skill academy in Kerala</span> and be part of our success story. 
              Our students have transformed their creativity into <span className="font-bold text-pink-600">thriving businesses</span>.
            </p>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-70 animate-bounce animation-delay-1000"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-24">
          {/* Success Stats - Left Side */}
          <div className="lg:col-span-1">
            <div className="group text-center p-10 bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                {successStats[0].icon}
              </div>
              <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {successStats[0].number}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {successStats[0].label}
              </div>
              <div className="text-lg text-gray-600 leading-relaxed">
                {successStats[0].description}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-300"></div>
            </div>
          </div>

          {/* Enhanced iPhone Frame - Center */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              {/* iPhone Frame with improved styling */}
              <div className="relative w-70 h-[580px] bg-gradient-to-b from-gray-900 to-black rounded-[3.5rem] p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* iPhone Screen */}
                <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative flex flex-col">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 shadow-inner"></div>
                  
                  {/* Instagram Header with gradient */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-b border-gray-800 p-4 pt-10 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center p-0.5">
                          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                            <Instagram className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">the.proskill</div>
                          <div className="text-xs text-gray-400">ProSkill</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Instagram Content - Real iframe */}
                  <div className="flex-1 overflow-hidden bg-white">
                    <iframe
                      src="https://www.instagram.com/the.proskill/embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="yes"
                      className="w-full h-full"
                      title="ProSkill Instagram"
                      loading="lazy"
                    />
                  </div>

                  {/* Enhanced Bottom Navigation */}
                  <div className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800 p-4 flex-shrink-0">
                    <div className="flex items-center justify-around">
                      <Home className="w-6 h-6 text-white hover:scale-110 transition-transform cursor-pointer" />
                      <Search className="w-6 h-6 text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                      <Video className="w-6 h-6 text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse animation-delay-1000 shadow-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
            </div>
          </div>

          {/* Additional Stats/Info - Right Side */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-purple-100/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Certified Students</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-purple-100/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-purple-100/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-20 border border-purple-100/50 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900 mb-6">
              Why Choose ProSkill ?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              We provide everything you need to succeed in your creative journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100/30 hover:border-purple-300/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-800 font-semibold text-lg group-hover:text-purple-700 transition-colors duration-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/5 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Ready to Start Your Creative Journey?
              </h3>
              <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                Join thousands of successful students who transformed their creativity into 
                <span className="font-bold text-white"> professional skills</span> and 
                <span className="font-bold text-white"> thriving businesses</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => router.push('/courses')}
                  className="group bg-white text-purple-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="group border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}