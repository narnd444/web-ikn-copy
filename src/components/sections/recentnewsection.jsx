import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import bgLogo from "/src/assets/logo/logo.svg";
import new1 from "/src/assets/content/news.png";
import new2 from "/src/assets/content/news-2.png";
import new3 from "/src/assets/content/news-3.png";
import new4 from "/src/assets/content/news-4.jpeg";
const Recentsection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for fade animation

  const content = [
    {
      id: 1,
      judul1: "Otorita IKN Jalin Kerja Sama dengan Bank Mandiri untuk Hadirkan Solusi Keuangan",
      gambar1: new1,
      Content1: "2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN...",
      Date1: "23 Agustus 2023",
      judul2: "Pelantikan Kepala dan Wakil Kepala IKN",
      gambar2: new2,
      Content2: "2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN...",
      Date2: "23 Agustus 2023",
    },
    {
      id: 2,
      judul1: "Otorita IKN Jalin Kerja Sama dengan Bank Mandiri untuk Hadirkan Solusi Keuangan",
      gambar1: new3,
      Content1: "2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN...",
      Date1: "23 Agustus 2023",
      judul2: "Pelantikan Kepala dan Wakil Kepala IKN",
      gambar2: new4,
      Content2: "2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN...",
      Date2: "23 Agustus 2023",
    },
  ];

  const handlePaginationClick = (index) => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true); // Trigger fade-in
    }, 300); // Match this with fade-out duration
  };

  return (
    <section className="min-h-screen max-h-max bg-custom-grey font-Gotham relative">
      <div className="absolute inset-0 z-0 ">
        <img src={bgLogo} alt="" className="absolute h-96 -ml-40 top-1 opacity-35" />
        <img src={bgLogo} alt="" className="absolute h-56 bottom-0 right-0 opacity-35" />
      </div>

      <div className="relative z-10 py-10">
        <div className="flex items-center justify-between px-3 md:px-10 ">
          <div className="flex items-center">
            <h1 className="pr-20 font-medium text-xl">Berita Terkini</h1>
            <div>
              <p className="flex items-center font-light text-sm">
                Selengkapnya <FaLongArrowAltRight className="mx-3" />
              </p>
            </div>
          </div>
          <div className="pagination flex  space-x-4">
            {content.map((_, index) => (
              <input
                key={index}
                type="checkbox"
                className="custom-checkbox appearance-none w-5 h-5 border-2 border-primary rounded-full checked:bg-primary checked:border-primary focus:outline-none cursor-pointer"
                checked={currentIndex === index}
                onChange={() => handlePaginationClick(index)}
              />
            ))}
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-center items-start mt-10 px-8 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col justify-between min-h-[550px] max-h-[550px] md:w-6/12 mb-10 bg-white shadow-lg shadow-slate-300 rounded-xl border-slate-700 md:ml-10">
            <div className="flex-col m-7">
              <h1 className="mb-4 font-medium text-xl">{content[currentIndex].judul1}</h1>
              <img src={content[currentIndex].gambar1} alt="" className="mb-3 object-cover w-full max-h-64" />
              <p className="font-light text-sm">{content[currentIndex].Content1}</p>
            </div>
            <div className="mx-7 mb-7">
              <h1>{content[currentIndex].Date1}</h1>
            </div>
          </div>
          <div className="flex flex-col justify-between min-h-[550px] max-h-[550px] md:w-6/12 mb-10 bg-white shadow-lg shadow-slate-300 rounded-xl border-slate-700 md:mx-10">
            <div className="flex-col m-7">
              <h1 className="mb-4 font-medium text-xl">{content[currentIndex].judul2}</h1>
              <img src={content[currentIndex].gambar2} alt="" className="mb-3 object-cover w-full max-h-64" />
              <p className="font-light text-sm">{content[currentIndex].Content2}</p>
            </div>
            <div className="mx-7 mb-7">
              <h1>{content[currentIndex].Date2}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recentsection;
