import { todaysStats } from "../constants";
import { Stats } from "../components";
import { RxDotFilled } from "react-icons/rx";

import { useState, useCallback, useEffect } from "react";

const ForLegalSlider = () => {
  const slides = todaysStats.map((stat, statIndex) => (
    <Stats
      key={statIndex}
      title={stat.title}
      img={stat.img}
      amount={stat.amount}
    />
  ));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  const startSlider = useCallback(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  useEffect(() => {
    // startSlider();
  }, [startSlider]);

  return (
    <div className="md:hidden">
      <div>{slides[currentIndex]}</div>
      <div className="absolute flex justify-center items-center left-0 right-0 m-auto">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForLegalSlider;
