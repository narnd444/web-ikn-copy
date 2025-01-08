
import React, { useState } from "react";
import Swiper from "swiper";
import 'swiper/css/bundle';

const Presidentsection = ()=>{
   
        const [currentIndex, setCurrentIndex] = useState(0);

  const tokoh = [
    {
      id: 1,
      nama: "SOEKARNO",
      jabatan: "Presiden ke-1 Republik Indonesia",
      gambar: "/src/assets/avatar/soekarno.png",
      deskripsi: "saya sukarni",
    },
    {
      id: 2,
      nama: "BASUKI HADIMULJONO",
      jabatan: "Menteri Pekerjaan Umum dan Perumahan",
      gambar: "/src/assets/avatar/bashuki.png",
      deskripsi: "Deskripsi Basuki...",
    },
    {
      id: 3,
      nama: "JOKO WIDODO",
      jabatan: "Presiden Republik Indonesia",
      gambar: "/src/assets/avatar/jokowi.png",
      deskripsi: "Deskripsi Jokowi...",
    },
    {
      id: 4,
      nama: "SUSILO BAMBANG YUDHOYONO",
      jabatan: "Presiden ke-6 Republik Indonesia",
      gambar: "/src/assets/avatar/sby.png",
      deskripsi: "Deskripsi SBY...",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tokoh.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tokoh.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="max-h-max min-h-screen font-Gotham text-primary text-xl" id="struktur-organisasi">
            <div className="title flex justify-center mt-20">
                <h1>Menyambut Ibu kota Nusantara</h1>
            </div>
    <div className="section">

      <div className="content flex items-center justify-center mt-8">
        <button
          onClick={handlePrev}
          className="text-xl p-2 bg-gray-200 rounded-full"
        >
          &#8592;
        </button>

        <div className="tokoh mx-8 text-center">
          <img
            src={tokoh[currentIndex].gambar}
            alt={tokoh[currentIndex].nama}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="mt-4 text-lg font-bold">{tokoh[currentIndex].nama}</h2>
          <h3 className="text-sm text-gray-600">
            {tokoh[currentIndex].jabatan}
          </h3>
          <p className="mt-4 text-sm">{tokoh[currentIndex].deskripsi}</p>
        </div>

        <button
          onClick={handleNext}
          className="text-xl p-2 bg-gray-200 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>

    

    </section>
  );
        
        
    
}
export default Presidentsection