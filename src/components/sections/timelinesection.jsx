import React from "react";
import { useState } from "react";

const Timelinesection = () => {
  const timelineData = [
    {
      id: 1,
      date:'2022-2024',
      title: "Pemindahan Tahap Awal",
      description: "Pemindahan tahap awal ke Kawasan IKN (K-IKN), membangun infrastruktur utama seperti Istana Kepresidenan, Gedung MPR/DPR RI dan perumahan, juga meliputi pemindahan ASN tahap awal, pembangunan dan beroperasinya infrastruktur dasar untuk 500 ribu penduduk tahap awal. Presiden Republik Indonesia akan merayakan HUT Ke-79 RI di K-IKN pada 17 Agustus 2024. ",
      image: "/src/assets/content/timeline-1.png",
    },
    {
      id: 2,
      date:'2024-2035',
      title: "Pembangunan Area Inti",
      description: "Membangun IKN sebagai area inti yang tangguh, mengembangkan fase kota berikutnya seperti pusat inovasi dan ekonomi, menyelesaikan pemindahan pusat pemerintahan IKN, mengembangkan sektor- sektor ekonomi prioritas, menerapkan sistem insentif untuk sektor-sektor ekonomi prioritas, serta mencapai Tujuan Pembangunan Berkelanjutan.",
      image: "/src/assets/content/timeline-2.png",
    },
    {
      id: 3,
      date:'2035-2039',
      title: "Pembangunan Ekosistem",
      description: "Fokus pembangunannya pada infrastruktur dan ekosistem di tiga kota untuk mempercepat pembangunan Kalimantan. Cakupannya pada pengembangan bidang pendidikan kesehatan. Kemudian penguatan ketahanan sosial-budaya masyarakat serta peningkatan kapasitas lembaga pendidikan dan riset. Penambahan kapasitas infrastruktur dasar seiring bertambahnya populasi. Terakhir peningkatan kapasitas dan diversifikasi klastes.",
      image: "/src/assets/content/timeline-3.jpeg",
    },
  ];
  
  
  const [visibleId, setVisibleId] = React.useState(2);

  

  return (
    <section className="py-1 font-Gotham flex flex-col justify-center items-center max-w-screen max-h-max h-max">
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
            className={`flex items-start w-full max-w-5xl space-x-7 my-6  space-y-2 relative transition-all duration-150 `}
          >
            {/* Gambar di kiri */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="min-w-72 min-h-44 max-h-44 max-w-72 object-fill rounded-md border-2 border-gray-300"
              />
            </div>

            {/* Titik dan garis timeline */}
            <div className="flex flex-col items-center mx-6 relative">
              {/* Titik timeline */}
              <div className="w-4 h-4 bg-primary rounded-full border-2 border-white z-10"></div>

              {/* Garis vertikal */}
              
                <div className="w-1 bg-slate-300 -mt-8 h-60 absolute opacity-50"></div>
              
            </div>

            {/* Deskripsi di kanan */}
            <div className="flex flex-col ">
              <h2 className="text-xl font-normal text-primary">{item.date}</h2>
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
  {visibleId < timelineData.length && (
          <div className="overlay transition-all duration-500 flex absolute inset-x-0 justify-center items-end h-64 bottom-0 bg-gradient-to-t from-white to-slate-50/45 z-11 w-screen">
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
