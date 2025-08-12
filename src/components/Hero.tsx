import { useEffect, useState } from 'react';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroPortrait}
          alt="Mitesh Walke - Professional Portrait"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <h1 className="text-display text-white mb-6 max-w-4xl mx-auto">
          MITESH WALKE
        </h1>
        <div className="space-y-2 mb-8">
          <p className="text-hero text-warm-beige tracking-widest uppercase">
            Actor
          </p>
          <p className="text-hero text-warm-beige tracking-widest uppercase">
            Influencer
          </p>
          <p className="text-hero text-warm-beige tracking-widest uppercase">
            Developer
          </p>
          <p className="text-hero text-warm-beige tracking-widest uppercase">
            Editor
          </p>
        </div>
        <div className="w-24 h-0.5 bg-white mx-auto opacity-60" />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;