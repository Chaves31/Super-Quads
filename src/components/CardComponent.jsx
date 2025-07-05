export function CardComponent({ x, y, angle, src, label }) {
  const rotationToCenter = angle + -270;

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: `
          translate(${x}px, ${y}px)
          translate(-50%, -50%)
          rotate(${rotationToCenter}deg)
        `,
        transformOrigin: "center center",
      }}
    >
      <div className="w-[120px] h-[100px] sm:w-[150px] sm:h-[130px]  md:w-[180px] md:h-[160px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-between transition-transform duration-500 hover:scale-[1.4] p-2">
        <div className="w-full h-[60px] sm:h-[80px] md:h-[100px] rounded-md overflow-hidden">
          <img
            src={src}
            alt={label}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <p className="text-black text-[10px] sm:text-xs md:text-sm font-bold text-center mt-2">
          {label}
        </p>
      </div>
    </div>
  );
}
