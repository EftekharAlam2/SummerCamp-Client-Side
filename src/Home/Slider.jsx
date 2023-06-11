import { useState } from "react";
import one from "/1.jpg";
import two from "/2.jpg";
import three from "/3.jpg";
import four from "/4.jpg";
import { Zoom } from "react-awesome-reveal";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 4 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 4 ? 1 : prev + 1));
  };

  return (
    <div>
      <Zoom>
        <div className="carousel w-full">
          <div
            id={`slide${currentSlide}`}
            className="carousel-item relative w-full"
          >
            {currentSlide === 1 && (
              <img src={one} className="w-full" alt="Slide 1" />
            )}
            {currentSlide === 2 && (
              <img src={two} className="w-full" alt="Slide 2" />
            )}
            {currentSlide === 3 && (
              <img src={three} className="w-full" alt="Slide 3" />
            )}
            {currentSlide === 4 && (
              <img src={four} className="w-full" alt="Slide 4" />
            )}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button onClick={prevSlide} className="btn btn-circle">
                ❮
              </button>
              <button onClick={nextSlide} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Slider;
