
import React from 'react';
import { siteData } from '../data.ts';
import { ExternalLink, Cpu, Zap, Calendar, RefreshCw } from 'lucide-react';

const AIJourney: React.FC = () => {
  const { news, projects, lastUpdated } = siteData;

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">My AI Journey</h1>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Updated via a local GPU pipeline and synced to GitHub.
            </p>
          </div>
          <div className="flex items-center text-xs font-mono text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
            <RefreshCw size={12} className="mr-2 animate-spin-slow" />
            Last Sync: {new Date(lastUpdated).toLocaleString()}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
              <Zap className="mr-2 text-indigo-600" size={24} />
              Breakthroughs
            </h2>
            {news.map((item: any) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full">{item.category}</span>
                  <span className="text-slate-400 text-sm flex items-center"><Calendar size={14} className="mr-1" /> {item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.summary}</p>
                <a href={item.url} target="_blank" rel="noopener" className="text-indigo-600 font-bold text-sm flex items-center">
                  Source: {item.source} <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
              <Cpu className="mr-2 text-indigo-600" size={24} />
              Projects
            </h2>
            {projects.map((project: any) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
                <img src={project.image} alt={project.name} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold mb-1">{project.name}</h3>
                  <p className="text-sm text-slate-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIJourney;
