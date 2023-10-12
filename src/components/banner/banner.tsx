import { Link } from 'react-router-dom';
import { useState } from 'react';


function Banner(): JSX.Element {

  const images = [
    'img/content/banner-bg.jpg',
    'img/content/banner-bg2.jpg', // Add more images as needed
    'img/content/banner-bg3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };


  return (
    <div className="banner">
      <picture>
        <source
          type="image/webp"
          srcSet={`${images[currentImageIndex].replace('.jpg', '.webp')}, ${images[currentImageIndex].replace('.jpg', '@2x.webp')} 2x`}
        />
        <img
          src={images[currentImageIndex]}
          srcSet={`${images[currentImageIndex].replace('.jpg', '@2x.jpg')} 2x`}
          width={1280}
          height={280}
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
          Cannonball&nbsp;Pro&nbsp;MX&nbsp;8i
        </span>
        <span className="banner__text">
          Профессиональная камера от&nbsp;известного производителя
        </span>
        <Link className="btn" to="#">
          Подробнее
        </Link>
      </p>
      <div className="slider-controls">
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default Banner;
