
import React from 'react';
import { siteData } from '../data.ts';
import { Clock, Tag } from 'lucide-react';

const Commentary: React.FC = () => {
  const { blogPosts } = siteData;

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Weekly Commentary</h1>
          <p className="text-slate-600">Deep dives into structural forces shaping our world.</p>
        </header>

        <div className="space-y-12">
          {blogPosts.map((post: any) => (
            <article key={post.id} className="border-b border-slate-100 pb-12">
              <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                <span className="flex items-center"><Clock size={16} className="mr-1" /> {post.date}</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-bold">{post.category}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
              <p className="text-lg text-slate-600 mb-6">{post.excerpt}</p>
              <button className="text-indigo-600 font-bold hover:underline">Read Article</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commentary;
