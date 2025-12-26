
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, BookOpen, PenTool, Home, Sparkles } from 'lucide-react';
import { siteData } from '../data.ts';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'AI Journey', path: '/ai-journey', icon: <Cpu size={18} /> },
    { name: 'Commentary', path: '/commentary', icon: <BookOpen size={18} /> },
    { name: 'Writing', path: '/writing', icon: <PenTool size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-indigo-600 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
                <Sparkles size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">PracticalAI</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'text-indigo-600 bg-indigo-50 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="ml-4 pl-4 border-l border-slate-200 flex items-center space-x-2 text-[10px] mono text-slate-400 uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Node: Local_GPU</span>
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-indigo-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white border-slate-100 p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs mono uppercase tracking-widest">
            Last Sync: {new Date(siteData.lastUpdated).toLocaleString()}
          </p>
          <p className="mt-4 text-slate-500 text-sm">© {new Date().getFullYear()} PracticalAI.github.io</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
