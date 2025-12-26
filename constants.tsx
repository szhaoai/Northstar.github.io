
import React from 'react';
import { ProjectItem, BlogPost, WritingItem, NewsItem } from './types';

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'OpenAI Releases GPT-4o with Multimodal Capabilities',
    summary: 'A new flagship model that can reason across audio, vision, and text in real time.',
    source: 'OpenAI Blog',
    url: 'https://openai.com/blog',
    date: '2024-05-13',
    category: 'LLM'
  },
  {
    id: 'n2',
    title: 'Google DeepMind Announces Gemini 1.5 Flash',
    summary: 'A lightweight model optimized for speed and efficiency with a massive 1M token context window.',
    source: 'Google News',
    url: 'https://blog.google',
    date: '2024-05-14',
    category: 'LLM'
  },
  {
    id: 'n3',
    title: 'Anthropic Launches Claude 3.5 Sonnet',
    summary: 'New model sets industry benchmarks for intelligence while maintaining mid-tier speed.',
    source: 'Anthropic',
    url: 'https://anthropic.com',
    date: '2024-06-20',
    category: 'LLM'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    name: 'Gemini News Aggregator',
    description: 'A tool that uses Gemini with Search Grounding to find and summarize the most relevant AI research papers daily.',
    tech: ['React', 'Gemini API', 'TypeScript'],
    image: 'https://picsum.photos/seed/ai1/800/400'
  },
  {
    id: 'p2',
    name: 'Agentic Workflow Builder',
    description: 'Visual interface for designing multi-agent systems using LangGraph and Gemini 1.5 Pro.',
    tech: ['Python', 'React', 'FastAPI'],
    image: 'https://picsum.photos/seed/ai2/800/400'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Geopolitics of Silicon: 2024 Outlook',
    excerpt: 'How domestic semiconductor policy is reshaping global alliances and the economic landscape of East Asia.',
    content: 'The global semiconductor industry is no longer just about consumer electronics...',
    date: '2024-05-12',
    category: 'Economics',
    readTime: '8 min'
  },
  {
    id: 'b2',
    title: 'Cultural Inertia in the Age of Acceleration',
    excerpt: 'As AI moves at breakneck speeds, our cultural institutions struggle to maintain relevance. Why speed isn\'t always better.',
    content: 'We are living through a period of extreme technological acceleration...',
    date: '2024-05-05',
    category: 'Culture',
    readTime: '6 min'
  }
];

export const CHINESE_WRITINGS: WritingItem[] = [
  {
    id: 'w1',
    title: 'Reflection on Digital Nomadism',
    originalTitle: '关于数字游民生活的几点反思',
    excerpt: '在流动的世界里寻找定力。探讨技术如何改变了我们的地理属性与社交本质。',
    date: '2024-04-20',
    tags: ['哲学', '生活'],
    content: '这里是中文文章内容...'
  },
  {
    id: 'w2',
    title: 'The AI Revolution and Human Creation',
    originalTitle: '人工智能革命与人类创作的终极价值',
    excerpt: '当算法可以生成一切，真正的原创性将如何被重新定义？',
    date: '2024-03-15',
    tags: ['科技', '评论'],
    content: '这里是中文文章内容...'
  }
];
