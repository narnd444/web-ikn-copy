import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Kacungsection =()=>{
    return(
        <section className="font-Gotham relative w-screen max-h-max">

<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <div className="first hover:bg-hover-background min-w-72 max-w-72">
                    <div className="content-wrapper flex flex-col px-8 justify-center min-h-screen font-Gotham hover:bg-secondary hover:bg-opacity-50">
                    <h1>01</h1>
                    <h1 className="font-bold text-primary">Mendesain Sesuai Kondisi Alam</h1>
                    <hr className="border-2" />
                    <p>Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide> <div className="first hover:bg-hover-background min-w-72 max-w-72">
                    <div className="content-wrapper flex flex-col px-8 justify-center min-h-screen font-Gotham hover:bg-secondary hover:bg-opacity-50">
                    <h1>01</h1>
                    <h1 className="font-bold text-primary">Mendesain Sesuai Kondisi Alam</h1>
                    <hr className="border-2" />
                    <p>Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide> <div className="first hover:bg-hover-background min-w-72 max-w-72">
                    <div className="content-wrapper flex flex-col px-8 justify-center min-h-screen font-Gotham hover:bg-secondary hover:bg-opacity-50">
                    <h1>01</h1>
                    <h1 className="font-bold text-primary">Mendesain Sesuai Kondisi Alam</h1>
                    <hr className="border-2" />
                    <p>Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide> <div className="first hover:bg-hover-background min-w-72 max-w-72">
                    <div className="content-wrapper flex flex-col px-8 justify-center min-h-screen font-Gotham hover:bg-secondary hover:bg-opacity-50">
                    <h1>01</h1>
                    <h1 className="font-bold text-primary">Mendesain Sesuai Kondisi Alam</h1>
                    <hr className="border-2" />
                    <p>Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide> <div className="first hover:bg-hover-background min-w-72 max-w-72">
                    <div className="content-wrapper flex flex-col px-8 justify-center min-h-screen font-Gotham hover:bg-secondary hover:bg-opacity-50">
                    <h1>01</h1>
                    <h1 className="font-bold text-primary">Mendesain Sesuai Kondisi Alam</h1>
                    <hr className="border-2" />
                    <p>Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div></SwiperSlide>
    </Swiper>

        </section>


    )
}

export default Kacungsection