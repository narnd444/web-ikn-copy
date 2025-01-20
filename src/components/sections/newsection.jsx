import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import news1 from "/src/assets/content/regulationnews.png"; // Ganti path sesuai dengan lokasi gambar Anda

const NewSection = () => {
  // Menggunakan Intersection Observer
  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya terjadi sekali
    threshold: 0.2, // Bagian terlihat 20% di viewport
  });

  // Variants untuk animasi fade-in
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 }, // Kondisi awal (opacity 0, turun sedikit)
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Muncul dengan transisi
  };

  return (
    <section
      className="flex flex-col justify-center font-Gotham items-center min-h-screen bg-gray-50"
      id="berita"
    >
      <motion.div
        ref={ref} // Hubungkan dengan Intersection Observer
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animasi dipicu saat terlihat
        variants={fadeInVariant} // Animasi fade-in
        className="flex flex-col mt-10 mb-10 mx-10"
      >
        

        {/* Judul dan Deskripsi */}
        <div className="mb-8 flex flex-col">
          <div className="flex">
            <h1 className="text-3xl font-bold text-black mb-4">
              Penggerak Ekonomi Indonesia di Masa Depan
            </h1>
          </div>
          <div className="w-full max-w-6xl flex md:hidden mb-5">
          <motion.img
            src={news1}
            alt="Penggerak Ekonomi Indonesia"
            className="rounded-lg shadow-md w-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 1 }} 
          />
        </div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="flex flex-col max-w-3xl">
              <p className="text-gray-700 mb-6 text-justify md:text-left ">
                Ibu Kota Negara akan dibangun untuk mencapai target Indonesia sebagai negara maju, sesuai Visi Indonesia 2045. Dibangun dengan identitas nasional, IKN akan mengubah orientasi pembangunan menjadi Indonesia-sentris, serta mempercepat Transformasi Ekonomi Indonesia.
              </p>
            </div>
            <div className="flex">
              <button className="border-2 border-accent text-accent px-6 py-2 rounded-lg font-medium text-sm hover:bg-accent hover:text-white transition duration-300">
                Pelajari Regulasi
              </button>
            </div>
          </div>
        </div>

        {/* Gambar */}
        <div className="w-full max-w-6xl hidden md:flex">
          <motion.img
            src={news1}
            alt="Penggerak Ekonomi Indonesia"
            className="rounded-lg shadow-md w-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 1 }} 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default NewSection;
