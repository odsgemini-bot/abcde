
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-widest">
            20 Years of Craftsmanship
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            빵을 통해 <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">행복을 전하고</span> <br />
            싶습니다.
          </h1>
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            개발의 논리적인 꼼꼼함과 제빵의 창의적인 예술성을 결합하여 
            사람들에게 따뜻한 가치를 전달하는 20년차 개발자, 오두성입니다.
          </p>
          <div className="flex space-x-4">
            <a href="#about" className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-violet-500/20">
              더 알아보기
            </a>
            <a href="#contact" className="px-8 py-4 border border-slate-700 hover:border-violet-500 text-slate-300 rounded-xl font-bold transition-all">
              연락하기
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full"></div>
          <div className="relative glass rounded-3xl p-8 border border-violet-500/20 transform hover:-rotate-2 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/duseong/600/800" 
              alt="Oh Du-seong" 
              className="rounded-2xl w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-violet-500/20">
                <div className="text-3xl font-bold text-violet-400">20+</div>
                <div className="text-xs text-slate-400 uppercase tracking-tighter">Years Exp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
