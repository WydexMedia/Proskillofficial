import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Star, Volume2, VolumeX } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Happy student1',
    role: '',
    course: 'Resin Art Course',
    video: '/video/testimonial1.MP4',
    rating: 5,
    avatar: 'NS'
  },
  {
    id: 2,
    name: 'Happy student2',
    role: '',
    course: 'Resin Art Course',
    video: '/video/testimonial2.MP4',
    rating: 5,
    avatar: 'AR'
  },
  {
    id: 3,
    name: 'Happy student 3',
    role: '',
    course: 'Resin Art Course',
    video: '/video/testimonial3.MP4',
    rating: 5,
    avatar: 'RK'
  },
];

function VideoTestimonials() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState({});
  const [videoLoaded, setVideoLoaded] = useState({});
  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef(null);
  const timeoutRef = useRef();

  // Auto-advance every 10 seconds when not playing
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (!isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 10000);
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPlaying]);

  // Reset video when testimonial changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setIsBuffering(false);
    }
  }, [current]);

  const togglePlayPause = async () => {
    if (!videoRef.current || videoError[current]) return;
    
    try {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsBuffering(true);
        await videoRef.current.play();
        setIsPlaying(true);
        setIsBuffering(false);
      }
    } catch (error) {
      console.error('Error playing video:', error);
      setVideoError(prev => ({ ...prev, [current]: true }));
      setIsPlaying(false);
      setIsBuffering(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current && !videoError[current]) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoError = (e) => {
    console.error('Video failed to load:', testimonials[current].video, e);
    setVideoError(prev => ({ ...prev, [current]: true }));
    setIsPlaying(false);
    setIsBuffering(false);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(prev => ({ ...prev, [current]: true }));
    setVideoError(prev => ({ ...prev, [current]: false }));
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setIsBuffering(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setIsBuffering(false);
  };

  const handleVideoWaiting = () => {
    setIsBuffering(true);
  };

  const handleVideoCanPlay = () => {
    setIsBuffering(false);
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrent(index);
  };

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const currentTestimonial = testimonials[current];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Main Video Container */}
        <div 
          className="relative group"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Video Player */}
          <div className="relative aspect-[9/16] max-w-sm mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-purple-500/20 hover:border-purple-500/30">
            {!videoError[current] ? (
              <>
                <video
                  ref={videoRef}
                  src={currentTestimonial.video}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoaded}
                  onWaiting={handleVideoWaiting}
                  onCanPlay={handleVideoCanPlay}
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={togglePlayPause}
                      disabled={isBuffering}
                      className="w-20 h-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/30"
                    >
                      {isBuffering ? (
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : isPlaying ? (
                        <Pause className="w-8 h-8 text-white ml-0.5" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Top Controls */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                      {currentTestimonial.course}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <button
                        onClick={toggleMute}
                        className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/80 transition-colors border border-white/20"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {currentTestimonial.avatar}
                        </div>
                        <div className="text-white">
                          <div className="font-bold text-lg">{currentTestimonial.name}</div>
                          <div className="text-gray-300 text-sm">{currentTestimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Error State
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {currentTestimonial.avatar}
                  </div>
                  <div className="text-lg font-semibold mb-2">{currentTestimonial.name}</div>
                  <div className="text-gray-400 text-sm mb-4">{currentTestimonial.role}</div>
                  <div className="text-xs text-gray-500 bg-black/30 px-3 py-1 rounded-full">
                    Video temporarily unavailable
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-6">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === current 
                      ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicator */}
          {!isPlaying && (
            <div className="mt-6 max-w-xs mx-auto">
              <div className="bg-white/10 rounded-full h-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
                />
              </div>
              <div className="text-center mt-2 text-white/60 text-sm">
                {current + 1} of {testimonials.length}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoTestimonials;