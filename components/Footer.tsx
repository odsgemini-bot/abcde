
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xl font-black bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-4">
          DUSEONG.OH
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Oh Du-seong. All Rights Reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2 italic">
          "빵을 통해 행복을 전하고 싶습니다."
        </p>
      </div>
    </footer>
  );
};

export default Footer;
