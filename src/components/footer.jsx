import React from "react";
import Logo from "../assets/logo/logo.png"
import Patern from "../assets/background/patern.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () =>{
    return(
        <footer className="flex flex-col items-center font-Gotham max-h-[300px]">
        <div className="footer-h flex  justify-between w-full items-start md:items-center  bg-custom-old-grey p-5  md:p-16 max-h-[300px] ">
            <div className="left-side flex flex-col justify-center items-start  md:mr-10">
                <img src={Logo} alt="Logo-Footer" className=""/>
                <h1 className="hidden md:flex text-white mt-5 max-w-3xl text-sm font-light ">2022-2024, akan dilakukan pemindahan tahap awal ke Kawasan IKN, pembangunan infrastruktur utama seperti Istana Kepresidenan, Gedung MPR/DPR RI dan perumahan, juga meliputi pemindahan ASN tahap awal, serta pembangunan dan beroperasinya infrastruktur dasar untuk 500.000 penduduk tahap awal.</h1>
            </div>
            <div className="right-side flex flex-col text-white space-y-2 text-sm md:mr-20 transition duration-300">
                <a className="hover:scale-110 transition duration-300">Sekilas IKN</a>
                <a className="hover:scale-110 transition duration-300" href="">Bantuan</a>
                <a className="hover:scale-110 transition duration-300" href="">Kontak Kami</a>
                <a className="hover:scale-110 transition duration-300" href="">Sitemap</a>
            </div>
        </div>
        <div className="footer-b relative flex m-0 bg-slate-200 w-full min-h-16 max-h-16 ">
            <div className="background flex w-full">
                <img src={Patern} alt="" className="w-6/12 h-full object-cover"/>
                <img src={Patern} alt="" className="w-6/12 h-full object-cover" />
            </div>
            <div className="overlay flex absolute inset-0 px-5 md:px-10 items-center justify-between space-x-2 ">
                <div className="text  flex text-xs md:pl-16 space-x-10 md:text-sm text-black">
                    <h1>©2023 Copyright Ibu Kota Negara</h1>
                    <h1>Privacy Policy</h1>
                </div>
                <div className="social flex space-x-2 [&>a]:bg-primary [&>a]:rounded-full [&>a]:p-1 items-center text-sm text-white">
                        <a href=""><FaFacebookF/></a>
                        <a href=""><FaInstagram /></a>
                            <a href=""><FaYoutube/></a>
                            <a href=""><FaXTwitter/></a>
                </div>
            </div>
        </div>
        </footer>
    )
}
export default Footer;