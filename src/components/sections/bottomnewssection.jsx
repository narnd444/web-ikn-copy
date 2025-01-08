import React from "react";
import NewsImage from "/src/assets/content/news-3.png"
import { useState } from "react";

const NewsbottomSection =()=>{

    const [currentIndex, setCurrentIndex] = useState(0);
    
      const content = [
        {
          id: 1,
          judul: "Pelantikan Kepala dan Wakil Kepala IKN",
          gambar: "/src/assets/content/news-3.png",
          topContent: "Kawasan IKN akan dibangun dengan prosentase tujuh puluh lima kawasan hijau dikawan pemerintahan IKN. Hal ini menjadikan seratus persen penduduk dapat mengakses ruang terbuka hijau rekreasi dalam waktu sepuluh menit dan setiap bangunan bertingkat institusional, komersial dan hunian dikonsepkan konstruksi ramah lingkungan.",
          BottomContent: "Temukan siapa yang berada di balik kemajuan dan inovasi Ibu Kota Nusantara, mulai dari para pemimpin hingga eksekutif utama.",
        },
        {
          id: 2,
          judul: "Pelantikan Kepala dan Wakil Kepala IKN",
          gambar: "/src/assets/content/news.png",
          topContent: "Kawasan IKN akan dibangun dengan prosentase tujuh puluh lima kawasan hijau dikawan pemerintahan IKN. Hal ini menjadikan seratus persen penduduk dapat mengakses ruang terbuka hijau rekreasi dalam waktu sepuluh menit dan setiap bangunan bertingkat institusional, komersial dan hunian dikonsepkan konstruksi ramah lingkungan.",
          BottomContent: "Temukan siapa yang berada di balik kemajuan dan inovasi Ibu Kota Nusantara, mulai dari para pemimpin hingga eksekutif utama.",
        },
        {
          id: 3,
          judul: "Pelantikan Kepala dan Wakil Kepala IKN",
          gambar: "/src/assets/content/news-2.png",
          topContent: "Kawasan IKN akan dibangun dengan prosentase tujuh puluh lima kawasan hijau dikawan pemerintahan IKN. Hal ini menjadikan seratus persen penduduk dapat mengakses ruang terbuka hijau rekreasi dalam waktu sepuluh menit dan setiap bangunan bertingkat institusional, komersial dan hunian dikonsepkan konstruksi ramah lingkungan.",
          BottomContent: "Temukan siapa yang berada di balik kemajuan dan inovasi Ibu Kota Nusantara, mulai dari para pemimpin hingga eksekutif utama.",
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

    return(
        <section className="font-Gotham flex min-h-screen max-h-screen">
            <div className="flex flex-col items-baseline justify-center">
                <div className="content flex space-x-16 mx-20 ">
                    <div className="flex h-6/6 w-3/6">
                    <img src={content[currentIndex].gambar} alt="" className="object-cover rounded-md"/>
                    </div>
                    <div className="flex flex-col w-3/6">
                        <div className="flex flex-col space-y-6 mb-4 ">
                            <h1 className="font-medium text-3xl">{content[currentIndex].judul}</h1>
                            <p className="font-light">{content[currentIndex].topContent}</p>
                        </div>
                        <hr />
                        <div className="flex items-start flex-col space-y-6 mt-4">
                            <p className="font-light">{content[currentIndex].BottomContent}</p>
                            <button className="bg-primary text-white px-6 py-2 rounded-lg"> 
                                Lihat Struktur Organisasi
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pagination flex mt-3 items-center space-x-2">
                <button
          onClick={handlePrev}
          className="text-xl p-2 bg-gray-200 rounded-full"
        >
          &#8592;
        </button>
        {content.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handlePaginationClick(index)}
              className={`pagination-bar w-4 h-1 cursor-pointer ${
                currentIndex === index ? "bg-primary" : "bg-gray-400"
              }`}
            ></div>
          ))}
        

              <button
          onClick={handleNext}
          className="text-xl p-2 bg-gray-200 rounded-full"
          >
          &#8594;
        </button>
        </div>
            </div>
        </section>
    )
}

export default NewsbottomSection