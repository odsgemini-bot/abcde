
import React from 'react';
import { Trophy, Code, Heart, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-white mb-8">
            걸어온 <span className="text-violet-400">기록</span>과 <br />
            나누고 싶은 <span className="text-amber-500">가치</span>
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start p-6 rounded-3xl hover:bg-white/5 transition-colors">
                <div className="w-14 h-14 flex-shrink-0 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-400">
                    <Trophy size={28} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">20년차 마스터 엔지니어</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">수많은 기술적 난제들을 해결하며 견고하고 확장 가능한 시스템을 구축해 왔습니다.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start p-6 rounded-3xl hover:bg-white/5 transition-colors">
                <div className="w-14 h-14 flex-shrink-0 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                    <Code size={28} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">풀스택 아키텍처</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">프론트엔드의 세밀함과 백엔드의 견고함을 동시에 아우르는 균형 잡힌 시각을 제공합니다.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start p-6 rounded-3xl hover:bg-white/5 transition-colors">
                <div className="w-14 h-14 flex-shrink-0 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
                    <Heart size={28} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">행복을 전하는 개발자</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">기술이 목적이 아닌, '사람의 행복'을 위한 수단이 될 수 있도록 고민하고 실천합니다.</p>
                </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
            {[
                { label: 'Experience', value: '20+', unit: 'Years', color: 'from-violet-600 to-indigo-600' },
                { label: 'Projects', value: '150+', unit: 'Done', color: 'from-blue-600 to-cyan-600' },
                { label: 'Happiness', value: '100%', unit: 'Guaranteed', color: 'from-amber-500 to-orange-600' },
                { label: 'System Uptime', value: '99.9', unit: 'Percent', color: 'from-emerald-600 to-teal-600' }
            ].map((stat, i) => (
                <div key={i} className={`p-8 rounded-[32px] bg-gradient-to-br ${stat.color} bg-opacity-10 border border-white/5 relative overflow-hidden group`}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
                        <Zap size={60} />
                    </div>
                    <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-white/60 uppercase tracking-widest">{stat.label}</div>
                    <div className="text-[10px] text-white/40 mt-1">{stat.unit}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
