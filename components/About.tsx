
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <div className="glass p-8 rounded-3xl border border-violet-500/10 transform hover:-translate-y-2 transition-transform">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">꼼꼼함</h3>
                <p className="text-sm text-slate-400">20년의 개발 경력으로 다져진 디테일한 분석과 오류 없는 결과물을 지향합니다.</p>
            </div>
            <div className="glass p-8 rounded-3xl border border-violet-500/10 mt-8 transform hover:-translate-y-2 transition-transform">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-2">창의력</h3>
                <p className="text-sm text-slate-400">기존의 틀을 벗어나 빵을 굽는 마음으로 부드럽고 따뜻한 새로운 해결책을 제안합니다.</p>
            </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-4xl font-black text-white">삶을 빚는 <span className="text-violet-400">오두성</span></h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
          <p className="text-lg text-slate-300 leading-relaxed">
            안녕하세요. 기술을 도구로, 정성을 재료로 행복을 굽는 개발자 오두성입니다. 
            지난 20년 동안 수많은 코드를 짜오며 깨달은 것은, 결국 모든 기술의 끝에는 '사람'이 있다는 것입니다.
          </p>
          <p className="text-slate-400 leading-relaxed">
            한 줌의 밀가루가 정성을 만나 맛있는 빵이 되듯, 
            저의 꼼꼼한 코드와 창의적인 아이디어가 당신의 비즈니스와 만나 
            누군가에게 웃음과 행복을 줄 수 있기를 기대합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
