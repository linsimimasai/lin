import { useEffect, useRef, useState } from "react";

const SPOTLIGHT_R = 260;

type RevealLayerProps = {
  background: string;
  cursorX: number;
  cursorY: number;
};

export function RevealLayer({ background, cursorX, cursorY }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [maskUrl, setMaskUrl] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();
    setMaskUrl(`url(${canvas.toDataURL()})`);
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 hidden" />
      <div
        className="pointer-events-none absolute inset-0 z-30 bg-cover bg-center bg-no-repeat"
        style={{
          background,
          WebkitMaskImage: maskUrl,
          maskImage: maskUrl,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%"
        }}
      />
    </>
  );
}
