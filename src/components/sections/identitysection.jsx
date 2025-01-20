import {React, useRef} from "react";
import Logo2 from "/src/assets/logo/logo-notext.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  A11y, EffectCoverflow } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward,  } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const IdentitySection =()=>{
    const swiperRef = useRef(null);
    const slides = [
        {
            id: 1,
            classes: {
                container: "first flex hover:bg-hover-background min-w-64 max-w-64",
                wrapper: "content-wrapper flex font-Gotham hover:bg-secondary hover:bg-opacity-85",
                group: "group flex flex-col px-9 justify-center min-h-screen transition-all duration-500 space-y-4",
                number: "text-3xl text-primary font-light transition-transform duration-300 transform group-hover:scale-110 group-hover:ml-2 group-hover:text-white",
                title: "font-bold text-primary mb-3 text-lg transition-all duration-300 group-hover:text-white group-hover:text-xl min-h-14",
                separator: "border-2 mb-4 border-primary transition-all duration-300 group-hover:border-white",
                description: "text-sm font-light transition-all duration-300 group-hover:text-white group-hover:text-base max-h-48 min-h-48 group-hover:min-h-64",
            },
            number: "01",
            title: "Mendesain Sesuai Kondisi Alam",
            description:
                "Di Kawasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.",
        },
        {
            id: 2,
            classes: {
                container: "second flex hover:bg-hover-background min-w-64 max-w-64",
                wrapper: "content-wrapper flex font-Gotham hover:bg-secondary hover:bg-opacity-85",
                group: "group flex flex-col px-9 justify-center min-h-screen transition-all duration-500 space-y-4",
                number: "text-3xl text-primary font-light transition-transform duration-300 transform group-hover:scale-110 group-hover:ml-2 group-hover:text-white",
                title: "font-bold text-primary mb-3 text-lg transition-all duration-300 group-hover:text-white group-hover:text-xl min-h-14",
                separator: "border-2 mb-4 border-primary transition-all duration-300 group-hover:border-white",
                description: "text-sm font-light transition-all duration-300 group-hover:text-white group-hover:text-base max-h-48 min-h-48 group-hover:min-h-64",
            },
            number: "02",
            title: "Bhinneka Tunggal Ika",
            description:
                "Mencerminkan keberagaman budaya Indonesia dengan menjadikannya identitas yang inklusif. Kawasan ini menjadi simbol persatuan Indonesia dalam keberagaman.",
        },
        {
            id: 3,
            classes: {
                container: "third flex bg-hover-background min-w- max-w-64",
                wrapper: "content-wraper flex text-white font-Gotham bg-secondary bg-opacity-85 min-h-screen",
                group: "group flex flex-col px-9 justify-center min-h-screen pb-10 space-y-4 scale-110",
                number: "text-3xl font-light",
                title: "font-bold mb-3 text-lg",
                separator: "border-2 mb-4 border-white",
                description: "text-sm font-light min-h-48",
            },
            number: "03",
            title: "Terhubung, Aktif Dan Mudah Diakses",
            description:
                "Fasilitas publik dirancang untuk mendorong mobilitas aktif seperti berjalan kaki, bersepeda, dan menggunakan transportasi umum. Semua wilayah terintegrasi dengan sistem transportasi modern dan efisien.",
        },
        {
            id: 4,
            classes: {
                container: "fourth flex hover:bg-hover-background min-w-64 max-w-64",
                wrapper: "content-wrapper flex font-Gotham hover:bg-secondary hover:bg-opacity-85",
                group: "group flex flex-col px-9 justify-center min-h-screen transition-all duration-500 space-y-4",
                number: "text-3xl text-primary font-light transition-transform duration-300 transform group-hover:scale-110 group-hover:ml-2 group-hover:text-white",
                title: "font-bold text-primary mb-3 text-lg transition-all duration-300 group-hover:text-white group-hover:text-xl min-h-14",
                separator: "border-2 mb-4 border-primary transition-all duration-300 group-hover:border-white",
                description: "text-sm font-light transition-all duration-300 group-hover:text-white group-hover:text-base max-h-48 min-h-48 group-hover:min-h-64",
            },
            number: "04",
            title: "Rendah Emisi Karbon",
            description:
                "Menggunakan energi terbarukan dan ramah lingkungan untuk mencapai target rendah emisi karbon. Meningkatkan efisiensi energi dengan infrastruktur yang ramah lingkungan.",
        },
        {
            id: 5,
            classes: {
                container: "first flex hover:bg-hover-background min-w-64 max-w-64",
                wrapper: "content-wrapper flex font-Gotham hover:bg-secondary hover:bg-opacity-85",
                group: "group flex flex-col px-9 justify-center min-h-screen transition-all duration-500 space-y-4",
                number: "text-3xl text-primary font-light transition-transform duration-300 transform group-hover:scale-110 group-hover:ml-2 group-hover:text-white",
                title: "font-bold text-primary mb-3 text-lg transition-all duration-300 group-hover:text-white group-hover:text-xl min-h-14",
                separator: "border-2 mb-4 border-primary transition-all duration-300 group-hover:border-white",
                description: "text-sm font-light transition-all duration-300 group-hover:text-white group-hover:text-base max-h-48 min-h-48 group-hover:min-h-64",
            },
            number: "05",
            title: "Sirkular dan Berkelanjutan",
            description:
                "Penerapan prinsip ekonomi sirkular dengan pengelolaan limbah yang efisien dan pemanfaatan kembali sumber daya. Mendukung keberlanjutan ekologi dan ekonomi jangka panjang",
        },
        {
            id: 6,
            classes: {
                container: "second flex hover:bg-hover-background min-w-64 max-w-64",
                wrapper: "content-wrapper flex font-Gotham hover:bg-secondary hover:bg-opacity-85",
                group: "group flex flex-col px-9 justify-center min-h-screen transition-all duration-500 space-y-4",
                number: "text-3xl text-primary font-light transition-transform duration-300 transform group-hover:scale-110 group-hover:ml-2 group-hover:text-white",
                title: "font-bold text-primary mb-3 text-lg transition-all duration-300 group-hover:text-white group-hover:text-xl min-h-14",
                separator: "border-2 mb-4 border-primary transition-all duration-300 group-hover:border-white",
                description: "text-sm font-light transition-all duration-300 group-hover:text-white group-hover:text-base max-h-48 min-h-48 group-hover:min-h-64",
            },
            number: "06",
            title: "Aman dan Terjangkau",
            description:
                "Semua warga memiliki akses terhadap perumahan yang aman, layak, dan terjangkau. Sistem keamanan dan mitigasi risiko bencana yang mutakhir diterapkan di seluruh kawasan.",
        },
        {
            id: 7,
            classes: {
                container: "second flex hover:bg-hover-background min-w-64 max-w-64",
                wrapper: "content-wrapper flex font-Gotham hover:bg-secondary hover:bg-opacity-85",
                group: "group flex flex-col px-9 justify-center min-h-screen transition-all duration-500 space-y-4",
                number: "text-3xl text-primary font-light transition-transform duration-300 transform group-hover:scale-110 group-hover:ml-2 group-hover:text-white",
                title: "font-bold text-primary mb-3 text-lg transition-all duration-300 group-hover:text-white group-hover:text-xl min-h-14",
                separator: "border-2 mb-4 border-primary transition-all duration-300 group-hover:border-white",
                description: "text-sm font-light transition-all duration-300 group-hover:text-white group-hover:text-base max-h-48 min-h-48 group-hover:min-h-64",
            },
            number: "07",
            title: "Simbol Identitas Nasional",
            description:
                "IKN menjadi pusat budaya, pendidikan, dan teknologi yang mencerminkan nilai-nilai luhur bangsa Indonesia. Mengintegrasikan unsur arsitektur tradisional dan modern sebagai simbol identitas nasional.",
        },
        {
            id: 8,
            classes: {
                container: "fourth flex hover:bg-hover-background min-w-64 max-w-64",
                wrapper: "content-wrapper flex font-Gotham hover:bg-secondary hover:bg-opacity-85",
                group: "group flex flex-col px-9 justify-center min-h-screen transition-all duration-500 space-y-4",
                number: "text-3xl text-primary font-light transition-transform duration-300 transform group-hover:scale-110 group-hover:ml-2 group-hover:text-white",
                title: "font-bold text-primary mb-3 text-lg transition-all duration-300 min-h-14 group-hover:text-white group-hover:text-xl",
                separator: "border-2 mb-4 border-primary transition-all duration-300 group-hover:border-white",
                description: "text-sm font-light transition-all duration-300 group-hover:text-white group-hover:text-base max-h-48 min-h-48 group-hover:min-h-64",
            },
            number: "08",
            title: "Kota Untuk Semua",
            description:
                "Menciptakan kota yang inklusif dengan memperhatikan aksesibilitas untuk semua golongan, termasuk kelompok difabel, anak-anak, dan lansia. Membangun ruang publik yang mendorong interaksi sosial dan harmoni masyarakat.",
        },
    ];

    return(
        <section className="identity-section flex  font-Gotham relative w-full max-sm:h-max md:h-screen bg-center ">
            <div className="mt-8 ml-5 absolute flex items-center font-Gotham text-primary z-10">
                <img src={Logo2} alt="" />
                <h1 className="lg:text-2xl max-w-52 text-sm ml-4 font-bold">Delapan Prinsip Ibu Kota Negara</h1>
            </div>
          
            <Swiper
  modules={[Navigation, A11y, EffectCoverflow]}
  effect={"coverflow"}
  coverflowEffect={{
    rotate: 0,
    stretch: 150,
    depth: 0,
    modifier: 0.4,
    slideShadows: false,}}
  spaceBetween={1}
  
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 0 }, // 1 slide untuk layar kecil
    768: { slidesPerView: 3, spaceBetween: 0 }, // 2 slide untuk layar sedang
    1024: { slidesPerView: 4, spaceBetween: 0 }, // 4 slide untuk layar besar
  }}
  navigation={{
    prevEl: '.custom-prev-identity',
    nextEl: '.custom-next-identity',
  }}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  className="flex"
>
  {slides.map((slide) => (
    <SwiperSlide key={slide.id} className="flex">
      <div className={slide.classes.container}>
        <div className={slide.classes.wrapper}>
          <div className={slide.classes.group}>
            <h1 className={slide.classes.number}>{slide.number}</h1>
            <h1 className={slide.classes.title}>{slide.title}</h1>
            <hr className={slide.classes.separator} />
            <p className={slide.classes.description}>{slide.description}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
<div className="flex m-0 max-sm:hidden conten justify-center space-x-3 px-4">
  <button
    className="custom-prev-identity"
    onClick={() => swiperRef.current?.slidePrev()}
  >
    <IoIosArrowBack className="p-1 border text-black border-black rounded-full font-light text-3xl" />
  </button>
  <button
    className="custom-next-identity"
    onClick={() => swiperRef.current?.slideNext()}
  >
    <IoIosArrowForward className="p-1 border text-black border-black rounded-full font-light text-3xl" />
  </button>
</div>
        </section>
    )
}

export default IdentitySection;