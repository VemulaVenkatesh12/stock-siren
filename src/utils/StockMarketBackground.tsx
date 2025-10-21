import React, { useEffect, useRef } from "react";

const StockMarketBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Candlestick class
    class Candlestick {
      x: number;
      y: number;
      width: number;
      height: number;
      wickHeight: number;
      isGreen: boolean;
      speed: number;
      opacity: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 8;
        this.height = 0;
        this.wickHeight = 0;
        this.isGreen = true;
        this.speed = 0;
        this.opacity = 0;
        this.reset();
      }

      reset(): void {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 50;
        this.width = 8;
        this.height = Math.random() * 60 + 40;
        this.wickHeight = this.height + Math.random() * 30;
        this.isGreen = Math.random() > 0.5;
        this.speed = Math.random() * 0.5 + 0.3;
        this.opacity = Math.random() * 0.4 + 0.2;
      }

      update(): void {
        this.y -= this.speed;
        if (this.y + this.wickHeight < 0) {
          this.reset();
        }
      }

      draw(): void {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;

        const color = this.isGreen ? "#22c55e" : "#ef4444";

        // Draw wick
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, this.y);
        ctx.lineTo(this.x + this.width / 2, this.y + this.wickHeight);
        ctx.stroke();

        // Draw body
        ctx.fillStyle = color;
        ctx.fillRect(
          this.x,
          this.y + (this.wickHeight - this.height) / 2,
          this.width,
          this.height
        );

        ctx.restore();
      }
    }

    // Chart line class
    class ChartLine {
      points: Array<{ x: number; y: number }>;
      y: number;
      amplitude: number;
      frequency: number;
      speed: number;
      offset: number;
      opacity: number;
      isUptrend: boolean;

      constructor() {
        this.points = [];
        this.y = 0;
        this.amplitude = 0;
        this.frequency = 0;
        this.speed = 0;
        this.offset = 0;
        this.opacity = 0;
        this.isUptrend = true;
        this.reset();
      }

      reset(): void {
        if (!canvas) return;
        this.points = [];
        this.y = Math.random() * canvas.height;
        this.amplitude = Math.random() * 40 + 20;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.speed = Math.random() * 0.8 + 0.4;
        this.offset = 0;
        this.opacity = Math.random() * 0.25 + 0.15;
        this.isUptrend = Math.random() > 0.5;

        for (let i = 0; i < canvas.width + 100; i += 15) {
          this.points.push({ x: i, y: 0 });
        }
      }

      update(): void {
        if (!canvas) return;
        this.offset += this.speed;
        if (this.offset > canvas.width + 200) {
          this.reset();
        }
      }

      draw(): void {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = this.isUptrend ? "#22c55e" : "#ef4444";
        ctx.lineWidth = 2;
        ctx.beginPath();

        this.points.forEach((point, i) => {
          const x = point.x - this.offset;
          const y =
            this.y +
            Math.sin((x + this.offset) * this.frequency) * this.amplitude;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });

        ctx.stroke();
        ctx.restore();
      }
    }

    // Ticker symbol class
    class TickerSymbol {
      text: string;
      x: number;
      y: number;
      speed: number;
      opacity: number;
      change: number;
      size: number;

      constructor() {
        this.text = "";
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.opacity = 0;
        this.change = 0;
        this.size = 0;
        this.reset();
      }

      reset(): void {
        if (!canvas) return;
        const symbols = [
          "AAPL",
          "GOOGL",
          "MSFT",
          "TSLA",
          "AMZN",
          "NFLX",
          "META",
          "NVDA",
        ];
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 30;
        this.speed = Math.random() * 0.4 + 0.2;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.change = (Math.random() - 0.5) * 10;
        this.size = Math.random() * 8 + 12;
      }

      update(): void {
        this.y -= this.speed;
        if (this.y < -30) {
          this.reset();
        }
      }

      draw(): void {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px monospace`;
        ctx.fillStyle = this.change > 0 ? "#22c55e" : "#ef4444";
        ctx.fillText(this.text, this.x, this.y);
        ctx.font = `${this.size - 2}px monospace`;
        ctx.fillText(
          this.change > 0
            ? `+${this.change.toFixed(2)}%`
            : `${this.change.toFixed(2)}%`,
          this.x,
          this.y + this.size + 2
        );
        ctx.restore();
      }
    }

    // Grid line class
    class GridLine {
      isHorizontal: boolean;
      y: number;
      x: number;
      opacity: number;

      constructor(isHorizontal: boolean) {
        this.isHorizontal = isHorizontal;
        this.y = 0;
        this.x = 0;
        this.opacity = 0;
        this.reset();
      }

      reset(): void {
        if (!canvas) return;
        if (this.isHorizontal) {
          this.y = Math.random() * canvas.height;
          this.opacity = Math.random() * 0.1 + 0.05;
        } else {
          this.x = Math.random() * canvas.width;
          this.opacity = Math.random() * 0.1 + 0.05;
        }
      }

      draw(): void {
        if (!ctx || !canvas) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1;
        ctx.beginPath();

        if (this.isHorizontal) {
          ctx.moveTo(0, this.y);
          ctx.lineTo(canvas.width, this.y);
        } else {
          ctx.moveTo(this.x, 0);
          ctx.lineTo(this.x, canvas.height);
        }

        ctx.stroke();
        ctx.restore();
      }
    }

    // Initialize elements
    const candlesticks = Array.from({ length: 25 }, () => new Candlestick());
    const chartLines = Array.from({ length: 8 }, () => new ChartLine());
    const tickers = Array.from({ length: 15 }, () => new TickerSymbol());
    const gridLines = [
      ...Array.from({ length: 8 }, () => new GridLine(true)),
      ...Array.from({ length: 12 }, () => new GridLine(false)),
    ];

    // Animation loop
    let animationFrameId: number;

    const animate = (): void => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(17, 24, 17, 0.95)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      gridLines.forEach((line) => line.draw());

      // Draw chart lines
      chartLines.forEach((line) => {
        line.update();
        line.draw();
      });

      // Draw candlesticks
      candlesticks.forEach((candle) => {
        candle.update();
        candle.draw();
      });

      // Draw tickers
      tickers.forEach((ticker) => {
        ticker.update();
        ticker.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = (): void => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default StockMarketBackground;
