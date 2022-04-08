import React, {useEffect} from 'react';
import {getMainMenus} from "../redux/actions/menusAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const NavbarNav = (props) => {

    useEffect(() => {
        props.getMainMenus();
    }, []);

    return (
        <div className="col-12">
            <ul className="nav my-3 align-items-center">
                <li className="nav-item"><a className="nav-link text-dark" href="#"></a>
                    <div className="logo">
                        <img src="/image/Vector.svg" alt=""/>
                    </div></li>

                {props.mainMenus.map((item, index) => {
                    return(
                        <li className="nav-item">
                            <a className="nav-link ml-3 mt-2 text-dark position-relative link" href="#">
                                {item.nameUz}
                                {item.submenus.length > 0 ?
                                    <div className="submenus">
                                        <ul className="nav flex-column">

                                            {item.submenus.map((item2, index2) => {
                                                return(
                                                    <li className="nav-item"><Link to={'/category/' + item2.url} className="nav-link">
                                                        {item2.nameUz}
                                                    </Link></li>
                                                )
                                            })}
                                    </ul>
                                    </div>
                                    : ""
                                }

                            </a>
                        </li>
                    )
                })}




            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        mainMenus: state.menus.mainMenus
    }
};

export default connect(mapStateToProps, {getMainMenus})(NavbarNav) ;