
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './views/Home.tsx';
import AIJourney from './views/AIJourney.tsx';
import Commentary from './views/Commentary.tsx';
import Writing from './views/Writing.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-journey" element={<AIJourney />} />
          <Route path="/commentary" element={<Commentary />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
