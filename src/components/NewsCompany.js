import React, {Component} from 'react';
import NewsCard from "./NewsCard";
import {
    COMPANY_CARD_1_DESCRIPTION,
    COMPANY_CARD_1_SRC,
    COMPANY_CARD_1_TITLE,
    COMPANY_CARD_2_DESCRIPTION,
    COMPANY_CARD_2_SRC,
    COMPANY_CARD_2_TITLE, COMPANY_CARD_3_DESCRIPTION, COMPANY_CARD_3_SRC, COMPANY_CARD_3_TITLE
} from "../tools/constants";
import Slider from "react-slick";

class NewsCompany extends Component {
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
                <section id="news-company">
                    <div className="container">
                        <div className="row pb-5">
                            <h3 className="news-company w-100">Korxona yangiliklari</h3>
                            <Slider {...settings}>

                                <>
                                    <NewsCard title={COMPANY_CARD_1_TITLE} description={COMPANY_CARD_1_DESCRIPTION} src={COMPANY_CARD_1_SRC}/>
                                </>
                                <>
                                    <NewsCard title={COMPANY_CARD_2_TITLE} description={COMPANY_CARD_2_DESCRIPTION} src={COMPANY_CARD_2_SRC}/>
                                </>
                                <>
                                    <NewsCard title={COMPANY_CARD_3_TITLE} description={COMPANY_CARD_3_DESCRIPTION} src={COMPANY_CARD_3_SRC}/>
                                </>
                                <>
                                    <NewsCard title={COMPANY_CARD_2_TITLE} description={COMPANY_CARD_2_DESCRIPTION} src={COMPANY_CARD_2_SRC}/>
                                </>




                            </Slider>

                        </div>
                    </div>

                </section>

            </div>
        );
    }
}

export default NewsCompany;