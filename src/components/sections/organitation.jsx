import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import BackgroundOrg from "/src/assets/background/pseudo-patern.png";

const OrganitationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/src/assets/avatar/jokowi.png",
      name: "Joko Widodo",
      title: "Presiden Republik Indonesia",
      caption:
        "Sebuah cita-cita besar dan pekerjaan besar yang akan kita segera mulai, yaitu pembangunan Ibu Kota Nusantara. Terima kasih sebesar-besarnya kepada MPR, DPR, MA, MK, BPK, KY, dan seluruh komponen masyarakat dalam mendukung dimulainya pembangunan Ibu Kota Nusantara. Semoga hidayah dan barokah Allah SWT memberikan kemudahan dan kelancaran dalam membangun Ibu Kota Nusantara.",
      source: "Disampaikan dalam Penyatuan Air dan Tanah di Titik Nol Ibu Kota Nusantara, 14 Maret 2023",
    },
    {
      id: 2,
      image: "/src/assets/avatar/bashuki.png",
      name: "Basuki Hadimuljono",
      title: "Menteri PUPR",
      caption:
        "“Kita ingin mewujudkan kota cerdas dan modern berstandar internasional, menjadikan ikon urban desain sebagai representasi kemajuan bangsa yang unggul.”",
      source: "Disampaikan dalam Penyatuan Air dan Tanah di Titik Nol Ibu Kota Nusantara, 14 Maret 2023",
    },
    {
      id: 3,
      image: "/src/assets/avatar/soekarno.png",
      name: "Soekarno",
      title: "Presiden Ke-1 Republik Indonesia",
      caption:
        "Diberitakan Harian Kompas edisi 25 Januari 1997, Soekarno mempunyai visi bahwa sebaiknya ibu kota baru berada di luar Jawa, khususnya di Indonesia bagian timur. Palangkaraya, Kalimantan Tengah, menjadi salah satu kota yang diincar Soekarno. Pada 17 April 1957, Soekarno meletakkan batu pertama di kota tersebut sebagai 'sister city' Jakarta.",
      source: "Disampaikan dalam Penyatuan Air dan Tanah di Titik Nol Ibu Kota Nusantara, 14 Maret 2023",
    },
    {
      id: 4,
      image: "/src/assets/avatar/soeharto.png",
      name: "Soeharto",
      title: "Presiden Ke-2 Republik Indonesia",
      caption:
        "Pada 1997, Presiden Soeharto mengeluarkan Keppres Nomor 1 Tahun 1997 Tentang Koordinasi Pengembangan Kawasan Jonggol Sebagai Kota Mandiri, dimaksudkan untuk pusat pemerintahan.",
      source: "Disampaikan dalam Penyatuan Air dan Tanah di Titik Nol Ibu Kota Nusantara, 14 Maret 2023",
    },
    {
      id: 5,
      image: "/src/assets/avatar/sby.png",
      name: "Susilo Bambang Yudhoyono",
      title: "Presiden ke-6 Republik Indonesia",
      caption:
        "Pada 2013, Presiden Susilo Bambang Yudhoyono menyodorkan skenario, mempertahankan Jakarta sebagai ibu kota, namun direncanakan dan dibangun benar-benar, atau memindahkan pusat pemerintahan keluar dari Jakarta.",
      source: "Disampaikan dalam Penyatuan Air dan Tanah di Titik Nol Ibu Kota Nusantara, 14 Maret 2023",
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="flex relative min-h-screen bg-slate-50 w-full overflow-x-hidden font-Gotham">
      <div className="absolute flex inset-y-0 left-1">
        <img src={BackgroundOrg} alt="Patern" className="opacity-50 object-cover"/>
      </div>
       
      <div className="h-full flex flex-col relative w-full ">
        <h1 className="mb-16 mt-20 text-center text-3xl font-medium text-primary">
          Menyambut Ibu Kota Nusantara
        </h1>
        <div className="flex items-center w-full">
        <button className="custom-prev p-3 " onClick={handlePrev}>
            <IoIosArrowBack className="p-1 border text-black border-black rounded-full font-light text-3xl" />
          </button>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{delay:8000}}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 200,
            modifier: 0.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: '.custom-prev', 
            nextEl: '.custom-next', 
          }}
          modules={[EffectCoverflow,Autoplay, Navigation]}
          className="mySwiper relative flex"
          ref={swiperRef}
        >
          
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative max-w-72 text-center flex">
              <div
                className={`card flex flex-col h-full rounded-lg relative p-1 ${
                  currentIndex === index ? "" : ""
                }`}
              >
                <div className=" avatar-wraper w-full h-[280px] relative">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-[280px] mb-2"

                />
                <div className="overlay-avatar absolute h-14 bg-gradient-to-t from-white to-transparent bottom-0 w-full ">
                </div>
                </div>
                <h3 className="text-md mt-2 font-medium">{slide.name}</h3>
                <p className="m-0 text-sm mb-2">{slide.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="custom-next p-3 " onClick={handleNext}>
            <IoIosArrowForward className="p-1 border text-black border-black rounded-full font-light text-3xl" />
        </button>
        </div>
        <div className="caption flex mt-2 justify-center items-start py-10 min-h-72 space-x-2 text-justify max-sm:p-10">
          <h1 className="font-bold text-2xl text-primary">"</h1>
          <div className="flex flex-col max-w-xl text-black font-light text-sm ">
            <h1>{slides[currentIndex].caption}</h1>
            <h1 className="mt-5">{slides[currentIndex].source}</h1>
          </div>
          <AiOutlineLoading3Quarters className="text-primary font-bold text-lg" />
        </div>
      </div>
    </section>
  );
};

export default OrganitationSection;
