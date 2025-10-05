import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import CallToAction from './components/CallToAction';
import Navigation from './components/Navigation';


function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation onLoginClick={() => setShowLogin(true)} />
      <Hero />
      <Features />
      <Industries />
      <CallToAction />
      
    </div>
  );
}

export default App;
