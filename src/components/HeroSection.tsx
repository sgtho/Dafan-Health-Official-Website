import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Zap, TrendingUp, Sparkles } from "lucide-react";
import heroImage from "@/assets/stem-cell-background.jpg";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated flowing ribbons */}
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.8" />
                <stop offset="50%" stopColor="rgb(14, 165, 233)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="ribbon2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="0.7" />
                <stop offset="50%" stopColor="rgb(14, 165, 233)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Flowing ribbon 1 */}
            <path d="M0,400 Q480,200 960,400 T1920,400 L1920,600 Q1440,800 960,600 T0,600 Z" fill="url(#ribbon1)" className="animate-[wave_8s_ease-in-out_infinite]" />
            
            {/* Flowing ribbon 2 */}
            <path d="M0,600 Q480,800 960,600 T1920,600 L1920,800 Q1440,400 960,800 T0,800 Z" fill="url(#ribbon2)" className="animate-[wave_12s_ease-in-out_infinite_reverse]" />
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full animate-float" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }} />)}
        </div>
        
        {/* Background image overlay */}
        <img src={heroImage} alt="Stem Cell and Exosome Research Background" className="w-full h-full object-cover opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Energetic Badge */}
          

          {/* Dynamic Main Heading */}
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 animate-fade-in leading-tight">
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text animate-shimmer">
              REVOLUTIONIZING
            </span>
            <span className="block mt-2">
              <span className="text-cyan-400 animate-pulse">STEM CELL</span>
              <span className="text-white mx-4">&</span>
              <span className="text-green-400 animate-pulse">EXOSOME</span>
            </span>
            <span className="block mt-2 text-2xl md:text-4xl font-bold text-white/90">
              THERAPEUTICS
            </span>
          </h1>

          {/* Dynamic Subtitle */}
          <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-in-right text-white font-medium">
            <span className="text-cyan-300">Breakthrough biotechnology</span> meets 
            <span className="text-green-300"> cutting-edge research</span> to create 
            <span className="text-purple-300"> life-changing therapeutic solutions</span>
          </p>

          {/* Energetic CTA Buttons */}
          

          {/* Energy Indicators */}
          
        </div>
      </div>

      {/* Energetic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center animate-pulse bg-white/10 backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-to-b from-green-400 to-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;