import React from 'react';
import { UserPlus, Brain, TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';

// Define custom CSS variables and keyframes for the theme
const customStyles = `
  :root {
    --neon-green: #00ff88;
    --neon-purple: #8b5cf6;
    --glow-blue: #3b82f6;
    --background: #0d0d0d;
    --container-background: #1a1a1a;
  }
  
  body {
    background-color: var(--background);
    color: white;
    font-family: 'Inter', sans-serif;
  }
  
  /* Keyframe for a pulsing border glow effect */
  @keyframes border-pulse-orange {
    0%, 100% { box-shadow: 0 0 5px #f97316, inset 0 0 5px #f97316; }
    50% { box-shadow: 0 0 15px #f97316, inset 0 0 15px #f97316; }
  }
  
  @keyframes border-pulse-purple {
    0%, 100% { box-shadow: 0 0 5px #a855f7, inset 0 0 5px #a855f7; }
    50% { box-shadow: 0 0 15px #a855f7, inset 0 0 15px #a855f7; }
  }
  
  /* Animation styles for the original component */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
    opacity: 0;
    transform: translateX(30px);
    }
    to {
    opacity: 1;
    transform: translateX(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .animate-fadeInLeft {
    animation: fadeInLeft 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .animate-fadeInRight {
    animation: fadeInRight 0.8s ease-out forwards;
    opacity: 0;
  }
`;

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Get Started",
      description: "Click the Get Started button to begin your journey. Our step-by-step guide will walk you through our tools and show you how to leverage our agent's full capabilities."
    },
    {
      number: "02",
      icon: Brain,
      title: "Launch the FINBUZZ.AI Agent",
      description: "Instantly access the conversational agent by selecting the \"LAUNCH FINBUZZ.AI\" button."
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Integrate Your Data",
      description: "Securely upload your financial data in formats like JSON, PDF, or TXT for personalized analysis and insights."
    },
    {
      number: "04",
      icon: Target,
      title: "Gain Actionable Insights",
      description: "Utilize a suite of tools to address various needs, from handling routine customer queries to conducting in-depth financial analysis and receiving personalized advice."
    }
  ];

  return (
    <>
      <style>{customStyles}</style>
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-deep-black to-space-blue-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Steps */}
            <motion.div
              className="space-y-8 animate-fadeInLeft"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center lg:text-left transform hover:scale-105 transition-transform duration-700">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white">How </span>
                  <span className="text-[#00FF88] drop-shadow-[0_0_7px_#00FF88]">FINBUZZ.AI</span>
                  <span className="text-white"> Works</span>
                </motion.h2>

                <motion.p
                  className="text-xl text-text-muted animate-fadeInUp hover:text-text-secondary transition-colors duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Initiate Your AI Financial Transformation in Four Simple Stages.
                </motion.p>
              </div>

              <div className="space-y-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex space-x-6 group animate-fadeInUp transform hover:scale-105 transition-transform duration-500"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500/30 to-red-600/30 rounded-full flex items-center justify-center border border-orange-500/40 group-hover:border-orange-400/70 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-orange group-hover:shadow-red">
                        <step.icon className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent group-hover:scale-110">
                          {step.number}
                        </span>
                        <h3 className="text-2xl font-semibold text-text-primary group-hover:text-orange-300 transition-colors duration-300">{step.title}</h3>
                      </div>
                      <p className="text-text-muted leading-relaxed group-hover:text-text-secondary transition-colors duration-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Right Side - Interactive Visualization (smaller) */}
            <motion.div
              className="relative h-64 lg:h-96 lg:ml-12 animate-fadeInRight"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-space-blue-900/40 via-space-blue-950/60 to-deep-black/80 backdrop-blur-md rounded-3xl border border-orange-500/30 transform hover:scale-105 transition-transform duration-700 hover:border-orange-400/50 shadow-glow-lg hover:shadow-glow-xl">
                
                {/* Central AI Interface */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-charcoal-900/80 rounded-full flex items-center justify-center border border-orange-400/60 backdrop-blur-sm transform hover:scale-125 transition-transform duration-500 shadow-orange">
                    <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400 animate-pulse-glow hover:animate-spin transition-all duration-300" />
                    
                    {/* Orbiting Data Points */}
                    <div className="absolute inset-0 animate-spin hover:animate-pulse" style={{ animationDuration: '20s' }}>
                      <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full animate-ping shadow-orange" />
                    </div>
                    
                    <div className="absolute inset-0 animate-spin hover:animate-bounce" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 -right-6 sm:-right-8 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full animate-ping shadow-red" />
                    </div>
                    
                    <div className="absolute inset-0 animate-spin hover:animate-pulse" style={{ animationDuration: '25s' }}>
                      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full animate-ping shadow-orange" />
                    </div>
                  </div>
                </div>

                {/* Floating Data Visualizations */}
                <div className="absolute top-8 right-8 space-y-1 sm:space-y-2 animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
                  {['Real-time Analysis', 'Market Insights', 'Risk Assessment'].map((label, i) => (
                    <div
                      key={i}
                      className="bg-charcoal-800/90 px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-charcoal-600/40 animate-bounce text-[10px] sm:text-sm text-text-secondary transform hover:scale-110 transition-transform duration-300 hover:border-orange-400/60 shadow-glow-sm hover:shadow-orange"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                {/* Dynamic Charts */}
                <div className="absolute bottom-8 left-8 w-24 h-16 sm:w-36 sm:h-20 bg-charcoal-900/80 rounded-lg border border-orange-400/40 p-2 sm:p-3 backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 hover:border-orange-400/60 shadow-orange">
                  <div className="text-[10px] sm:text-xs text-text-muted mb-1 sm:mb-2">Portfolio Performance</div>
                  <div className="h-6 sm:h-8 flex items-end space-x-0.5 sm:space-x-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-orange-500 to-red-500 rounded-sm animate-pulse-glow hover:animate-bounce transition-all duration-200 shadow-orange"
                        style={{
                          width: '6px',
                          height: `${Math.random() * 100 + 20}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* User Avatar */}
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-400/30 to-red-500/30 rounded-full border border-orange-400/40 flex items-center justify-center transform hover:scale-125 transition-transform duration-500 shadow-orange">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-text-secondary rounded-full animate-pulse-glow hover:animate-spin transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
