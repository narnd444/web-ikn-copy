import React from "react";
import { useState } from "react";
import Timeline1 from "/src/assets/content/timeline-1.png";
import Timeline2 from "/src/assets/content/timeline-2.png";
import Timeline3 from "/src/assets/content/timeline-3.jpeg";

const Timelinesection = () => {
  const timelineData = [
    {
      id: 1,
      date:'2022-2024',
      title: "Pemindahan Tahap Awal",
      description: "Pemindahan tahap awal ke Kawasan IKN (K-IKN), membangun infrastruktur utama seperti Istana Kepresidenan, Gedung MPR/DPR RI dan perumahan, juga meliputi pemindahan ASN tahap awal, pembangunan dan beroperasinya infrastruktur dasar untuk 500 ribu penduduk tahap awal. Presiden Republik Indonesia akan merayakan HUT Ke-79 RI di K-IKN pada 17 Agustus 2024. ",
      image: Timeline1,
    },
    {
      id: 2,
      date:'2024-2035',
      title: "Pembangunan Area Inti",
      description: "Membangun IKN sebagai area inti yang tangguh, mengembangkan fase kota berikutnya seperti pusat inovasi dan ekonomi, menyelesaikan pemindahan pusat pemerintahan IKN, mengembangkan sektor- sektor ekonomi prioritas, menerapkan sistem insentif untuk sektor-sektor ekonomi prioritas, serta mencapai Tujuan Pembangunan Berkelanjutan.",
      image: Timeline2,
    },
    {
      id: 3,
      date:'2035-2039',
      title: "Pembangunan Ekosistem",
      description: "Fokus pembangunannya pada infrastruktur dan ekosistem di tiga kota untuk mempercepat pembangunan Kalimantan. Cakupannya pada pengembangan bidang pendidikan kesehatan. Kemudian penguatan ketahanan sosial-budaya masyarakat serta peningkatan kapasitas lembaga pendidikan dan riset. Penambahan kapasitas infrastruktur dasar seiring bertambahnya populasi. Terakhir peningkatan kapasitas dan diversifikasi klastes.",
      image: Timeline3,
    },
  ];
  
  
  const [visibleId, setVisibleId] = React.useState(2);

  

  return (
    <section className="py-1 font-Gotham flex flex-col justify-center items-center w-full max-h-max h-max">
      <div className="flex mt-20">
        <h1 className="text-primary text-2xl font-medium">Tonggak Sejarah Menuju 2045</h1>
        </div>
      <div className="container relative mx-auto flex flex-col justify-center items-center my-10">
         {/* Hanya tampilkan konten dengan ID <= visibleId */}
         {timelineData
          .filter((item) => item.id <= visibleId)
          .map((item) => (
            
          <div
            key={item.id}
            className={`flex flex-col space-y-4 p-7 md:p-2`}
          > 
          <div className="flex items-start w-full max-w-5xl px-2 md:px-6 md:p-0 space-x-3 md:space-x-7 md:my-6   relative transition-all duration-150">
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="md:min-w-72 md:min-h-44 md:max-h-44 md:max-w-72 h-28 object-fill rounded-md border-2 border-gray-300"
              />
            </div>
            <div className="line hidden md:flex flex-col items-center mx-6 relative">
              <div className="w-4 h-4 bg-primary rounded-full border-2 border-white z-10"></div>
                <div className="w-1 bg-slate-300 -mt-10 h-64 absolute opacity-40"></div>
            </div>
            <div className="flex flex-col ">
              <h2 className="text-xl font-normal text-primary">{item.date}</h2>
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
              <p className="hidden md:flex text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
          <p className="flex md:hidden text-sm px-6 text-gray-600 mt-2">{item.description}</p>
          </div>
         
        ))}
  {visibleId < timelineData.length && (
          <div className="overlay transition-all duration-500 flex absolute inset-x-0 justify-center items-end h-48 md:h-64 bottom-0 bg-gradient-to-t from-white to-slate-50/45 z-11 w-full">
          <button
            onClick={() => setVisibleId(visibleId + 1)}
            className="text-sm mt-4 px-12 py-2 hover:bg-black hover:text-white transition-all duration-500 border-2 border-black text-black rounded-md"
          >
            Selengkapnya
          </button>
          </div>
        )}
  {visibleId > 2 && (
          <button
            onClick={() => setVisibleId(visibleId - 1)}
            className="text-sm mt-4 py-2 hover:bg-black hover:text-white transition-all duration-500 border-2  border-black text-black rounded-md px-16"
          >
            Ringkas
          </button>
        )}
      </div>
      
    </section>
  );
};

export default Timelinesection;
