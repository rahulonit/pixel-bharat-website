import React from 'react'
import Marquee from "react-fast-marquee";
import image1 from '../assets/carousel-image1.png'
import image2 from '../assets/carousel-image2.png'
import image3 from '../assets/carousel-image3.png'
import image4 from '../assets/carousel-image4.png'
import image5 from '../assets/carousel-image5.png'
import image6 from '../assets/carousel-image6.png'
import image7 from '../assets/carousel-image7.png'

const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image4, alt: 'Image 4' },
  { src: image5, alt: 'Image 5' },
  { src: image6, alt: 'Image 6' },
  { src: image7, alt: 'Image 7' }
];

export default function Carousel() {
  return (
    <Marquee gradient={false} speed={200} pauseOnHover={true}>
      <div className='flex justify-center px-3 space-x-6'>
        {images.map((image, index) => (
          <div key={index} className='w-[420px] rounded-[36px] '>
            <img className='w-full h-[300px] object-cover rounded-[36px]' src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </Marquee>
  )
}
