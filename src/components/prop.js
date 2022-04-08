import React from 'react';
import SmallCard from "./SmallCard";

const Prop = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <SmallCard rasm="/image/rasm7.svg" head="'DO`STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..."/>
                </div>
                <div className="col-4 card1">
                    <SmallCard rasm="/image/rasm7.svg" head="'DO`STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..."/>
                    <div className="layer">
                        <img src="/image/photo.svg" alt="Error"/>
                    </div>
                </div>
                <div className="col-4 card2">
                    <SmallCard rasm="/image/rasm8.svg" head="'DO`STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..."/>
                    <div className="layer1">
                        <img src="/image/video.svg" alt="Error"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prop;