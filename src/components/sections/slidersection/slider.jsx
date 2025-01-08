import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Api = () => {
  const [slides, setSlides] = useState([
    {
      image: '/src/assets/avatar/jokowi.png',
      name: 'Joko Widodo',
      title: 'Presiden Republik Indonesia',
    },
    {
      image: '/src/assets/avatar/bashuki.png',
      name: 'Basuki Hadimuljono',
      title: 'Menteri PUPR',
    },
    {
      image: '/src/assets/avatar/soekarno.png',
      name: 'Soekarno',
      title: 'Kepala Otorita IKN',
    },
    {
      image: '/src/assets/avatar/soeharto.png',
      name: 'Soeharto',
      title: 'Deputi Otorita IKN',
    },
  ]);

  return (
    <div style={{ padding: '20px', background: '#f7f9fc' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Menyambut Ibu Kota Nusantara</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ width: '250px', textAlign: 'center' }}>
            <div style={{ padding: '10px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img
                src={slide.image}
                alt={slide.name}
                style={{ width: '100%', height: '200px', borderRadius: '10px' }}
              />
              <h3 style={{ margin: '10px 0 5px', fontSize: '18px', color: '#333' }}>{slide.name}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Api;
