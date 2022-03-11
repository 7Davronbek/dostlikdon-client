import React, {Component} from 'react';
import AdminLayout from "./AdminLayout";
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import {updateState} from "../redux/actions/adminNewsAction";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {addMenu, deleteMenu, getMenus, getAllMenus} from "../redux/actions/adminMenuAction";

class AdminMenus extends Component {

    componentDidMount() {
        this.props.getAllMenus();
    }

    render() {
        const changeModal = () => {
            this.props.updateState({modalOpen: !this.props.modalOpen})
        }
        const changeDeleteModal = () => {
            this.props.updateState({deleteModalOpen: !this.props.deleteModalOpen})
        }
        const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        const changeUrl = (e) => {
            this.props.updateState({generatedUrl: generateUrl(e.target.value)});
        }

        const saveMenu = (event, values) => {

            this.props.addMenu(values);
        }

        return (
            <AdminLayout>
                <div className='admin-news'>
                    <div className="d-flex justify-content-between">
                        <div><h5>Menus</h5></div>
                        <div>
                            <Button type='button' color='success' onClick={changeModal}>Qo'shish</Button>
                        </div>
                    </div>

                    <table className='table table-striped table-hover mt-4'>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Name (uz)</th>
                                <th>Name (ru)</th>
                                <th>Name (en)</th>
                                <th>Parent menu</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.menus.map((item, index) => (
                            <tr>
                               <td>{(index + 1)}</td>
                               <td>{item.nameUz}</td>
                               <td>{item.nameRu}</td>
                               <td>{item.nameEn}</td>
                               <td>{item.parentMenuName}</td>
                                <td>
                                    <button type='button' className='btn btn-primary mr-2' onClick={() => {this.props.updateState({selectedMenu: item}); changeModal()}}>E</button>
                                    <button type='button' className='btn btn-danger' onClick={() => {this.props.updateState({selectedIdForDelete: item.id});changeDeleteModal()}}>D</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <Modal isOpen={this.props.modalOpen} toggle={() => {this.props.updateState({selectedMenu: {}});changeModal()}}>
                        <AvForm onValidSubmit={saveMenu} model={this.props.selectedMenu}>
                            <ModalBody>
                                {this.props.selectedMenu.id ?
                                    <AvField name="id" value={this.props.selectedMenu.id} className="d-none"/>
                                    : ""
                                }
                                <AvField
                                    name="nameUz"
                                    type="text"
                                    onChange={changeUrl}
                                    label="Name (uz)"
                                    required
                                />
                                <AvField
                                    name="nameRu"
                                    type="text"
                                    label="Name (ru)"
                                    required
                                />
                                <AvField
                                    name="nameEn"
                                    type="text"
                                    label="Name (en)"
                                    required
                                />
                                <AvField
                                    name="submenu"
                                    value={this.props.isSubMenu}
                                    onChange={() => this.props.updateState({isSubMenu: !this.props.isSubMenu})}
                                    type="checkbox"
                                    label="This menu is submenu"
                                />

                                {this.props.isSubMenu ?
                                    <>
                                        <AvField name="parentId" type="select" label="Parent menu">
                                            {this.props.menus.map((item) => (
                                                <option value={item.id}>{item.nameUz}</option>
                                            ))}
                                        </AvField>
                                        <AvField name="url" type="text" value={this.props.generatedUrl} label="Url"/>
                                    </>
                                    : ""
                                }


                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit" color="success">Save</Button>
                                <Button type="button" onClick={() => {this.props.updateState({selectedMenu: {}});changeModal()}}>Close</Button>
                            </ModalFooter>
                        </AvForm>
                    </Modal>
                    <Modal isOpen={this.props.deleteModalOpen} toggle={changeDeleteModal}>
                        <ModalBody>
                            <h5>Rostdan ham o'chirmoqchimisiz?</h5>
                        </ModalBody>
                        <ModalFooter>
                            <button type='button' className='btn btn-danger' onClick={() => {this.props.deleteMenu(this.props.selectedIdForDelete)}}>Ha</button>
                            <button type='button' className='btn btn-secondary' onClick={changeDeleteModal}>Yo'q</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </AdminLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.menu.modalOpen,
        deleteModalOpen: state.menu.deleteModalOpen,
        isSubMenu: state.menu.isSubMenu,
        generatedUrl: state.menu.generatedUrl,
        menus: state.menu.menus,
        selectedIdForDelete: state.menu.selectedIdForDelete,
        selectedMenu: state.menu.selectedMenu
    }
}
export default connect(mapStateToProps, {updateState, addMenu, getMenus, deleteMenu, getAllMenus})(AdminMenus);