import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hamkorlar = () => {
  return (
    <div className='hamkors'>
       <h3 className='container'> Hamkorlar</h3>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '#custompagination',
        }}
        autoplay={{
            delay: 1600,
            disableOnInteraction: false,
          }}
          modules={[Autoplay,Pagination]}
         
        className="hamkor container"
        breakpoints={{
            250: {
                slidesPerView: 1,
                spaceBetween: 40,
                loop: true,
              },
            450: {
              slidesPerView: 2,
              spaceBetween: 40,
              loop: true,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
              loop: true,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 25,
              loop: true,
            },
          }}
      >
        <SwiperSlide className='hamkorlar'>
              <img src="https://imzo.uz/uploads/partners/b0b65b8fe71a.png" alt="" /> 
        </SwiperSlide>
        <SwiperSlide className='hamkorlar'>
            <img src="https://imzo.uz/uploads/partners/4d936cb212df.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='hamkorlar'>
            <img src="https://imzo.uz/uploads/partners/84465af0f6bc.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='hamkorlar'>
            <img src="https://imzo.uz/uploads/partners/b5d9ca597481.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='hamkorlar'>
            <img src="https://imzo.uz/uploads/partners/152aaac219a6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='hamkorlar'>
            <img src="https://imzo.uz/uploads/partners/965511e13f29.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='hamkorlar'>
            <img src="https://imzo.uz/uploads/partners/59bb9d3f38c8.png" alt="" />
        </SwiperSlide>
      </Swiper>
      <div id="custompagination"></div>
    </div>
  )
}

export default Hamkorlar