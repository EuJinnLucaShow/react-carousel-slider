import { useState } from "react";

const images = [
  { src: "https://placehold.jp/600x400.png", legend: "Зображення 1" },
  { src: "https://placehold.jp/600x400.png", legend: "Зображення 2" },
  { src: "https://placehold.jp/600x400.png", legend: "Зображення 3" },
  { src: "https://placehold.jp/600x400.png", legend: "Зображення 4" },
  { src: "https://placehold.jp/600x400.png", legend: "Зображення 5" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button">
        Попереднє
      </button>
      <div className="carousel-slide">
        <div>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].legend}
          />
          <p>{images[currentIndex].legend}</p>
        </div>
      </div>
      <button onClick={nextSlide} className="carousel-button">
        Наступне
      </button>
    </div>
  );
};

export default Slider;
