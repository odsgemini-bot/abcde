
import React from 'react';
import { Search, Palette, Heart, Sparkles, Smile } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              기술을 빚고 <br />
              <span className="bread-gradient">행복을 나눕니다</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              "20년 경력의 시니어 개발자"라는 타이틀보다 <br />
              <strong className="text-white">"행복을 전달하는 메신저"</strong>로 기억되고 싶습니다.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-4 hover:bg-white/10 transition-colors group">
                <Search className="text-violet-400 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="font-bold text-white text-lg">집요한 꼼꼼함</h4>
                <p className="text-sm text-slate-400 leading-relaxed">0.1%의 오차도 허용하지 않는 완벽한 코드 설계를 지향합니다. 개발은 정밀한 계량에서 시작됩니다.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-4 hover:bg-white/10 transition-colors group">
                <Palette className="text-amber-400 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="font-bold text-white text-lg">따뜻한 창의성</h4>
                <p className="text-sm text-slate-400 leading-relaxed">차가운 기술에 제빵사의 따뜻한 감성을 불어넣어 가치를 만듭니다. 기술은 사람을 향해야 합니다.</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-violet-600/20 blur-[80px] rounded-full group-hover:bg-amber-500/10 transition-colors duration-700"></div>
          <div className="relative glass p-4 rounded-[48px] border border-white/10 overflow-hidden">
             <div className="aspect-[4/5] rounded-[36px] bg-slate-800 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Bread and Happiness" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
             </div>
             <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/40">
                        <Heart size={20} fill="currentColor" />
                    </div>
                    <span className="text-white font-bold tracking-tight">오두성의 가치관</span>
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">"정성을 다해 빚은 빵처럼, 누군가의 삶을 풍요롭게 만드는 결과물을 만듭니다."</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
