import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Simbolsection = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, 
  };

  return (
    <section
      className="hero-section font-Gotham relative w-full h-screen bg-cover bg-identity-background bg-center"
    >
      <motion.div
        ref={ref} 
        initial="hidden"
        animate={inView ? "visible" : "hidden"} 
        variants={fadeInVariant} 
        className="absolute inset-0 flex flex-col justify-between items-center text-center text-white pb-8"
      >
        {/* Judul */}
        <div className="flex justify-center flex-col items-center font-Gotham font-medium mt-8">
          <h1 className="text-sm lg:text-xl text-accent">
            Simbol Identitas Nasional
          </h1>
          <h1 className="text-md md:text-3xl text-primary">
            Kota Berkelanjutan di Dunia
          </h1>
        </div>

        {/* Statistik */}
        <div className="mb-4 flex flex-col md:flex-row items-center justify-center space-x-4">
          <div className="text-white flex flex-col md:flex-row items-center md:items-start mx-10 md:space-x-10">
            <div className="md:max-w-72">
              <h1 className="text-2xl font-medium mb-1">256.142 ha</h1>
              <p className="text-sm">Kawasan Strategis Nasional (KSN) IKN</p>
            </div>
            <div className="md:max-w-60">
              <h1 className="text-2xl font-medium mb-1">199.962 ha</h1>
              <p className="text-sm">
                Kawasan Pengembangan IKN *bagian dari KSN IKN
              </p>
            </div>
            <div className="md:max-w-40">
              <h1 className="text-2xl font-medium mb-1">56.180 ha</h1>
              <p className="text-sm">Kawasan IKN *bagian dari KSN IKN</p>
            </div>
          </div>

          {/* Tombol */}
          <div className="text-white border-gray-300">
            <button className="border-2 p-2 rounded-lg md:px-8 text-xs">
              IKN Dalam Angka
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Simbolsection;
