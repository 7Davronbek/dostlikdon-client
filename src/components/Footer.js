import React from 'react';
import {getText} from "../locales";

const Footer = () => {
    return (
        <div className="dark mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-3 my-5">
                        <h3>Dustlikdon.uz</h3>
                            <a href="#">Jizzax viloyati dustlik tumani</a> <br/>
                            <a href="#">Sanoatchilar MFY sanoat kuchasi 49</a>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2 my-5">
                        <h3>{getText("main")}</h3>
                              <p><a href="#">Jamiyat haqida</a></p>
                              <p><a href="#">Struktura</a></p>
                              <p><a href="#">Yangiliklar</a></p>
                    </div>
                    <div className="col-1 my-5"></div>
                    <div className="col-2 my-5">
                        <h3>Xizmatlar</h3>
                        <p><a href="#">Elektron murojatlar</a></p>
                        <p><a href="#">Intraktiv xizmatlar</a></p>
                        <p><a href="#">Saytdan izlash</a></p>
                    </div>
                    <div className="col-1 my-5"></div>
                    <div className="col-2 my-5">
                        <h3>Bog'lanish</h3>
                        <div className="d-flex">
                            <img src="/image/tel.svg" alt="Error" className="mr-2 h-50 mt-1"/>
                            <p><a href="#">998 71 335 41 16</a></p>
                        </div>
                        <div className="d-flex">
                            <img src="/image/message.svg" className="h-50 mr-2" alt="Error"/>
                                <p><a href="#">info@dustlikdon.uz</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="container">*/}
            {/*    <div className="row text-white">*/}
            {/*        <div className="col-3 my-5">*/}
            {/*            <h3>Dustlikdon.uz</h3>*/}
            {/*            <p><a href="#">Jizzax viloyati dustlik tumani</a></p>*/}
            {/*            <p><a href="#">Sanoatchilar MFY sanoat kuchasi 49</a></p>*/}
            {/*        </div>*/}
            {/*        <div className="col-1 my-5"></div>*/}
            {/*        <div className="col-2 my-5">*/}
            {/*            <h3>Asosiy</h3>*/}
            {/*            <p><a href="#">Jamiyat haqida</a></p>*/}
            {/*            <p><a href="#">Struktura</a></p>*/}
            {/*            <p><a href="#">Yangiliklar</a></p>*/}
            {/*        </div>*/}
            {/*        <div className="col-1 my-5"></div>*/}
            {/*        <div className="col-2 my-5">*/}
            {/*            <h3>Xizmatlar</h3>*/}
            {/*            <p><a href="#">Elektron murojatlar</a></p>*/}
            {/*            <p><a href="#">Intraktiv xizmatlar</a></p>*/}
            {/*            <p><a href="#">Saytdan izlash</a></p>*/}
            {/*        </div>*/}
            {/*        <div className="col-1 my-5"></div>*/}
            {/*        <div className="col-2 my-5">*/}
            {/*            <h3>Bog'lanish</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <img src="/image/tel.svg" alt="Error" className="mr-2 h-50 mt-1">*/}
            {/*                <p><a href="#">998 71 335 41 16</a></p>*/}
            {/*            </div>*/}
            {/*            <div className="d-flex">*/}
            {/*                <img src="/image/message.svg" className="h-50 mr-2" alt="Error">*/}
            {/*                    <p><a href="#">info@dustlikdon.uz</a></p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Footer;