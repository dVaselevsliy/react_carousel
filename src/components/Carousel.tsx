import React, { useState } from 'react';
import './Carousel.scss';

interface Props {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  infinite: boolean;
}

const Carousel: React.FC<Props> = ({
  images,
  itemWidth,
  frameSize,
  step,
  animationDuration,
  infinite,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => {
      if (infinite) {
        return prev <= 0 ? images.length - 1 : prev - step;
      }

      return Math.max(prev - step, 0);
    });
  };

  const handleNext = () => {
    setCurrentIndex(prev => {
      if (infinite) {
        return currentIndex >= images.length - 1 ? 0 : prev + step;
      }

      return Math.min(prev + step, images.length);
    });
  };

  const translateX = -(currentIndex * itemWidth);
  const currentWidth = frameSize * (itemWidth + 20);

  return (
    <div className="Carousel">
      <div className="Container" style={{ width: `${currentWidth}px` }}>
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: `${animationDuration}ms`,
          }}
        >
          {images.map(image => (
            <li className="item">
              <img
                style={{ width: `${itemWidth}px` }}
                src={`${image}`}
                alt="1"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="sideButton">
        <button
          onClick={handlePrev}
          className="left button"
          disabled={!infinite && currentIndex === 0}
          type="button"
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          className="rigth button"
          data-cy="next"
          disabled={!infinite && currentIndex >= images.length - 1}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
