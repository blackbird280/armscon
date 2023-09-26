import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide default styles

const Carousel = ({ items }) => {
  useEffect(() => {
    new Splide('.splide', {
      type: 'loop',
      perPage: 1,
      focus: 'center',
      gap: '1rem',
      autoplay: true,
    }).mount();
  }, []);

  return (
    <div className="splide">
      <div className="splide__track">
        {items.map((item, index) => (
          <SplideSlide key={index}>
            <img src={item} alt={`Slide ${index}`} />
          </SplideSlide>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
