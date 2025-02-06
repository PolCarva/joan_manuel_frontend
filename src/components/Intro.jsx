import { useEffect, useState } from "react";

const Intro = ({ onFinish }) => {
    const [currentImage, setCurrentImage] = useState(1);
    const totalImages = 12;
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = () => {
            let loadedImages = 0;
            for (let i = 1; i <= totalImages; i++) {
                const img = new Image();
                img.src = `/intro/${i}.jpg`;
                img.onload = () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        setImagesLoaded(true);
                    }
                };
            }
        };

        preloadImages();
    }, [totalImages]);

    useEffect(() => {
        if (!imagesLoaded) return;

        let index = 1;
        const interval = setInterval(() => {
            setCurrentImage(index);
            index++;

            if (index > totalImages) {
                clearInterval(interval);
                setTimeout(() => {
                    onFinish(); // Ocultar intro
                }, 200); // Pequeña pausa final
            }
        }, 200); // Velocidad de cambio (100ms)

        return () => clearInterval(interval);
    }, [imagesLoaded, totalImages, onFinish]);

    return (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
            {imagesLoaded ? (
                <img
                    src={`/intro/${currentImage}.jpg`}
                    alt={`Intro ${currentImage}`}
                    className="w-full h-full object-cover transition-opacity duration-0"
                />
            ) : (
                <div className="text-white"></div>
            )}
        </div>
    );
};

export default Intro;
