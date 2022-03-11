import React, {Component} from 'react';
import {FaPhoneAlt, MdEmail} from "react-icons/all";

class FooterPart extends Component {
    render() {
        return (
            <div>
                <section id="footer_part" className="pb-4">
                    <div className="container">
                        <div className="row mb-5 pb-3">
                            <div className="col-4 mt-5">
                                <h4 className="dustlikdon_uz mb-4">Duslikdon.uz</h4>
                                <p className="footer_text mb-0">Jizzax viloyati Do‘stlik tumani</p>
                                <p className="footer_text mt-0">Sanoatchilar MFY Sanoat ko‘chasi 49</p>
                            </div>
                            <div className="col-2 mt-5">
                                <h5 className="services mb-4">Asosiy</h5>
                                <a href="#" className="text-decoration-none text-white footer_text mb-3 d-block">Jamiyat haqida</a>
                                <a href="#" className="text-decoration-none text-white footer_text mb-3 d-block">Struktura</a>
                                <a href="#" className="text-decoration-none text-white footer_text mb-3 d-block">Yangiliklar</a>
                            </div>
                            <div className="col-3 mt-5">
                                <h5 className="services mb-4">Xizmatlar</h5>
                                <a href="#" className="text-decoration-none text-white footer_text mb-3 d-block">Elektron murojaatlar</a>
                                <a href="#" className="text-decoration-none text-white footer_text mb-3 d-block">Interaktiv xizmatlar</a>
                                <a href="#" className="text-decoration-none text-white footer_text mb-3 d-block">Saytdan izlash</a>
                            </div>
                            <div className="col-3 mt-5">
                                <h5 className="services mb-4">Bog’lanish</h5>
                                <p className="footer_text d-flex align-items-center"><FaPhoneAlt color="white" className="mr-2"/> 998 71 335 41 16</p>
                                <p className="footer_text d-flex align-items-center"><MdEmail color="white" className="mr-2"/> info@dustlikdon.uz</p>

                            </div>

                        </div>
                    </div>
                    <div className="border-bottom border-color mb-5 w-100"></div>

                </section>

            </div>
        );
    }
}

export default FooterPart;