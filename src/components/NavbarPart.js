import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMenus} from "../redux/actions/adminMenuAction";
import {Link} from 'react-router-dom'
import {getLang} from "../locales";

class NavbarPart extends Component {

    componentDidMount() {
        this.props.getMenus();
    }

    render() {
        return (
            <div>
                <section id="navbar-part">
                    <div className="container py-3">
                        <div className="row">
                            <ul className="nav w-100">
                                <li className="nav-item mr-4">
                                    <div className="home-logo d-flex align-items-center justify-content-center">
                                        <img src="/icons/home.png" alt=""/>
                                    </div>

                                </li>

                                {this.props.menus.map((item) => (
                                    <li className="nav-item mr-4">
                                        <a className="nav-link" href="#">{getLang() === "ru" ? item.nameRu : getLang() === "en" ? item.nameEn : item.nameUz}</a>
                                        {item.submenus.length > 0 ?
                                            <div className="sub-items">
                                                <table className="table cursor-pointer">
                                                    <tbody>
                                                    {item.submenus.map(item2 => (
                                                        <tr>
                                                            <td><Link className="text-decoration-none text-white" to={"/category/" + item2.url}>{getLang() === "ru" ? item2.nameRu : getLang() === "en" ? item2.nameEn : item2.nameUz}</Link></td>
                                                        </tr>
                                                    ))}


                                                    </tbody>

                                                </table>
                                            </div> : ""
                                        }

                                    </li>
                                ))}






                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menu.menus
    }
}

export default connect(mapStateToProps, {getMenus})(NavbarPart);