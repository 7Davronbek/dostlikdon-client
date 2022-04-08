import React, {useEffect} from 'react';
import AdminLayout from "../components/AdminLayout";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {set_state, saveNews, saveFile, getNews, deleteNews} from "../redux/actions/newsAction";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {getSubMenus} from "../redux/actions/menusAction";
import {API_PATH} from "../tools/constants";

const AdminNews = (props) => {

    useEffect(() => {
        props.getSubMenus();
        props.getNews();
    }, []);

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const changeInput = (e) => {
        const data = new FormData();
        data.append("file", e.target.files[0]);
        props.saveFile(data);
        console.log(e.target.files)
    };

    return (
        <AdminLayout history={props.history}>
            <button type="button" className="btn btn-success d-block ml-auto"
                    onClick={() => props.set_state({open: true})}>Add news
            </button>

            <div className="row">
                {props.news.map((item, index) => {
                    return (
                        <div className="col-4 mt-3">
                            <div className="card h-100">
                                <div className="card-header">
                                    <h5>{item.titleUz}</h5>
                                </div>
                                <div className="card-body">
                                    <img src={API_PATH + "file/get/" + item.photo.id} className="w-100" alt=""/>
                                    <p>{item.descriptionUz}</p>
                                    <p>Menu : <b>{item.menu.nameUz}</b></p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button type="button" className="btn btn-primary" onClick={() => props.set_state({open: true, selectedItem: item, photo: item.photo.id})}>Edit</button>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => props.set_state({deleteModal: true, selectedIndex: item.id})}>Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


            <Modal isOpen={props.open} toggle={() => props.set_state({open: false, selectedItem: {}, photo: ""})}>
                <AvForm onSubmit={props.saveNews} model={props.selectedItem}>
                    <ModalBody>
                        {props.selectedItem.id ?
                            <AvField name="id" className="d-none" type="text"/> : ""
                        }
                        <AvField name="titleUz" type="text" required label="Title (Uz)"
                                 onChange={(e) => props.set_state({url: generateUrl(e.target.value)})}/>
                        <AvField name="titleEn" type="text" required label="Title (En)"/>
                        <AvField name="titleRu" type="text" required label="Title (Ru)"/>

                        <AvField name="descriptionUz" required type="textarea" label="Description (Uz)"/>
                        <AvField name="descriptionEn" required type="textarea" label="Description (En)"/>
                        <AvField name="descriptionRu" required type="textarea" label="Description (Ru)"/>

                        <AvField name="url" type="text" required label="Url" value={props.url}/>

                        <AvField name="menu" type="select" required>
                            <option>Choose menu</option>
                            {
                                props.subMenus.map((item, index) => {
                                    return (
                                        <option value={item.id}>{item.nameUz}</option>
                                    )
                                })
                            }
                        </AvField>

                        <input type="file" accept=".png, .svg, .jpg, .jpeg" onChange={changeInput}/>
                        <div className="photo">
                            {props.photo.length > 0 ? <div className="hover"><span className="span"
                                                                                   onClick={() => props.set_state({photo: ""})}>&times;</span>
                            </div> : ""}
                            <img src={API_PATH + "file/get/" + props.photo} className="w-100 mt-3" alt=""/>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <button type="submit" className="btn btn-outline-secondary">Save</button>
                        <button type="button" className="btn btn-outline-info"
                                onClick={() => props.set_state({open: false})}>Cansel
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>

            <Modal isOpen={props.deleteModal} toggle={() => props.set_state({deleteModal: false})}>
                <ModalHeader>
                    <h3>Rostdan xam o'chirmoqchimisiz ???</h3>
                </ModalHeader>
                <ModalBody className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger" onClick={props.deleteNews}>Ha</button>
                    <button type="button" className="btn btn-warning"
                            onClick={() => props.set_state({deleteModal: false})}>Yo'q
                    </button>
                </ModalBody>
            </Modal>

        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.news.open,
        url: state.news.url,
        subMenus: state.menus.subMenus,
        photo: state.news.photo,
        news: state.news.news,
        selectedIndex: state.news.selectedIndex,
        deleteModal: state.news.deleteModal,
        selectedItem: state.news.selectedItem,
    }
};

export default connect(mapStateToProps, {set_state, getSubMenus, saveNews, saveFile, getNews, deleteNews})(AdminNews);