
import React from 'react';
import { Database, Languages, Presentation, Code2, Sparkles, Heart } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: '데이터의 연금술 (Excel)',
      desc: '복잡한 비즈니스 로직을 엑셀로 정교하게 설계합니다. 20년 내공의 데이터 분석력을 갖추고 있습니다.',
      level: 98,
      icon: Database,
      color: 'text-emerald-400'
    },
    {
      name: '글로벌 소통 (English)',
      desc: '기술의 장벽을 넘는 유창한 영어 실력으로 글로벌 프로젝트와 문서를 자유롭게 다룹니다.',
      level: 92,
      icon: Languages,
      color: 'text-sky-400'
    },
    {
      name: '설득의 기술 (PPT)',
      desc: '단순한 발표를 넘어, 논리와 감성을 결합한 프레젠테이션으로 마음을 움직입니다.',
      level: 88,
      icon: Presentation,
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          숙성된 <span className="bread-gradient">기술의 향기</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          마치 좋은 빵이 오랜 발효를 거쳐 깊은 맛을 내듯, 20년의 세월은 저의 기술을 단순한 '기능' 이상의 '가치'로 완성시켰습니다.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div 
              key={index} 
              className="group glass p-10 rounded-[32px] border border-white/5 hover:border-violet-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className={`p-4 rounded-2xl bg-slate-800/50 inline-block mb-8 ${skill.color} group-hover:scale-110 transition-transform`}>
                <Icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {skill.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 h-20 overflow-hidden">
                {skill.desc}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Proficiency</span>
                  <span className="text-violet-400">{skill.level}%</span>
                </div>
                <div className="relative h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-600 to-amber-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
