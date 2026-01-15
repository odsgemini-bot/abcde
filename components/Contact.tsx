
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass rounded-[40px] p-12 md:p-20 border border-violet-500/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
            <div className="text-[200px] font-black text-violet-400 select-none">HELLO</div>
        </div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-black text-white mb-8">연락처 정보</h2>
            <p className="text-lg text-slate-400 mb-12">
              새로운 프로젝트 제안이나 협업 문의, 혹은 맛있는 빵에 대한 이야기라면 언제든 환영합니다. 
              최대한 빠르게 답변 드리겠습니다.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:oh.neodavinci@gmail.com" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-violet-500 transition-all group"
              >
                <div className="w-14 h-14 glass flex items-center justify-center rounded-xl text-2xl group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">이메일</div>
                  <div className="text-xl font-medium text-slate-200">oh.neodavinci@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:010-6822-5256" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-violet-500 transition-all group"
              >
                <div className="w-14 h-14 glass flex items-center justify-center rounded-xl text-2xl group-hover:scale-110 transition-transform">
                  📱
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">전화번호</div>
                  <div className="text-xl font-medium text-slate-200">010-6822-5256</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="glass p-10 rounded-3xl border border-violet-500/10">
            <form className="space-y-6">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">성함</label>
                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 text-slate-200" placeholder="홍길동" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">이메일</label>
                    <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 text-slate-200" placeholder="example@domain.com" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">메시지</label>
                    <textarea className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 text-slate-200 h-32" placeholder="문의 내용을 입력해주세요."></textarea>
                </div>
                <button className="w-full py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-500/20">
                    메시지 보내기
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
