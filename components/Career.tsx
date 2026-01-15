
import React from 'react';
import { Briefcase, Timer, Award, ChevronRight } from 'lucide-react';

const Career: React.FC = () => {
  const timeline = [
    {
      period: '2020 - 현재',
      title: 'Senior Solutions Architect',
      company: 'Leading Tech Solutions',
      phase: 'The Perfect Crust (완성)',
      desc: '대규모 엔터프라이즈 시스템 아키텍처 설계 및 기술 리딩. 20년의 내공이 집약된 견고한 설계 능력을 발휘하고 있습니다.'
    },
    {
      period: '2012 - 2020',
      title: 'Lead Full-Stack Developer',
      company: 'Innovate Systems',
      phase: 'The Golden Rise (발효와 팽창)',
      desc: '클라우드 마이그레이션 프로젝트 주도 및 신기술 스택 도입. 프론트엔드와 백엔드를 아우르는 깊은 통찰력을 쌓았습니다.'
    },
    {
      period: '2005 - 2012',
      title: 'Senior Developer',
      company: 'Core Soft Inc.',
      phase: 'Kneading the Foundation (반죽의 기초)',
      desc: '핵심 뱅킹 시스템 개발 및 유지보수 관리. 논리적 꼼꼼함의 기틀을 마련한 시기입니다.'
    },
    {
      period: '2004 - 2005',
      title: 'Software Engineer',
      company: 'StartUp Alpha',
      phase: 'The First Yeast (첫 효모)',
      desc: '개발 경력의 시작. 웹 기반 비즈니스 로직 구현을 통해 기술로 가치를 만드는 즐거움을 깨달았습니다.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">성장의 시간들</h2>
        <p className="text-slate-400 text-lg">20년, 정성을 들이는 시간만큼 깊어지는 맛과 기술.</p>
      </div>
      
      <div className="relative space-y-12">
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-12 md:pl-0">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
            
            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="glass p-8 rounded-[32px] border border-white/5 hover:border-violet-500/20 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-1 rounded-full bg-violet-600/10 text-violet-400 text-xs font-bold uppercase tracking-widest border border-violet-500/20">
                      {item.period}
                    </span>
                    <span className="text-amber-500 text-xs font-medium italic">{item.phase}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">{item.title}</h3>
                  <h4 className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                    <Briefcase size={16} /> {item.company}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-900 shadow-xl shadow-violet-500/10">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
              </div>
              
              <div className="flex-1 hidden md:block"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
