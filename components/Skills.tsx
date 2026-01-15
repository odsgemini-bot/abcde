
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: '엑셀 (Excel)',
      desc: '데이터 분석 및 복잡한 수식 설계. 비즈니스 자동화 솔루션 구축 가능.',
      level: 95,
      icon: '📊'
    },
    {
      name: '영어 (English)',
      desc: '글로벌 협업 및 기술 문서 분석. 유창한 커뮤니케이션 능력 보유.',
      level: 90,
      icon: '🌐'
    },
    {
      name: '파워포인트 (PowerPoint)',
      desc: '논리적 구조화 및 시각적 설득력이 뛰어난 프레젠테이션 제작.',
      level: 85,
      icon: '📽️'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black text-white mb-4">보유 기술 및 강점</h2>
        <p className="text-slate-400">최상의 결과물을 위해 준비된 무기들입니다.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group glass p-10 rounded-3xl border border-violet-500/10 hover:border-violet-500/40 transition-all duration-500 transform hover:-translate-y-4"
          >
            <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-violet-400 transition-colors">
              {skill.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {skill.desc}
            </p>
            <div className="relative h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-1000 delay-300"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
            <div className="mt-2 text-right text-xs font-bold text-violet-400">
                {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
