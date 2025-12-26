
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  date: string;
  category: 'LLM' | 'Agents' | 'Hardware' | 'Ethics';
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'Politics' | 'Economics' | 'Culture' | 'Technology';
  readTime: string;
}

export interface WritingItem {
  id: string;
  title: string;
  originalTitle: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string; // Markdown or plain text in Chinese
}

export enum Section {
  AI_JOURNEY = 'AI Journey',
  BLOG = 'Weekly Commentary',
  WRITING = 'Chinese Writings'
}
