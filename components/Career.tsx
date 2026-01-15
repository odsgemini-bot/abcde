
import React from 'react';

const Career: React.FC = () => {
  const timeline = [
    {
      period: '2020 - 현재',
      title: 'Senior Solutions Architect',
      company: 'Leading Tech Solutions',
      desc: '대규모 엔터프라이즈 시스템 아키텍처 설계 및 기술 리딩.'
    },
    {
      period: '2012 - 2020',
      title: 'Lead Full-Stack Developer',
      company: 'Innovate Systems',
      desc: '클라우드 마이그레이션 프로젝트 주도 및 신기술 스택 도입.'
    },
    {
      period: '2005 - 2012',
      title: 'Senior Developer',
      company: 'Core Soft Inc.',
      desc: '핵심 뱅킹 시스템 개발 및 유지보수 관리.'
    },
    {
      period: '2004 - 2005',
      title: 'Software Engineer',
      company: 'StartUp Alpha',
      desc: '개발 경력의 시작, 웹 기반 비즈니스 로직 구현.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-black text-center text-white mb-20">경력 및 이력</h2>
      
      <div className="relative border-l border-violet-500/30 ml-4 md:ml-0">
        {timeline.map((item, index) => (
          <div key={index} className="mb-12 ml-8 relative group">
            <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500 group-hover:bg-violet-500 transition-colors shadow-lg shadow-violet-500/50"></div>
            <div className="glass p-8 rounded-2xl border border-violet-500/10 hover:border-violet-500/30 transition-all transform group-hover:translate-x-2">
                <span className="text-xs font-bold text-violet-400 tracking-widest uppercase mb-2 block">{item.period}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-slate-400 font-medium mb-4">{item.company}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
