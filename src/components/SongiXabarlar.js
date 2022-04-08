import React from 'react';
import Cards from "./Cards";

const SongiXabarlar = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="d-flex w-100 mb-4 top justify-content-between">
                    <div><h3>So'ngi yangiliklar</h3></div>
                    <div className="d-flex">
                        <div className="prev"><img src="/image/prev.svg" alt="Error"/></div>
                        <div className="next ml-3"><img src="/image/next.svg" alt="Error"/></div>
                    </div>
                </div>
                <div className="col-4 card1">
                    <Cards rasm="/image/rasm1.svg" head="E'LON !!!" lorem="'DO`STLIKDONMAXSULOTLARI' AJ ning
                    aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soat 9:00 dan..."/>
                </div>
                <div className="col-4 card1">
                    <Cards rasm="/image/rasm9.svg" head="Xisobot: Buxgalteriya balansi
                    2 kvartal" lorem="'DO`STLIKDONMAXSULOTLARI' AJ ning
                    aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soat 9:00 dan..."/>
                </div>
                <div className="col-4 card1">
                    <Cards rasm="/image/rasm3.svg" head="'DO`STLIKDONMAXSULOTLARI' AJ
boshqaruv raisi..." lorem="'DO`STLIKDONMAXSULOTLARI' AJ ning
                    aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soat 9:00 dan..."/>
                </div>
            </div>
        </div>
    );
};

export default SongiXabarlar;