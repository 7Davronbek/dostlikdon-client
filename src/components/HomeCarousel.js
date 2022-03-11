import React, {Component} from 'react';
import '../main.css';
import Slider from "react-slick";

class HomeCarousel extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
            // arrows: false
        };

        return (
            <div>
                <section id="carousel-part">
                    <Slider {...settings}>

                        <div className="carousel-1 w-100">
                            <img src="../icons/uzdon-brend.png" className="uzdon-brend" alt=""/>
                            <h2 className="mb-2">O`ZBEKISTON RESPUBLIKASI</h2>
                            <h2 className="mb-2">"O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI</h2>
                            <h2 className="mb-130">"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI</h2>
                        </div>
                        <div className="carousel-1 w-100">
                            <img src="../icons/uzdon-brend.png" className="uzdon-brend" alt=""/>
                            <h2 className="mb-2">O`ZBEKISTON RESPUBLIKASI</h2>
                            <h2 className="mb-2">"O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI</h2>
                            <h2 className="mb-130">"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI</h2>
                        </div>
                        <div className="carousel-1 w-100">
                            <img src="../icons/uzdon-brend.png" className="uzdon-brend" alt=""/>
                            <h2 className="mb-2">O`ZBEKISTON RESPUBLIKASI</h2>
                            <h2 className="mb-2">"O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI</h2>
                            <h2 className="mb-130">"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI</h2>
                        </div>

                    </Slider>
                </section>
            </div>
        );
    }
}

export default HomeCarousel;