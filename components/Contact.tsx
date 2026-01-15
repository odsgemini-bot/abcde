
import React from 'react';
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass rounded-[56px] p-8 md:p-24 border border-white/10 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-black text-white mb-6">함께 구워볼까요?</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                새로운 프로젝트, 기술 상담, 혹은 따뜻한 빵 이야기까지 <br />
                오두성의 문은 항상 열려 있습니다.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:oh.neodavinci@gmail.com" className="flex items-center justify-between p-6 rounded-3xl bg-white/5 hover:bg-violet-600/20 transition-all group border border-transparent hover:border-violet-500/30">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 font-bold uppercase mb-1">Email Address</div>
                        <div className="text-lg text-white font-medium">oh.neodavinci@gmail.com</div>
                    </div>
                </div>
                <ArrowUpRight className="text-slate-600 group-hover:text-violet-400 transition-colors" />
              </a>

              <a href="tel:010-6822-5256" className="flex items-center justify-between p-6 rounded-3xl bg-white/5 hover:bg-amber-600/20 transition-all group border border-transparent hover:border-amber-500/30">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                        <Phone size={24} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 font-bold uppercase mb-1">Phone Number</div>
                        <div className="text-lg text-white font-medium">010-6822-5256</div>
                    </div>
                </div>
                <ArrowUpRight className="text-slate-600 group-hover:text-amber-500 transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="glass p-10 rounded-[40px] border border-white/5 shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-8">Quick Message</h4>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <input type="text" className="w-full bg-slate-900/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 text-slate-200 transition-all" placeholder="성함" />
                </div>
                <div className="space-y-2">
                    <input type="email" className="w-full bg-slate-900/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 text-slate-200 transition-all" placeholder="이메일" />
                </div>
                <div className="space-y-2">
                    <textarea className="w-full bg-slate-900/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 text-slate-200 h-32 transition-all resize-none" placeholder="내용을 입력하세요..."></textarea>
                </div>
                <button className="w-full py-5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-violet-500/25 flex items-center justify-center gap-3 group">
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
