"use client"
import React, { useEffect, useState } from 'react';
import AppShell from "../AppShell";
import { Palette, Sparkles, Users, ArrowRight, X, CheckCircle, Clock, Truck, Headphones } from 'lucide-react';
import { showToast } from '@/lib/toast';

type Course = {
  _id: string;
  title: string;
  description: string;
  duration?: string;
  level?: string;
  features?: string[];
  price?: string;
  type?: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [enrollingCourse, setEnrollingCourse] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formMsg, setFormMsg] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [fieldWarning, setFieldWarning] = useState('');
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    // Mock courses data - replace with actual API call
    const mockCourses: Course[] = [
      {
        _id: '1',
        title: 'Resin Art Course',
        description: 'Join ProSkill, the best skill academy in Kerala, and unlock your creativity with our resin art course in Kerala. We offer both online and offline classes, covering exciting projects like ocean art, clock making, keychain making, and frame making. Every learner receives a resin art kit with free delivery, plus lifetime doubt-clearing support.',
        duration: '4-6 weeks',
        level: 'Beginner to Advanced',
        features: [
          'Free resin art kit with delivery',
          'Lifetime doubt-clearing support',
          'Online & offline classes',
          'Ocean art, clock making, keychain making, frame making',
          'Expert guidance from professional artists',
          'Certificate upon completion'
        ],
        price: '₹3,999',
        type: 'Premium'
      },
      {
        _id: '2',
        title: 'Mehendi Art Course',
        description: 'ProSkill, the best skill academy in Kerala, offers a creative mehendi art course for learners who want to master beautiful designs. Our classes are conducted online, making it easy to learn from anywhere. We provide a free mehendi kit with delivery to your home, plus expert guidance and lifetime support.',
        duration: '3-4 weeks',
        level: 'Beginner to Intermediate',
        features: [
          'Free mehendi kit with delivery',
          'Expert guidance and lifetime support',
          'Online classes available',
          'Traditional and modern designs',
          'Bridal mehendi techniques',
          'Business guidance for starting your own practice'
        ],
        price: '₹2,999',
        type: 'Standard'
      }
    ];
    setCourses(mockCourses);
  };

  const toggleCourseExpansion = (courseId: string) => {
    const newExpandedCourses = new Set(expandedCourses);
    if (newExpandedCourses.has(courseId)) {
      newExpandedCourses.delete(courseId);
    } else {
      newExpandedCourses.add(courseId);
    }
    setExpandedCourses(newExpandedCourses);
  };

  const truncateDescription = (description: string, maxLength: number = 150) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  const handleScrollToCourses = () => {
    const section = document.getElementById('courses');
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (courseTitle: string) => {
    setEnrollingCourse(courseTitle);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setForm({ name: '', email: '', phone: '', message: '' });
    setFormMsg('');
    setFormLoading(false);
    setFieldWarning('');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setFieldWarning('');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg('');
    if (!form.name.trim()) {
      setFieldWarning('Please enter your full name.');
      return;
    }
    if (!form.email.trim()) {
      setFieldWarning('Please enter your email address.');
      return;
    }
    if (!form.message.trim()) {
      setFieldWarning('Please tell us why you want to enroll in this course.');
      return;
    }
    setFormLoading(true);
    try {
      // Mock API call - replace with actual enrollment API
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormMsg('Enrollment request submitted!');
      showToast.success('Enrollment Request Submitted!', 'We will contact you soon with course details');
      setTimeout(() => handleCloseModal(), 1500);
    } catch (err) {
      console.error(err);
      setFormMsg('Submission failed.');
      showToast.error('Submission Failed', 'An error occurred. Please try again.');
    }
    setFormLoading(false);
  };

  return (
    <AppShell>
      {/* Video Header */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mt-12 md:mt-14">
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover z-0 transition-all duration-[2000ms] ease-out'
        >
          <source src='video/testimonial1.MP4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
          
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 px-4">
          <h1 className="text-4xl text-white md:text-6xl font-bold mb-4 text-center">Master Your<br />Creative Skills</h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl text-center mb-8">
            Join the best skill academy in Kerala and transform your creativity into professional skills with expert guidance and hands-on training.
          </p>
          <button
            onClick={handleScrollToCourses}
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg cursor-pointer"
          >
            View Courses &rarr;
          </button>
        </div>
      </div>

      {/* Courses List */}
      <div className="bg-black min-h-screen">
        {/* Current Courses Section */}
        <div className="py-20 px-4">
          <div id="courses" className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Our Courses
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Choose from our expert-led courses and start your creative journey today
              </p>
            </div>
            
            {/* Course Listings */}
            <div className="space-y-8">
              {courses.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <Palette className="w-12 h-12 text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">No courses available at the moment</h3>
                  <p className="text-gray-400 text-lg">Check back soon for new courses!</p>
                </div>
              ) : (
                courses.map((course, idx) => (
                  <div
                    key={course._id || idx}
                    className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                      {/* Course Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            {course.title === 'Resin Art Course' ? (
                              <Palette className="w-8 h-8 text-black" />
                            ) : (
                              <Sparkles className="w-8 h-8 text-black" />
                            )}
                            <h3 className="text-3xl md:text-4xl font-black text-black group-hover:text-gray-800 transition-colors">
                              {course.title}
                            </h3>
                          </div>
                          <span className="bg-black text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                            {course.type}
                          </span>
                        </div>
                        
                        {/* Course Meta */}
                        <div className="flex flex-wrap items-center gap-6 mb-6">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-5 h-5" />
                            <span className="font-semibold">{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="w-5 h-5" />
                            <span className="font-semibold">{course.level}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <span className="font-bold text-2xl text-black">{course.price}</span>
                          </div>
                        </div>
                        
                        {/* Course Description */}
                        <div className="text-gray-700 text-lg leading-relaxed font-medium mb-6">
                          <p>
                            {expandedCourses.has(course._id) ? course.description : truncateDescription(course.description)}
                          </p>
                          {course.description.length > 150 && (
                            <button
                              onClick={() => toggleCourseExpansion(course._id)}
                              className="text-black font-bold hover:text-gray-600 transition-colors duration-200 mt-2 inline-flex items-center gap-1"
                            >
                              {expandedCourses.has(course._id) ? 'See Less' : 'See More'}
                              <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${expandedCourses.has(course._id) ? 'rotate-90' : ''}`} />
                            </button>
                          )}
                        </div>

                        {/* Course Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {course.features?.map((feature, featureIdx) => (
                            <div key={featureIdx} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Enroll Button */}
                      <div className="flex-shrink-0 flex items-center">
                        <button
                          onClick={() => handleOpenModal(course.title)}
                          className="group/btn relative inline-flex items-center bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden cursor-pointer"
                        >
                          {/* Button background animation */}
                          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                          <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">
                            Enroll Now
                          </span>
                          <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover/btn:translate-x-1 group-hover/btn:text-black transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Course Benefits Section */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-4">
                <div className="flex items-center gap-2 text-black">
                  <Truck className="w-5 h-5" />
                  <span className="font-semibold">Free Delivery</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-800">
                  <Headphones className="w-5 h-5" />
                  <span className="font-semibold">Lifetime Support</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white text-black rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border-4 border-black">
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-200">
                  <div>
                    <h2 className="text-2xl font-black text-black">Enroll Now</h2>
                    <p className="text-gray-600 font-semibold">{enrollingCourse}</p>
                  </div>
                  <button 
                    onClick={handleCloseModal} 
                    className="text-gray-400 hover:text-black transition-colors p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Enrollment Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block font-black mb-3 text-black text-lg">Full Name *</label>
                    <input 
                      name="name" 
                      type="text" 
                      value={form.name} 
                      onChange={handleFormChange} 
                      required 
                      className="w-full border-2 border-gray-300 px-4 py-4 rounded-xl focus:border-black focus:outline-none transition-colors font-semibold text-lg" 
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-black mb-3 text-black text-lg">Email Address *</label>
                    <input 
                      name="email" 
                      type="email" 
                      value={form.email} 
                      onChange={handleFormChange} 
                      required 
                      className="w-full border-2 border-gray-300 px-4 py-4 rounded-xl focus:border-black focus:outline-none transition-colors font-semibold text-lg" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-black mb-3 text-black text-lg">Phone Number</label>
                    <input 
                      name="phone" 
                      type="tel" 
                      value={form.phone} 
                      onChange={handleFormChange} 
                      className="w-full border-2 border-gray-300 px-4 py-4 rounded-xl focus:border-black focus:outline-none transition-colors font-semibold text-lg" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-black mb-3 text-black text-lg">Why do you want to enroll? *</label>
                    <textarea 
                      name="message" 
                      value={form.message} 
                      onChange={handleFormChange} 
                      className="w-full border-2 border-gray-300 px-4 py-4 rounded-xl focus:border-black focus:outline-none transition-colors font-semibold text-lg resize-none" 
                      rows={4}
                      placeholder="Tell us about your creative goals and why you're interested in this course..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    {fieldWarning && (
                      <div className="text-red-600 text-sm bg-red-50 p-4 rounded-xl border-2 border-red-200 font-semibold">
                        {fieldWarning}
                      </div>
                    )}
                    <button 
                      type="button"
                      onClick={handleFormSubmit}
                      disabled={formLoading} 
                      className="w-full bg-black text-white py-4 rounded-xl font-black text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      {formLoading ? 'Submitting...' : 'Submit Enrollment Request'}
                    </button>
                  </div>
                  
                  {formMsg && (
                    <div className="text-center text-green-700 bg-green-50 p-4 rounded-xl border-2 border-green-200 font-bold text-lg">
                      {formMsg}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
        
    </AppShell>
  );
}
