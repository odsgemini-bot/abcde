
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-2xl font-black bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-8">
          DUSEONG.OH
        </div>
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
            {['home', 'about', 'skills', 'career', 'contact'].map((item) => (
                <a key={item} href={`#${item}`} className="text-sm font-medium text-slate-500 hover:text-white transition-colors capitalize">
                    {item === 'home' ? '홈' : item === 'about' ? '소개' : item === 'skills' ? '기술' : item === 'career' ? '경력' : '연락처'}
                </a>
            ))}
        </nav>
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            Made with <Heart size={14} className="text-amber-500 fill-amber-500" /> by <span className="text-slate-300 font-medium">Oh Du-seong</span>
        </div>
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Oh Du-seong. 모든 권리는 오두성에게 있습니다.
        </p>
        <p className="text-slate-700 text-[10px] mt-4 uppercase tracking-widest italic">
          "Baking Happiness, Coding Future"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
