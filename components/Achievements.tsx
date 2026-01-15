
import React from 'react';

const Achievements: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-white mb-6">활동 및 성과</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 glass rounded-xl border border-violet-500/20 flex items-center justify-center text-xl">
                    🏆
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">20년차 베테랑 개발자</h4>
                    <p className="text-slate-400">강산이 두 번 변하는 시간 동안 수많은 시스템을 설계하고 운영해 왔습니다.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 glass rounded-xl border border-violet-500/20 flex items-center justify-center text-xl">
                    👨‍💻
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">풀스택 엔지니어링</h4>
                    <p className="text-slate-400">인프라부터 프론트엔드까지, 기술 전반에 걸친 깊은 통찰력을 보유하고 있습니다.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 glass rounded-xl border border-violet-500/20 flex items-center justify-center text-xl">
                    🥖
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">행복 전도사</h4>
                    <p className="text-slate-400">빵을 통해 사람들에게 행복을 전달하겠다는 확고한 철학을 삶 전반에 투영합니다.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
            <div className="bg-violet-900/10 border border-violet-500/10 p-10 rounded-[40px] text-center">
                <div className="text-5xl font-black text-violet-400 mb-2">20</div>
                <div className="text-slate-300 font-bold">Years Experience</div>
            </div>
            <div className="bg-indigo-900/10 border border-indigo-500/10 p-10 rounded-[40px] text-center mt-12">
                <div className="text-5xl font-black text-indigo-400 mb-2">100+</div>
                <div className="text-slate-300 font-bold">Projects Done</div>
            </div>
            <div className="bg-fuchsia-900/10 border border-fuchsia-500/10 p-10 rounded-[40px] text-center">
                <div className="text-5xl font-black text-fuchsia-400 mb-2">∞</div>
                <div className="text-slate-300 font-bold">Passion for Bread</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 p-10 rounded-[40px] text-center mt-12">
                <div className="text-5xl font-black text-slate-400 mb-2">0</div>
                <div className="text-slate-300 font-bold">Bugs Allowed</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
