import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="text-center carousel">
                <Slider {...settings}>
                    <div>
                        <img className="w-100" src="/image/don.svg" alt="Error"/>
                    </div>
                    <div>
                        <img className="w-100" src="/image/don.svg" alt="Error"/>
                    </div>
                    <div>
                        <img className="w-100" src="/image/don.svg" alt="Error"/>
                    </div>
                    <div>
                        <img className="w-100" src="/image/don.svg" alt="Error"/>
                    </div>
                    <div>
                        <img className="w-100" src="/image/don.svg" alt="Error"/>
                    </div>
                    <div>
                        <img className="w-100" src="/image/don.svg" alt="Error"/>
                    </div>
                </Slider>
                <div className="emblema">
                    <div className="image mb-4">
                        <img src="/image/emblema.png"alt="Error"/>
                    </div>
                    <h3 className="text-white">O`ZBEKISTON RESPUBLIKASI <br/>
                        "O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI <br/>
                        "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI</h3>
                </div>
            </div>
        );
    }
}

export default Carousel;