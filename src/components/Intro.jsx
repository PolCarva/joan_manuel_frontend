import { useEffect, useState } from "react";

const Intro = ({ onFinish }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 12;

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setCurrentImage(index);
      index++;

      if (index > totalImages) {
        clearInterval(interval);
        setTimeout(() => {
          onFinish(); // Ocultar intro
        }, 100); // Pequeña pausa final
      }
    }, 100); // Velocidad de cambio (100ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <img
        src={`/intro/${currentImage}.jpg`}
        alt={`Intro ${currentImage}`}
        className="w-full h-full object-cover transition-opacity duration-75"
      />
    </div>
  );
};

export default Intro;
