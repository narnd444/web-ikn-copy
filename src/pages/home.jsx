import React from "react";
import Herosection from "../components/sections/herosection";
import Header from "../components/header";
import IdentitySection from "../components/sections/identitysection";

import OrganitationSection from "../components/sections/organitation";
import Simbolsection from "../components/sections/simbolsection";
import NewSection from "../components/sections/newsection";
import Sekilassection from "../components/sections/sekilassection";
import Timelinesection from "../components/sections/timelinesection";
import Recentsection from "../components/sections/recentnewsection";
import Footer from "../components/footer";
import NewsbottomSection from "../components/sections/bottomnewssection";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <Header />
        <Herosection />
        <IdentitySection />
        <OrganitationSection />
        <Simbolsection />
        <NewSection />
        <Sekilassection />
        <Timelinesection />
        <Recentsection />
        <NewsbottomSection />
        <Footer />
        
        
        </>
    )
}
export default Home;