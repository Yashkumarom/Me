import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleSystem = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const colors = ['#00f3ff', '#bf00ff', '#ff0080', '#ffffff'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.className = 'particle';
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 10 + 8}s;
        animation-delay: ${Math.random() * 5}s;
        box-shadow: 0 0 ${size * 3}px ${color};
      `;
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 18000);
    };

    const interval = setInterval(createParticle, 300);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default ParticleSystem;