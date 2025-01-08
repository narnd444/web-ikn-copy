import React from "react";
import Logo2 from "/src/assets/logo/logo-notext.png";
import Swiper from 'swiper';
import 'swiper/css';

const IdentitySection =()=>{
    return(
        <section className="identity-section font-Gotham relative w-screen h-screen bg-center ">
            <div className="mt-8 ml-5 absolute flex items-center font-Gotham text-primary">
                <img src={Logo2} alt="" />
                <h1 className="lg:text-2xl max-w-52 text-sm ml-4 font-bold">Delapan Prinsip Ibu Kota Negara</h1>
            </div>
            <div className="container flex justify-center min-h-screen">

                <div className="first hover:bg-hover-background min-w-72 max-w-72">
                    <div className="content-wrapper flex flex-col px-8 justify-center min-h-screen font-Gotham hover:bg-secondary hover:bg-opacity-80">
                    <h1>01</h1>
                    <h1 className="font-bold text-primary mb-3 text-xl">Mendesain Sesuai Kondisi Alam</h1>
                    <hr className="border-2 mb-4 border-primary" />
                    <p className="text-sm font-light ">Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div>
                <div className="second hover:bg-hover-background min-w-72 max-w-72">
                    <div className="content flex flex-col px-8 justify-center min-h-screen font-Gotham hover:bg-secondary hover:bg-opacity-80">
                    <h1>02</h1>
                    <h1 className="font-bold text-primary mb-3 text-xl">Bhineka Tunggal Ika</h1>
                    <hr className="border-2 mb-4 border-primary" />
                    <p className="text-sm font-light ">Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div>
                <div className="third bg-hover-background min-w-72 max-w-72">
                    <div className="content-wraper flex flex-col px-8 justify-center text-white font-Gotham bg-secondary bg-opacity-85 bg-secondar min-h-screen">
                    <h1>03</h1>
                    <h1 className="font-bold mb-3 text-xl">Terhubung, Aktif Dan Mudah Diakses</h1>
                    <hr className="border-2 mb-4 " />
                    <p className="text-sm font-light ">Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div>
                <div className="fourth hover:bg-hover-background min-w-72 max-w-72">
                    <div className="content flex flex-col px-8 justify-center hover:bg-secondary hover:bg-opacity-80 font-Gotham min-h-screen">
                    <h1>04</h1>
                    <h1 className="font-bold text-primary mb-3 text-xl">Rendah Emisi Karbon</h1>
                    <hr className="border-2 mb-4 border-primary" />
                    <p className="text-sm font-light ">Di Kwasan Pemerintahan IKN, lebih dari 75% kawasan dikelilingi oleh area hijau yang luas. Dengan akses mudah dalam waktu 10 menit, seluruh penduduk dapat menikmati ruang terbuka hijau rekreasi.</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            
        </section>
    )
}

export default IdentitySection;