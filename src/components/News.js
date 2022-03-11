import React, {Component} from 'react';
import '../main.css';
import Slider from "react-slick";
import NewsCard from "./NewsCard";
import {
    CARD_1_DESCRIPTION,
    CARD_1_SRC,
    CARD_1_TITLE,
    CARD_2_DESCRIPTION,
    CARD_2_SRC,
    CARD_2_TITLE, CARD_3_DESCRIPTION, CARD_3_SRC, CARD_3_TITLE
} from "../tools/constants";
import {getText} from "../locales";

class News extends Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            // arrows: false

        };

        return (
            <div>
                <section id="news-part">
                    <div className="container">

                        <div className="row pb-5">
                            <h3 className="news w-100">{getText("news")}</h3>
                            <Slider {...settings}>

                                <div className='mx-15'>
                                    <NewsCard title={CARD_1_TITLE} description={CARD_1_DESCRIPTION} src={CARD_1_SRC}/>
                                </div>
                                <div className='mx-15'>
                                    <NewsCard title={CARD_2_TITLE} description={CARD_2_DESCRIPTION} src={CARD_2_SRC}/>
                                </div>
                                <div className='mx-15'>
                                    <NewsCard title={CARD_3_TITLE} description={CARD_3_DESCRIPTION} src={CARD_3_SRC}/>
                                </div>
                                <div className='mx-15'>
                                    <NewsCard title={CARD_2_TITLE} description={CARD_2_DESCRIPTION} src={CARD_2_SRC}/>
                                </div>




                            </Slider>
                        </div>

                    </div>


                </section>


            </div>
        );
    }
}

export default News;