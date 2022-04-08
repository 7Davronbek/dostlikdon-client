import React from 'react';
import {LANGUAGE} from "../tools/constants";
import {getLanguage, getText} from "../locales";

const Navbar = () => {
    const changeLanguage = (e)=> {
        localStorage.setItem(LANGUAGE, e.target.value);
        document.location.reload(true);
    }
    return (
        <div className="col-12">
            <div className="navbar text-success align-items-center">
                <h3>Dustlikdon.uz</h3>
                <div className="input-group-group my-3 input d-flex">
                    <div className="input-group-prepend">
                        <div className="d-flex h-100 align-items-center"><img src="/image/Frame.png" className="w-100" alt="Error"/></div>
                    </div>
                    <input type="text" className="" placeholder={getText("search")}/>
                </div>
                <select onChange={changeLanguage}>
                    <option value="ru" selected={getLanguage() === "ru"}>RU</option>
                    <option value="en" selected={getLanguage() === "en"}>EN</option>
                    <option value="uz" selected={getLanguage() === "uz"}>UZ</option>
                </select>
                <button type="button" className="btn btn-outline-success rounded">+998990720349</button>
            </div>
        </div>
    );
};

export default Navbar;