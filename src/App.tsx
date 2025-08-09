import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';
import DocumentationPage from './components/DocumentationPage.tsx';
import AgentUsagePage from './components/AgentUsagePage.tsx';

// A component that contains all the home page elements
const HomePage = () => (
  <>
    <Navigation />
    <Hero />
    <Features />
    <HowItWorks />
    <About />
  </>
);

// A wrapper component to use the useNavigate hook
const AppRoutes = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/agent-usage');
  };

  const handleGoBackFromAgentUsage = () => {
    navigate('/documentation');
  };

  const handleGoBackFromDocumentation = () => {
    navigate('/');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add new routes for the footer links */}
        <Route path="/features" element={<Features />} />
        <Route path="/how-to-use" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/documentation" 
          element={<DocumentationPage onExploreClick={handleExploreClick} onGoBack={handleGoBackFromDocumentation} />} 
        />
        <Route 
          path="/agent-usage" 
          element={<AgentUsagePage onGoBack={handleGoBackFromAgentUsage} />} 
        />
      </Routes>
      {/* The Footer component is now outside the Routes to appear on all pages */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-deep-black relative overflow-hidden">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
