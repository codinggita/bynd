import React, { useEffect, useRef } from 'react';

const CanvasDots = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Scale for retina displays
    const dpr = window.devicePixelRatio || 1;
    
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Mouse Tracking
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY; // adjust if canvas scrolls
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // Grid config
    const spacing = 40; // Spacing between dots
    const cols = Math.ceil(width / spacing) + 2;
    const rows = Math.ceil(height / spacing) + 2;
    
    // Default colors
    const baseColor = '#E2E8F0'; // border
    const highlightColor = '#00E5FF'; // brand-accent
    const influenceRadius = 150; // Distance for hover effect
    const parallaxFactor = 0.02; // How much the grid shifts

    // Animation loop
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Global Parallax shift based on mouse relative to center
      const centerX = width / 2;
      const centerY = height / 2;
      const shiftX = mouse.x !== -1000 ? (mouse.x - centerX) * parallaxFactor : 0;
      const shiftY = mouse.y !== -1000 ? (mouse.y - centerY) * parallaxFactor : 0;

      const activeDots = [];

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          // Base position of dot
          const baseX = i * spacing + (spacing/2) - shiftX;
          const baseY = j * spacing + (spacing/2) - shiftY;

          // Distance from mouse
          const dx = mouse.x - baseX;
          const dy = mouse.y - baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate visual state
          let radius = 1;
          let color = baseColor;
          let isHighlighted = false;

          if (distance < influenceRadius) {
            const intensity = 1 - (distance / influenceRadius);
            radius = 1 + (intensity * 2); // Scales up to 3px
            
            // Interpolate color (hex to hex transition is complex in canvas, usually standard to just shift opacity or use rgba)
            // For performance, we stick to solid highlight if very close, or just use rgba strings
            // We'll fade in the cyan based on intensity
            const alpha = 0.2 + (intensity * 0.8);
            color = `rgba(0, 229, 255, ${alpha})`;
            isHighlighted = true;
            
            activeDots.push({ x: baseX, y: baseY, intensity });
          }

          // Draw the dot
          ctx.beginPath();
          ctx.arc(baseX, baseY, radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }

      // Draw faint connecting lines between active dots
      ctx.lineWidth = 1;
      for (let k = 0; k < activeDots.length; k++) {
        for (let m = k + 1; m < activeDots.length; m++) {
          const p1 = activeDots[k];
          const p2 = activeDots[m];
          const ddx = p1.x - p2.x;
          const ddy = p1.y - p2.y;
          const dist = Math.sqrt(ddx*ddx + ddy*ddy);
          
          if (dist < spacing * 1.5) { // Only connect neighbors
            const avgIntensity = (p1.intensity + p2.intensity) / 2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${avgIntensity * 0.3})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default CanvasDots;
