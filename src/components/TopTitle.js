import React, {Component} from 'react';
import {FaPhoneAlt, FiSearch} from "react-icons/all";

import {getText} from "../locales";
import {SITE_LANG} from "../tools/constants";

class TopTitle extends Component {
    render() {
        const changeLang = (lang) => {
            localStorage.setItem(SITE_LANG, lang);
            window.location.reload();
        }

        return (
            <div>
                <section id="top-title">
                    <div className="container py-4">
                        <div className="row">
                            <ul className="nav w-100">
                                <li className="nav-item mr-5">
                                    <span className="dustlikdon-logo">Dustlikdon.uz</span>
                                </li>
                                <li className="nav-item">
                                    <div className="input-group bg-white border-0 shadow-search">
                                        <div className="input-group-prepend cursor-pointer">
                                            <span className="input-group-text border-0 bg-white"><FiSearch
                                                color="black"/></span>
                                        </div>
                                        <input type="text" className="form-control shadow-none text-dark border-0 w-400"
                                               placeholder={getText("search")}/>
                                    </div>
                                </li>
                                <li className="nav-item ml-auto mr-5">
                                    <a href="#" onClick={() => changeLang("ru")} className="nav-link text-decoration-none">RU</a>
                                    <a href="#" onClick={() => changeLang("uz")} className="nav-link text-decoration-none">UZ</a>
                                    <a href="#" onClick={() => changeLang("en")} className="nav-link text-decoration-none">EN</a>
                                </li>
                                <li className="nav-item">
                                    <div className="phone-number py-2 px-4 d-flex align-items-center cursor-pointer">
                                        <FaPhoneAlt className="mr-2 phone-color"/>
                                        <a href="tel:+998723354116">99872 335-41-16</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TopTitle;