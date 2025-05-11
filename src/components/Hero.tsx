import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Importing the icons

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Video starts unmuted

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let hls: Hls | null = null;
    if (isVideoVisible && videoRef.current) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource('/gallery/home/WhatsApp-Video-2025-05-10-at-225049_afb65f4c.m3u8');
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = '/gallery/home/WhatsApp-Video-2025-05-10-at-225049_afb65f4c.m3u8';
      }
    }
    return () => {
      hls?.destroy();
    };
  }, [isVideoVisible]);

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted); // Update state
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted} // Dynamically set muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Mute/Unmute Button with Sound Icon */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-4 left-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />} {/* Toggle between icons */}
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
          Catalyst for <span className="text-orange-400">sustainable change</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
          Empowering underprivileged children, youth, and women through education, skills, and community development
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
          <a 
            href="#involved" 
            className="px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors shadow-lg"
          >
            Join Us
          </a>
          <a 
            href="#donate" 
            className="px-6 py-3 bg-white text-green-800 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
          >
            Donate Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-[43%] lg:left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white opacity-80 hover:opacity-100">
          <span className="mb-1 text-sm">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
