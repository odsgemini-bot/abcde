
import React from 'react';
import { ChevronRight, Heart, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-bold uppercase tracking-widest animate-fade-in">
            <Sparkles size={14} /> 20 Years of Craftsmanship
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight text-white">
            코드로 빚고 <br />
            <span className="bread-gradient">행복을 굽는</span> <br />
            오두성입니다.
          </h1>
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
            20년의 치열한 기술적 고민을 <br />
            제빵사의 따뜻한 마음으로 풀어내어, <br />
            사람들에게 기분 좋은 가치를 선물하고 싶습니다.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#about" className="group px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-violet-600/20 flex items-center gap-2">
              더 알아보기
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-10 py-5 border border-slate-800 hover:border-amber-500/50 text-slate-300 rounded-2xl font-bold transition-all hover:bg-amber-500/5 flex items-center gap-2">
              연락하기
              <Heart size={18} className="text-amber-500" />
            </a>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-violet-600/10 blur-[120px] rounded-full"></div>
          <div className="relative glass rounded-[60px] p-6 border border-white/5 transform hover:-rotate-1 transition-transform duration-700">
            <div className="rounded-[40px] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000" 
                alt="Programming Craft" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[32px] border border-white/10 shadow-2xl">
                <div className="text-5xl font-black text-violet-400 mb-1">20+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Years Of Dedication</div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl shadow-amber-500/30">
                🥖
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
