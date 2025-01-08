import React from "react";

const Herosection =()=>{
    return(
        <section className="hero-section font-Gotham relative w-screen h-screen  bg-hero-background bg-center " id="beranda">


  <div className="absolute inset-0 flex flex-col justify-between items-center text-center text-white p-8">
  
    <div className="font-Gotham mt-20">
      <h1 className="text-4xl lg:text-4xl font-medium mb-2">Menuju Visi Indonesia 2045</h1>
      <h2 className="text-2xl lg:text-5xl font-bold">Kota Dunia Untuk Semua</h2>
    </div>

    <div className="mb-10 flex space-x-4">
      <button className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-lg">
        Jelajahi Selengkapnya
      </button>
      <button className="bg-gray-900/50 hover:bg-gray-900 text-white px-8 py-2 rounded-lg shadow-lg">
        Tentang IKN
      </button>
    </div>

  </div>


</section>


    )
}

export default Herosection