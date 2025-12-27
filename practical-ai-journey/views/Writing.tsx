
import React from 'react';
import { siteData } from '../data.ts';
import { Bookmark, ChevronRight } from 'lucide-react';

const Writing: React.FC = () => {
  const { chineseWritings } = siteData;

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Personal Writing</h1>
          <h2 className="text-2xl font-serif text-slate-500 italic">中文作品集</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chineseWritings.map((writing: any) => (
            <div key={writing.id} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="text-xs font-bold text-slate-400 mb-4 uppercase">{writing.date}</div>
              <h3 className="text-2xl font-bold mb-1">{writing.originalTitle}</h3>
              <h4 className="text-indigo-600 font-medium mb-4">{writing.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">{writing.excerpt}</p>
              <button className="flex items-center space-x-2 text-slate-900 font-bold hover:text-indigo-600">
                <span>阅读全文</span> <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Writing;
