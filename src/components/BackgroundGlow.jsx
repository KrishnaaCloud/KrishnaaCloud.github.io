import React, { useEffect, useState } from 'react';

const BackgroundGlow = () => {
  const [position, setPosition] = useState({ x: '50%', y: '-200px' });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate position relative to viewport to make the glow follow the cursor smoothly
      const x = `${(e.clientX / window.innerWidth) * 100}%`;
      const y = `${(e.clientY / window.innerHeight) * 100}%`;
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="background-glow"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), top 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
    ></div>
  );
};

export default BackgroundGlow;
