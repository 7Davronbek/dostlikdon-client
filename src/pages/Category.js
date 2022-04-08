import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import NavbarNav from "../components/NavbarNav";
import Carousel from "../components/Carousel";
import Props from "../components/Props";
import Reference from "../components/Reference";
import Media from "../components/Media";
import Prop from "../components/prop";
import DataGov from "../components/DataGov";
import Footer from "../components/Footer";
import {getNewsByCategory} from "../redux/actions/newsAction";
import {connect} from "react-redux";

const Category = (props) => {

    useEffect(() => {
        props.getNewsByCategory(props.match.params.url);
    }, []);

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
            <Props news={props.newsByCategory}/>



            <div className="bg-white">
                <DataGov/>
            </div>
            <Footer/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        newsByCategory: state.news.newsByCategory,
    }
};

export default connect(mapStateToProps, {getNewsByCategory})(Category);