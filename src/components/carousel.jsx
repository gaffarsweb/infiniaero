"use client"
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../app/globals.css'; // Example of other styles
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = () => {
   const [imgData, setImgData]=useState([
    {
        url:'https://github.com/gaffars712/my-imgs/blob/main/home%20banner%20slider%201.jpeg?raw=true',
        alt:'slider 1'
    },
    {
        url:'https://github.com/gaffars712/my-imgs/blob/main/home%20banner%20slider%204.jpeg?raw=true',
        alt:'slider 2'
    },
    {
        url:'https://github.com/gaffars712/my-imgs/blob/main/home-slider-6.jpeg?raw=true',
        alt:'slider 3'
    },
    {
        url:'https://github.com/gaffars712/my-imgs/blob/main/home%20banner%20slider%205.jpeg?raw=true',
        alt:'slider 4'
    },
   ])
    return (
        <div className=' text-black'>
            <Carousel 
                className={'w-full'}
                autoPlay
                interval={5000}
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
                stopOnHover={true}
                dynamicHeight={true}
            >
                {
                    imgData.map((item, i) => {
                        return (
                            <div key={i}>
                                <img className='w-full object-contain' src={item?.url}  alt={item?.alt}/>
                            </div>
                        )
                    })
                }
            </Carousel>

        </div>);
};

export default CarouselComp;
