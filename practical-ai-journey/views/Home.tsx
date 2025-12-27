
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, BookOpen, PenTool, Terminal, Layers, Globe } from 'lucide-react';
import { siteData } from '../data.ts';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-100">
              <Terminal size={14} />
              <span>Pipeline: Local_GPU_Active</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
              The <span className="gradient-text">Practical</span><br />AI Journey
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium">
              A private observatory of the machine age. Powered by local hardware, documented with human intent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ai-journey" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 flex items-center group">
                Enter Journey <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full -z-0 pointer-events-none opacity-40">
           <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]"></div>
           <div className="absolute inset-0 bg-gradient-to-l from-[#fcfcfd] via-transparent to-[#fcfcfd]"></div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <div className="text-4xl font-black mb-2">{siteData.news.length}+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reports Generated</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">{siteData.projects.length}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Projects</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">350k</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Words Processed</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">24/7</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Monitoring</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
