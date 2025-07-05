import { useEffect, useRef, useState } from "react";
import { CardComponent } from "../components/CardComponent";
import quad1 from "../assets/021.jpg";
import tireImage from "../assets/Llanta.png";

const images = [
  { src: quad1, label: "Experiencia Exclusiva", angle: 0, distance: 300 },
  { src: quad1, label: "Prioridad: Seguridad", angle: 60, distance: 300 },
  { src: quad1, label: "Vista Única", angle: 120, distance: 300 },
  { src: quad1, label: "Grupos Reducidos", angle: 180, distance: 300 },
  { src: quad1, label: "Piscina Termal", angle: 240, distance: 300 },
  { src: quad1, label: "Bosque Privado", angle: 300, distance: 300 },
];

export function Carousel() {
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const handleMouseDown = (e) => {
      if (e.button === 0) {
        e.preventDefault();
        isDragging.current = true;
        lastX.current = e.clientX;
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - lastX.current;
      lastX.current = e.clientX;
      setRotation((prev) => prev + deltaX * 0.5);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging.current = true;
        lastX.current = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - lastX.current;
      lastX.current = e.touches[0].clientX;
      setRotation((prev) => prev + deltaX * 0.5);
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    carouselEl.addEventListener("mousedown", handleMouseDown);
    carouselEl.addEventListener("mousemove", handleMouseMove);
    carouselEl.addEventListener("mouseup", handleMouseUp);

    carouselEl.addEventListener("touchstart", handleTouchStart);
    carouselEl.addEventListener("touchmove", handleTouchMove);
    carouselEl.addEventListener("touchend", handleTouchEnd);

    return () => {
      carouselEl.removeEventListener("mousedown", handleMouseDown);
      carouselEl.removeEventListener("mousemove", handleMouseMove);
      carouselEl.removeEventListener("mouseup", handleMouseUp);

      carouselEl.removeEventListener("touchstart", handleTouchStart);
      carouselEl.removeEventListener("touchmove", handleTouchMove);
      carouselEl.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleContextMenu = (e) => e.preventDefault();

  const [responsiveImages, setResponsiveImages] = useState(images);

  useEffect(() => {
    const updateDistances = () => {
      const width = window.innerWidth;

      const newDistance = width < 640 ? 160 : width < 768 ? 220 : 300;

      const updatedImages = images.map((img) => ({
        ...img,
        distance: newDistance,
      }));

      setResponsiveImages(updatedImages);
    };

    updateDistances();
    window.addEventListener("resize", updateDistances);
    return () => window.removeEventListener("resize", updateDistances);
  }, []);

  return (
    <section
      className="relative bg-black text-white overflow-hidden min-h-[160vh] flex flex-col px-4 select-none"
      onContextMenu={handleContextMenu}
    >
      <div className="absolute right-[8vw] sm:right-[20vw] text-left max-w-[300px]">
        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold leading-tight tracking-tight">
          Recorrido dentro de
          <br />
          nuestro bosque
          <br />
          privado.
        </h2>
        <p className="text-[10px] sm:text-xs md:text-sm text-red-600 font-semibold mt-1">
          SUPER QUADS
        </p>
      </div>

      <div
        ref={carouselRef}
        className="relative w-[90vw] h-[90vw] max-w-[700px] max-h-[700px] mt-20 self-center cursor-grab active:cursor-grabbing"
      >
        <img
          src={tireImage}
          alt="Llanta"
          className="absolute top-1/2 left-1/2 
            w-[150px] sm:w-[250px] md:w-[350px] lg:w-[400px] 
            h-[150px] sm:h-[250px] md:h-[350px] lg:h-[400px] 
            object-contain z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ transform: `rotate(${rotation}deg)` }}
        />

        {responsiveImages.map((item, i) => {
          const angle = item.angle + rotation;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * item.distance;
          const y = Math.sin(radian) * item.distance;

          return (
            <CardComponent
              key={i}
              x={x}
              y={y}
              angle={angle}
              src={item.src}
              label={item.label}
            />
          );
        })}
      </div>
    </section>
  );
}
