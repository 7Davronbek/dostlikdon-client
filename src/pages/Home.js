import React from 'react';
import Navbar from "../components/Navbar";
import NavbarNav from "../components/NavbarNav";
import Carousel from "../components/Carousel";
import Props from "../components/Props";
import Reference from "../components/Reference";
import Media from "../components/Media";
import Prop from "../components/prop";
import DataGov from "../components/DataGov";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="home">
            <nav className="bg-light">
                <div className="container">
                    <div className="row">

                            <Navbar/>

                    </div>
                </div>
            </nav>
            <div className="bg-white">
                <div className="container">
                    <div className="row">
                        <NavbarNav/>
                    </div>
                </div>
            </div>
            <Carousel/>
            <Props news={[]}/>
            <Reference/>
            <Media/>
            <Prop/>
            <div className="bg-white">
                <DataGov/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;