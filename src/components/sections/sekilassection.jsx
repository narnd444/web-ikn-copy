import React from "react";
import imagenews from "/src/assets/content/sekilasnews.png";
import imagenews2 from "/src/assets/content/sekilas2.png";

const Sekilassection = () => {
  return (
    <>
    <section className="font-Gotham  min-h-screen w-full">
    <div className="flex min-h-screen mt-10 justify-center md:justify-between max-h-screen">
        <div className="flex flex-col basis-full md:basis-2/6 my-10 md:ml-12 max-w-xs">
            <div className="mb-2 md:mb-3">
                <h1 className="font-normal mb-3 text-xl text-slate-950/50">Sekilas IKN</h1>
                <div className="flex md:hidden justify-end my-2 w-full">
                    <img src={imagenews} alt="" />
                </div>
                <h1 className="font-medium text-2xl">Smart Lighting</h1>
            </div>
            <div className="flex flex-col justify-between h-screen ">
                <p className="font-light text-md"> Penggunaan teknologi pencahayaan pintar atau smart lighting untuk
          menciptakan kota yang cerdas dan ramah lingkungan. Menurut sekretaris
          OIKN Achmad Jaka Santos Adiwibowo, smart lighting dapat memberikan
          banyak manfaat seperti penghematan biaya yang signifikan, pengurangan
          emisi karbon, dan polusi cahaya.</p>
        <button className="bg-slate-300/50 p-3 rounded-xl text-md font-normal ">
            Selengkapnya
        </button>
            </div>
        </div>
        <div className="hidden md:flex justify-end basis-5/6 ml-10 w-full">
            <img src={imagenews} alt="" />
        </div>
    </div>
    </section>

    <section className="font-Gotham min-h-screen">
    <div className="flex min-h-screen justify-center md:justify-between max-h-screen">
        <div className="hidden md:flex justify-end basis-5/6 mr-10 w-full">
                <img src={imagenews2} alt="" />
            </div>
        <div className="flex flex-col md:basis-2/6 my-10 md:mr-8 max-w-xs">
            <div className="mb-3">
                <h1 className="font-normal mb-3 text-xl text-slate-950/50">Sekilas IKN</h1>
                    <div className="flex md:hidden w-full">
                    <img src={imagenews2} alt="" />
                    </div>
                <h1 className="font-medium text-2xl">Smart City</h1>
            </div>
            <div className="flex flex-col justify-between h-screen ">
                <p className="font-light text-md"> Penggunaan teknologi pencahayaan pintar atau smart lighting untuk
          menciptakan kota yang cerdas dan ramah lingkungan. Menurut sekretaris
          OIKN Achmad Jaka Santos Adiwibowo, smart lighting dapat memberikan
          banyak manfaat seperti penghematan biaya yang signifikan, pengurangan
          emisi karbon, dan polusi cahaya.</p>
        <button className="bg-slate-300/50 p-3 rounded-xl text-md font-normal ">
            Selengkapnya
        </button>
            </div>
        </div>
        
    </div>
    </section>
    </>
  );
};

export default Sekilassection;
