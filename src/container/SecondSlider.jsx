import { SecondWhyUs } from "../components";
import { RxDotFilled } from "react-icons/rx";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const Slider = ({ slidesData }) => {
  const slides = slidesData.map((link, linkIndex) => (
    <SecondWhyUs
      key={linkIndex}
      text={link.text}
      title2={link.title2}
      linkText={link.linkText}
      img={link.img}
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
    <section className="relative my-6  mx-2 md:mx-4 md:my-16">
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
    </section>
  );
};

Slider.propTypes = {
  slidesData: PropTypes.array.isRequired,
};

export default Slider;
