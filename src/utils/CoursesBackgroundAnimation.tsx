/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';

const CoursesBackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    let floatingShapes: any[] = [];
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
      initFloatingShapes();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const initFloatingShapes = () => {
      floatingShapes = [];
      const shapes = [
        { type: 'circle', color: [147, 51, 234], size: 200 },
        { type: 'circle', color: [37, 201, 253], size: 180 },
        { type: 'circle', color: [247, 194, 102], size: 160 },
        { type: 'triangle', color: [34, 197, 94], size: 140 },
        { type: 'square', color: [239, 68, 68], size: 120 }
      ];

      shapes.forEach((shape, i) => {
        floatingShapes.push({
          ...shape,
          x: (i + 1) * (canvas.width / (shapes.length + 1)),
          y: canvas.height * (0.3 + Math.random() * 0.4),
          angle: Math.random() * Math.PI * 2,
          speed: 0.0003 + Math.random() * 0.0002,
          rotationSpeed: (Math.random() - 0.5) * 0.001,
          floatAmplitude: 30 + Math.random() * 20
        });
      });
    };

    const drawGradientOrb = (x: number, y: number, size: number, color: number[], opacity: number = 1) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${0.12 * opacity})`);
      gradient.addColorStop(0.5, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${0.06 * opacity})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawFloatingShape = (shape: any) => {
      const offsetX = Math.sin(time * shape.speed) * shape.floatAmplitude;
      const offsetY = Math.cos(time * shape.speed * 0.7) * shape.floatAmplitude;
      const x = shape.x + offsetX;
      const y = shape.y + offsetY;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(shape.angle);

      const pulse = Math.sin(time * 0.002) * 0.2 + 0.8;
      const size = shape.size * pulse;

      drawGradientOrb(0, 0, size, shape.color, pulse);

      // Draw subtle outline shape
      ctx.strokeStyle = `rgba(${shape.color[0]}, ${shape.color[1]}, ${shape.color[2]}, 0.15)`;
      ctx.lineWidth = 2;
      ctx.beginPath();

      if (shape.type === 'circle') {
        ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
      } else if (shape.type === 'square') {
        const halfSize = size * 0.35;
        ctx.rect(-halfSize, -halfSize, halfSize * 2, halfSize * 2);
      } else if (shape.type === 'triangle') {
        const halfSize = size * 0.4;
        ctx.moveTo(0, -halfSize);
        ctx.lineTo(halfSize, halfSize);
        ctx.lineTo(-halfSize, halfSize);
        ctx.closePath();
      }

      ctx.stroke();
      ctx.restore();

      shape.angle += shape.rotationSpeed;
    };

    const drawParticles = () => {
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulse = Math.sin(time * p.pulseSpeed + p.phase) * 0.5 + 0.5;
        const opacity = p.opacity * (0.4 + pulse * 0.6);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        gradient.addColorStop(0, `rgba(200, 220, 255, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(150, 180, 255, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.strokeStyle = `rgba(150, 200, 255, ${(1 - dist / 120) * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
    };

    const drawWaveLines = () => {
      const waves = [
        { amplitude: 40, frequency: 0.004, speed: 0.0008, offset: 0, color: 'rgba(147, 51, 234, 0.08)' },
        { amplitude: 30, frequency: 0.003, speed: 0.001, offset: Math.PI, color: 'rgba(37, 201, 253, 0.08)' },
        { amplitude: 35, frequency: 0.0035, speed: 0.0009, offset: Math.PI / 2, color: 'rgba(34, 197, 94, 0.08)' }
      ];

      waves.forEach(wave => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = canvas.height * 0.5 + 
                    Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude +
                    Math.cos(x * wave.frequency * 1.5 - time * wave.speed * 0.7) * wave.amplitude * 0.5;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });
    };

    const drawCandlesticks = () => {
      const candleCount = Math.floor(canvas.width / 80);
      const candleWidth = 6;

      for (let i = 0; i < candleCount; i++) {
        const x = (i + 0.5) * (canvas.width / candleCount);
        const baseY = canvas.height * 0.7;
        
        const phase = time * 0.0003 + i * 0.5;
        const height = 30 + Math.sin(phase) * 15;
        const y = baseY + Math.cos(phase * 0.8) * 20;
        
        const isGreen = Math.sin(phase) > 0;
        const color = isGreen ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.12)';
        const wickColor = isGreen ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)';
        
        // Wick
        ctx.strokeStyle = wickColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y - height / 2 - 10);
        ctx.lineTo(x, y + height / 2 + 10);
        ctx.stroke();
        
        // Body
        ctx.fillStyle = color;
        ctx.fillRect(x - candleWidth / 2, y - height / 2, candleWidth, height);
      }
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(100, 150, 200, 0.03)';
      ctx.lineWidth = 1;

      const gridSize = 60;
      const offsetX = (time * 0.02) % gridSize;
      const offsetY = (time * 0.015) % gridSize;

      for (let x = -offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      time += 16;
      
      // Dark background with subtle gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#0a0a0a');
      bgGradient.addColorStop(0.5, '#0f0f0f');
      bgGradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw layers
      drawGrid();
      floatingShapes.forEach(drawFloatingShape);
      drawWaveLines();
      drawCandlesticks();
      drawParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default CoursesBackgroundAnimation;