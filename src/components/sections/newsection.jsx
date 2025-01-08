import React from "react";
import news1 from "/src/assets/content/regulationnews.png"; // Ganti path sesuai dengan lokasi gambar Anda


const NewSection = () => {
  return (
    <section className="flex flex-col justify-center font-Gotham items-center min-h-screen bg-gray-50" id="berita">
  <div className="flex flex-col mt-10 mb-10 mx-10">
    <div className="mb-8 flex flex-col  ">
      <div className="flex">
        <h1 className="text-3xl font-bold text-black mb-4">
          Penggerak Ekonomi Indonesia di Masa Depan
        </h1>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col max-w-3xl">
          <p className="text-gray-700 mb-6">
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
    <div className="w-full max-w-6xl">
      <img
        src={news1}
        alt="Penggerak Ekonomi Indonesia"
        className="rounded-lg shadow-md w-full object-cover"
      />
      
    </div>
  </div>
</section>
  );
};

export default NewSection;
