import { useEffect, useRef, useState } from "react";
import MapSvg from "./MapSvg";
import { CiLocationOn } from "react-icons/ci";

const MapComponent = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleHover = (val: string | null) => {
    if (selectedRegion === val) return;
    setSelectedRegion(val);
    setShowTooltip(true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({
      left: event.layerX,
      top: event.layerY + 80,
    });
  };

  const hideTooltip = () => {
    setShowTooltip(false);
    setSelectedRegion(null);
  };

  useEffect(() => {
    const handleMouseMoveWrapper = (event: MouseEvent) =>
      handleMouseMove(event);

    document.addEventListener("mousemove", handleMouseMoveWrapper);

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveWrapper);
    };
  }, []);

  return (
    <div className="relative max-md:px-2 flex justify-center">
      <MapSvg
        onHandleHover={handleHover}
        onHideTooltip={hideTooltip}
        mouseMove={handleMouseMove}
      />

      {showTooltip && (
        <p
          ref={tooltipRef}
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
          className="z-50 pointer-events-none absolute w-fit rounded-lg bg-white px-3 py-2.5 -translate-x-1/2 translate-y-[-3rem] shadow-lg flex items-center gap-1"
        >
          <CiLocationOn />
          {selectedRegion}
        </p>
      )}
    </div>
  );
};

export default MapComponent;
