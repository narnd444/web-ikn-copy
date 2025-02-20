import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  // Variants untuk animasi fade-in
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 }, // Elemen mulai dengan opacity 0 dan posisi turun ke bawah
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Animasi ke opacity 1 dan posisi normal
  };

  return (
    <section
      className="hero-section font-Gotham relative w-full h-screen bg-cover bg-hero-background bg-center bg-no-repeat"
      id="beranda"
    >
      {/* Background overlay atas */}
      <div className="overlay-background h-32 w-full bg-gradient-to-b from-slate-950/20 to-transparent bg-opacity-5 absolute"></div>
      {/* Background overlay bawah */}
      <div className="overlay-background h-32 bottom-0 w-full bg-gradient-to-t from-slate-950/20 to-transparent bg-opacity-5 absolute"></div>

      <motion.div
        className="absolute inset-0 flex flex-col justify-between items-center text-center text-white p-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant} // Menggunakan variants fade-in
      >
        {/* Teks judul */}
        <motion.div
          className="font-Gotham mt-24"
          variants={fadeInVariant} // Variants untuk fade-in
          transition={{ delay: 0.2, duration: 1 }} // Delay untuk teks
        >
          <h1 className="text-4xl lg:text-4xl font-medium mb-2">
            Menuju Visi Indonesia 2045
          </h1>
          <h2 className="text-2xl lg:text-5xl font-bold">Kota Dunia Untuk Semua</h2>
        </motion.div>

        {/* Tombol aksi */}
        <motion.div
          className="mb-10 flex space-x-4"
          variants={fadeInVariant} // Variants untuk fade-in
          transition={{ delay: 0.4, duration: 1 }} // Delay lebih lama untuk tombol
        >
          <button className="bg-primary transition-all delay-300 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-lg">
            Jelajahi Selengkapnya
          </button>
          <button className="bg-gray-900/50 transition-all delay-300 hover:bg-gray-900 text-white px-8 py-2 rounded-lg shadow-lg">
            Tentang IKN
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Herosection;
