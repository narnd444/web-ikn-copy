import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import bnews1 from "/src/assets/content/news-3.png" ;
import bnews2 from "/src/assets/content/news.png" ;
import bnews3 from "/src/assets/content/news-2.png" ;
import bnews4 from "/src/assets/content/news-4.jpeg" ;
const NewsbottomSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = [
    {
      id: 1,
      judul: "Pelantikan Kepala dan Wakil Kepala IKN",
      gambar: bnews1,
      topContent:
        "Kawasan IKN akan dibangun dengan prosentase tujuh puluh lima kawasan hijau dikawan pemerintahan IKN. Hal ini menjadikan seratus persen penduduk dapat mengakses ruang terbuka hijau rekreasi dalam waktu sepuluh menit dan setiap bangunan bertingkat institusional, komersial dan hunian dikonsepkan konstruksi ramah lingkungan.",
      BottomContent:
        "Temukan siapa yang berada di balik kemajuan dan inovasi Ibu Kota Nusantara, mulai dari para pemimpin hingga eksekutif utama.",
      CustomButton: "Lihat Struktur Organisasi",
    },
    {
      id: 2,
      judul: "Otorita IKN Jalin Kerja Sama dengan Bank Mandiri untuk Hadirkan Solusi Keuangan",
      gambar: bnews2,
      topContent:
        "Kawasan IKN akan dibangun dengan prosentase tujuh puluh lima kawasan hijau dikawan pemerintahan IKN. Hal ini menjadikan seratus persen penduduk dapat mengakses ruang terbuka hijau rekreasi dalam waktu sepuluh menit dan setiap bangunan bertingkat institusional, komersial dan hunian dikonsepkan konstruksi ramah lingkungan.",
      BottomContent:
        "Temukan siapa yang berada di balik kemajuan dan inovasi Ibu Kota Nusantara, mulai dari para pemimpin hingga eksekutif utama.",
      CustomButton: "Lihat Struktur Organisasi",
    },
    {
      id: 3,
      judul: "Pelantikan Kepala dan Wakil Kepala IKN",
      gambar: bnews3,
      topContent:
        "Kawasan IKN akan dibangun dengan prosentase tujuh puluh lima kawasan hijau dikawan pemerintahan IKN. Hal ini menjadikan seratus persen penduduk dapat mengakses ruang terbuka hijau rekreasi dalam waktu sepuluh menit dan setiap bangunan bertingkat institusional, komersial dan hunian dikonsepkan konstruksi ramah lingkungan.",
      BottomContent:
        "Temukan siapa yang berada di balik kemajuan dan inovasi Ibu Kota Nusantara, mulai dari para pemimpin hingga eksekutif utama.",
      CustomButton: "Lihat Struktur Organisasi",
    },
    {
      id: 4,
      judul: "Pelantikan Kepala dan Wakil Kepala IKN",
      gambar: bnews4,
      topContent:
        "Kawasan IKN akan dibangun dengan prosentase tujuh puluh lima kawasan hijau dikawan pemerintahan IKN. Hal ini menjadikan seratus persen penduduk dapat mengakses ruang terbuka hijau rekreasi dalam waktu sepuluh menit dan setiap bangunan bertingkat institusional, komersial dan hunian dikonsepkan konstruksi ramah lingkungan.",
      BottomContent:
        "Temukan siapa yang berada di balik kemajuan dan inovasi Ibu Kota Nusantara, mulai dari para pemimpin hingga eksekutif utama.",
      CustomButton: "Lihat Struktur Organisasi",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="font-Gotham flex min-h-svh h-max py-16 ">
      <div className="flex flex-col items-center md:items-baseline justify-center">
        <div className="content flex flex-col md:flex-row md:space-x-8  mx-10 md:mx-20">
          {/* Konten dengan Animasi */}
          <AnimatePresence mode="wait">
            <motion.div
              key={content[currentIndex].id} // Gunakan ID konten sebagai key untuk animasi
              initial={{ opacity: 0, x: -50 }} // Animasi awal
              animate={{ opacity: 1, x: 0 }} // Animasi saat elemen masuk
              exit={{ opacity: 0, x: 50 }} // Animasi saat elemen keluar
              transition={{ duration: 0.5 }} // Durasi animasi
              className="flex  max-h-96 min-h-60 w-full md:min-h-96 md:w-3/6"
            >
              <img
                src={content[currentIndex].gambar}
                alt={content[currentIndex].judul}
                className="object-cover rounded-md"
              />
            </motion.div>

            <motion.div
              key={`text-${content[currentIndex].id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col  md:w-3/6  md:max-h-96"
            >
              <div className="flex flex-col space-y-6 py-3 md:py-0 mb-4">
                <h1 className="font-medium text-lg md:text-3xl">
                  {content[currentIndex].judul}
                </h1>
                <p className="font-light text-xs md:text-base">{content[currentIndex].topContent}</p>
              </div>
              <hr />
              <div className="flex items-start justify-between h-full flex-col space-y-6 md:mt-4">
                <p className="font-light text-xs md:text-base">{content[currentIndex].BottomContent}</p>
                <button className="bg-primary text-xs md:text-base w-full md:w-auto text-white px-6 py-2 rounded-lg">
                  {content[currentIndex].CustomButton}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="pagination flex md:pl-32 mt-5 items-center space-x-4">
          <button
            onClick={handlePrev}
            className="text-lg p-1 text-white px-4 bg-primary rounded-full"
          >
            <IoIosArrowBack />
          </button>
          {content.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handlePaginationClick(index)}
              className={`pagination-bar rounded-md w-8 h-1 cursor-pointer ${
                currentIndex === index ? "bg-primary w-9 h-2" : "bg-gray-400"
              }`}
            ></div>
          ))}
          <button
            onClick={handleNext}
            className="text-lg p-1 text-white px-4 bg-primary rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsbottomSection;
