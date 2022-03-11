import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {TOKEN_NAME} from "../tools/constants";
import {Modal, ModalBody, ModalFooter} from "reactstrap";

class AdminLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        }
    }

    render() {

        const changeModal = () =>{
            this.setState({modalOpen: !this.state.modalOpen});
        }
        return (
            <div className='admin-layout'>
                <div className="admin-navbar"></div>

                <div className="admin-content d-flex">
                    <div className="admin-content-left">

                        <div className="d-flex align-items-center">
                            <div className='user-image'>
                                <span className='icon icon-user'></span>
                            </div>
                            <div>
                                <h5 className='mb-0'>Nizom Muxammatov</h5>
                                <p className='mb-0'>Administrator</p>
                            </div>
                        </div>

                        <ul className='nav flex-column mt-4'>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin/news">Yangiliklar</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin/menus">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Menyular</Link></li>
                            <li className='nav-item mt-4'><span className='nav-link text-white' onClick={changeModal}>Chiqish</span></li>
                        </ul>

                        <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                            <ModalBody>
                                <h5>Rostdan ham chiqmoqchimisiz? Buncha tez bizni tark etyapsiz?</h5>
                            </ModalBody>
                            <ModalFooter>
                                <Link  type='button' className='btn btn-danger' onClick={() => localStorage.removeItem(TOKEN_NAME)} to='/'>Ha</Link>
                                <button type='button' className='btn btn-success' onClick={changeModal}>Yo'q</button>
                            </ModalFooter>
                        </Modal>

                    </div>
                    <div className="admin-content-right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;