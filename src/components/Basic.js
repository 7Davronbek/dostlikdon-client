import React from 'react';
import {API_PATH} from "../tools/constants";

const Basic = (props) => {
    return (
        <div className="grey">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="oq bg-white">

                            <div className="d-flex mb-5 align-items-center">
                                <a href="#" className="text-decoration-none mr-4">
                                    {props.news.menuNameUz}
                                </a>
                                <img className="mr-2 ml-2" src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 mr-4">{props.news.createdAt?.slice(-8,-3)} / {props.news.createdAt?.slice(0,11)}</p>
                                    <img className="ml-2 mr-2" src="/image/koz.svg" alt="Error"/>
                                        <a href="#" className="text-decoration-none mr-4 text-dark">{props.news.viewCount}</a>
                                        {/*<img src="/image/sms.svg" className="ml-2 mr-2" alt="Error"/>*/}
                                        {/*    <p className="mb-0">100</p>*/}
                            </div>
                            <h4>{props.news.titleUz}</h4>
                            <img src={API_PATH + "file/get/"+ props.news.photo} alt=""/>
                            <p className="text">{props.news.descriptionUz}
                            </p>

                            <div className="border my-5"></div>

                            <div className="d-flex mb-4 justify-content-between">
                                <h3>Mavzuga izohlar</h3>
                                <h3>2 ta fikr</h3>
                            </div>
                            <div className="d-flex mb-4 input1 align-items-center">
                                <img src="/image/use.svg" alt="Error"/>
                                    <input type="text" className="" placeholder="Izoh qoldirishingiz mumkin..."/>
                            </div>
                            <div className="d-flex mb-5 main align-items-center">
                                <img src="/image/nigina.svg" alt="Error"/>
                                    <div className="main2">
                                        <h4 className="mb-0">Nigina Karimova</h4>
                                        <p className="my-2">Tushunmovchilik bo’yicha qayerga murojaat qilsam
                                            bo’ladi?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <img src="/image/yurak.svg" alt="Error"/>
                                                <p className="mb-0">Javob qaytarish</p>
                                                <p className="mb-0">2 soat avval</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="d-flex align-items-center main3">
                                <img src="/image/sahar.svg" alt="Error"/>
                                    <div className="main4">
                                        <h4 className="mb-0">Nigina Karimova</h4>
                                        <p className="my-2">Tushunmovchilik bo’yicha qayerga murojaat qilsam
                                            bo’ladi?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <img src="/image/qizilyurak.svg" alt="Error"/>
                                                <p className="mb-0">Javob qaytarish</p>
                                                <p className="mb-0">2 soat avval</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="top oq bg-white">
                            <h3>MEDIA</h3>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">Foto galeriya</h5>
                            </div>
                            <h4>"DO`STLIKDONMAXSULOTLARI"
                                AJ boshqaruv raisi...</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">Foto galeriya</h5>
                            </div>
                            <h4>Xisobot: Buxgalteriya balansi 2-
                                kvartal</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">Video galeriya</h5>
                            </div>
                            <h4>Aksiyadorlik kompaniya tizim
                                korxonalari</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">Foto galeriya</h5>
                            </div>
                            <h4>Xisobot: Buxgalteriya balansi 2-
                                kvartal</h4>
                        </div>
                        <div className="bottom text-center">
                            <h6>Shikoyatlar mavjudmi?
                                Onlayn tarzda yuboring</h6>
                            <img className="my-4" src="/image/treangle.svg" alt="Error"/>
                                <h6>
                                    Davlat interaktiv
                                    xizmatlari yagona portali
                                </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basic;