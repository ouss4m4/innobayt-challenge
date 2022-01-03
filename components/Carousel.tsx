import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);
  return (
    <div className="mx-auto mt-8">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              src="/images/carousel-1.jpg"
              width="1024"
              height="280"
              alt="carousel"
              layout="responsive"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/images/carousel-2.jpg"
              width="1024"
              height="280"
              alt="carousel"
              layout="responsive"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/images/carousel-3.jpg"
              width="1024"
              height="280"
              alt="carousel"
              layout="responsive"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/images/carousel-4.jpg"
              width="1024"
              height="280"
              alt="carousel"
              layout="responsive"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/images/carousel-5.jpg"
              width="1024"
              height="280"
              alt="carousel"
              layout="responsive"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/images/carousel-6.jpg"
              width="1024"
              height="280"
              alt="carousel"
              layout="responsive"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/images/carousel-7.jpg"
              width="1024"
              height="280"
              alt="carousel"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
