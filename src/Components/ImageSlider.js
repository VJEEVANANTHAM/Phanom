import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const images = [
    require('../logos/Logo Client 1.png'),
    require('../logos/Logo Client 2.png'),
    require('../logos/Logo Client 3.png'),
    require('../logos/Logo Client 4.png'),
    require('../logos/Logo Client 5.png'),
    require('../logos/Logo Client 1.png'),
    require('../logos/Logo Client 2.png'),
    require('../logos/Logo Client 3.png'),
    require('../logos/Logo Client 4.png'),
    require('../logos/Logo Client 5.png'),
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // Show 5 images at once
    slidesToScroll: 5, // Slide the next 5 images
    autoplay: true,
    autoplaySpeed: 5000, // Wait 5 seconds before sliding
    arrows: true,
  };

  return (
    <div style={{ padding: '40px', background: '#fff' }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                maxHeight: '200px', 
                borderRadius: '10px', 
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
