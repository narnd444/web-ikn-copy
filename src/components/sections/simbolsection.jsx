import React from "react";

const Simbolsection =()=>{
    return(
        <section className="hero-section font-Gotham relative w-screen min-h-screen  bg-identity-background bg-center ">


<div className="absolute inset-0 flex flex-col justify-between items-center text-center text-white pb-8">
  
  <div className="flex justify-center flex-col items-center font-Gotham font-medium mt-1">
    <h1 className="text-sm lg:text-xl  text-accent">Simbol Identitas Nasional</h1>
    <h1 className="text-md lg:text-3xl  text-primary">Kota Berkelanjutan di Dunia</h1>
  </div>

  <div className="mb-4 flex items-center space-x-4">
        <div className="text-white flex items-start mx-10 space-x-10">
             <div className="max-w-72">
                <h1 className="text-2xl font-medium mb-1">256.142 ha</h1>
                <p className="text-sm">Kawasan Strategis Nasional (KSN) IKN</p>
            </div>
             <div className="max-w-60">
                <h1 className="text-2xl font-medium mb-1">199.962 ha</h1>
                <p className="text-sm">Kawasan Pengembangan IKN *bagian dari KSN IKN</p>
            </div>
             <div className="max-w-40">
                <h1 className="text-2xl font-medium mb-1">56.180 ha</h1>
                <p className="text-sm">Kawasan IKN *bagian dari KSN IKN</p>
            </div>
            
    </div>
   
    <div className="text-white border-gray-300">
      <button className="border-2 p-2 rounded-lg px-8 text-xs">IKN Dalam Angka</button>
    </div>
  </div>

</div>

</section>


    );
};

export default Simbolsection;