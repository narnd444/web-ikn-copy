import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import bgLogo from "/src/assets/logo/logo.svg";
import { useState } from "react";

const Recentsection = () => {

const [currentIndex, setCurrentIndex] = useState(0);
    
      const content = [
        
        {
          id: 1,
          judul1: "Otorita IKN Jalin Kerja Sama dengan Bank Mandiri untuk Hadirkan Solusi Keuangan",
          gambar1: "/src/assets/content/news.png",
          Content1: "2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN, pembangunan infrastruktur utama seperti Istana Kepresidenan, Gedung MPR/DPR RI dan perumahan, juga meliputi pemindahan ASN tahap awal, serta pembangunan dan beroperasinya infrastruktur dasar untuk 500.000 penduduk tahap awal.",
          Date1: "23 Agustus2023",
         
          judul2: "Pelantikan Kepala dan Wakil Kepala IKN",
          gambar2: "/src/assets/content/news-2.png",
          Content2: "2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN, pembangunan infrastruktur utama seperti Istana Kepresidenan, Gedung MPR/DPR RI dan perumahan, juga meliputi pemindahan ASN tahap awal, serta pembangunan dan beroperasinya infrastruktur dasar untuk 500.000 penduduk tahap awal.",
          Date2: "23 Agustus2023",
        },
        {
          id: 2,
          judul1: "Otorita IKN Jalin Kerja Sama dengan Bank Mandiri untuk Hadirkan Solusi Keuangan",
          gambar1: "/src/assets/content/news-2.png",
          Content1: "2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN, pembangunan infrastruktur utama seperti Istana Kepresidenan, Gedung MPR/DPR RI dan perumahan, juga meliputi pemindahan ASN tahap awal, serta pembangunan dan beroperasinya infrastruktur dasar untuk 500.000 penduduk tahap awal.",
          Date1: "23 Agustus2023",
         
          judul2: "Pelantikan Kepala dan Wakil Kepala IKN",
          gambar2: "/src/assets/content/news-3.png",
          Content2: "2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN, pembangunan infrastruktur utama seperti Istana Kepresidenan, Gedung MPR/DPR RI dan perumahan, juga meliputi pemindahan ASN tahap awal, serta pembangunan dan beroperasinya infrastruktur dasar untuk 500.000 penduduk tahap awal.",
          Date2: "23 Agustus2023",
        },
       
      ];

      const handlePaginationClick = (index) => {
        setCurrentIndex(index);
      };


return(
    
    <section className="min-h-screen max-h-max bg-custom-grey font-Gotham relative">
      <div className="absolute inset-0 z-0 ">
        <img src={bgLogo} alt="" className="absolute h-96 -ml-40 top-1 opacity-35" />
        <img src={bgLogo} alt="" className="absolute h-56  bottom-0 right-0 opacity-35" />
      </div>

      <div className="relative z-10 py-10">
        <div className="flex justify-between px-10 ">
          <div className="flex items-center">
            <h1 className="pr-20 font-medium text-xl">Berita Terkini</h1>
            <div>
              <p className="flex items-center font-light text-sm">
                Selengkapnya <FaLongArrowAltRight className="mx-3" />
              </p>
            </div>
          </div>
          <div className="pagination flex mt-6 space-x-4">
        {content.map((content, index) => (
          <input
            key={content.id}
            type="checkbox"
            className="custom-checkbox appearance-none w-5 h-5 border-2 border-primary rounded-full checked:bg-primary checked:border-primary focus:outline-none cursor-pointer"
            checked={currentIndex === index}
            onChange={() => handlePaginationClick(index)}
          />
        ))}
      </div>
        </div>

        <div className="flex justify-center items-start mt-10 ">
          <div className="flex flex-shrink flex-col justify-between min-h-[550px] max-h-[550px] w-6/12 mb-10 bg-white shadow-lg shadow-slate-300 rounded-xl border-slate-700 ml-10">
            <div className="flex-col m-7 flex-shrink">
              <h1 className="mb-4 font-medium text-xl">{content[currentIndex].judul1}</h1>
              <img src={content[currentIndex].gambar1} alt="" className="mb-3 object-cover w-full max-h-64 "/>
              <p className="font-light text-sm ">
              {content[currentIndex].Content1}
              </p>
            </div>
            <div className="mx-7 mb-7">
              <h1>{content[currentIndex].Date1}</h1>
            </div>
          </div>
          <div className="flex flex-shrink flex-col justify-between min-h-[550px] max-h-[550px] w-6/12 mb-10 bg-white shadow-lg shadow-slate-300 rounded-xl border-slate-700 mx-10">
            <div className="flex-col m-7 flex-shrink">
              <h1 className="mb-4 font-medium text-xl h-1/6">{content[currentIndex].judul2}</h1>
              <img src={content[currentIndex].gambar2} alt="" className="mb-3 object-cover w-full max-h-64 "/>
              <p className="font-light text-sm">
              {content[currentIndex].Content2}
              </p>
            </div>
            <div className="mx-7 mb-7">
              <h1>{content[currentIndex].Date2}</h1>
            </div>
          </div>
        </div>
      </div>
</section>

)
}
export default Recentsection