import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import "./GridMotion.css";

const coverImages = [
  "/projects/covers/cover-01.png",
  "/projects/covers/detail-page-cover-light-03.png",
  "/projects/covers/cover-03.png",
  "/projects/covers/cover-04.png",
  "/projects/covers/cover-05.png",
  "/projects/covers/cover-06.png",
  "/projects/covers/cover-07.png",
  "/projects/covers/cover-08.png",
  "/projects/covers/cover-09-clean.png",
  "/projects/covers/cover-10.png"
];

const rowOrders = [
  [8, 5, 7, 9],
  [3, 6, 0],
  [1, 4, 2]
];

const cardVariants = [
  { y: "-4px", scale: 0.98 },
  { y: "10px", scale: 1.03 },
  { y: "-12px", scale: 1 },
  { y: "6px", scale: 0.99 },
  { y: "-2px", scale: 1.02 }
];

export default function GridMotion() {
  const rowRefs = useRef([]);
  const moversRef = useRef([]);

  const rows = useMemo(() => {
    return rowOrders.map((order, rowIndex) => {
      return order.map((imageIndex, colIndex) => {
        const variant = cardVariants[(rowIndex * 2 + colIndex) % cardVariants.length];

        return {
          src: coverImages[imageIndex % coverImages.length],
          style: {
            "--card-shift-y": variant.y,
            "--card-scale": variant.scale
          }
        };
      });
    });
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    moversRef.current = rowRefs.current.map((row, index) => {
      if (!row) return null;
      gsap.set(row, { x: index % 2 === 0 ? -34 : 34 });
      return gsap.quickTo(row, "x", {
        duration: 0.9,
        ease: "power3.out"
      });
    });

    const handlePointerMove = (event) => {
      if (!moversRef.current.length) return;

      const progress = (event.clientX / window.innerWidth - 0.5) * 2;

      moversRef.current.forEach((moveTo, index) => {
        if (!moveTo) return;
        const direction = index % 2 === 0 ? -1 : 1;
        const travel = 76 + index * 18;
        const baseOffset = index % 2 === 0 ? -34 : 34;
        moveTo(baseOffset + progress * travel * direction);
      });
    };

    const resetRows = () => {
      moversRef.current.forEach((moveTo, index) => {
        if (!moveTo) return;
        moveTo(index % 2 === 0 ? -34 : 34);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", resetRows);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", resetRows);
      moversRef.current = [];
    };
  }, []);

  return (
    <div className="grid-motion">
      <div className="grid-motion__rows">
        {rows.map((row, rowIndex) => (
          <div
            className="grid-motion__row"
            key={`row-${rowIndex}`}
            ref={(node) => {
              rowRefs.current[rowIndex] = node;
            }}
          >
            {row.map((item, colIndex) => (
              <div className="grid-motion__card" key={`${item.src}-${rowIndex}-${colIndex}`} style={item.style}>
                <img
                  className="grid-motion__image"
                  src={item.src}
                  alt=""
                  draggable="false"
                  loading="eager"
                  onError={(event) => {
                    event.currentTarget.classList.add("grid-motion__image--missing");
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
