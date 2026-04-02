import { useState, useEffect, useMemo, useCallback, useRef } from "react";

// images
import securityImg from "../assets/images/hero-security.jpg";
import facilityImg from "../assets/images/hero-facility.jpg";
import logisticsImg from "../assets/images/hero-logistics.jpg";

const Hero = () => {
  const images = useMemo(
    () => [securityImg, facilityImg, logisticsImg],
    []
  );

  const [current, setCurrent] = useState(0);

  // swipe refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // next
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // prev
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // auto
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    // threshold (avoid accidental swipe)
    if (distance > 50) {
      nextSlide(); // swipe left
    } else if (distance < -50) {
      prevSlide(); // swipe right
    }
  };

  return (
    <section
      className="relative h-[80vh] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Trusted Security & Facility Solutions
          </h1>

          <p className="mt-4 text-lg">
            Providing Security, Facility Management and Cash Logistics
            solutions across India.
          </p>

      

          {/* <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700" onClick={() => window.location.href = "/careers"}>
            Join Us
          </button> */}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
      >
        ❯
      </button>

    </section>
  );
};

export default Hero;