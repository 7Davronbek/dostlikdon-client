import React from 'react';
import {Link} from 'react-router-dom';
import {API_PATH} from "../tools/constants";
const NewsCard = (props) => {
    return (
        <div>
            <section id="news-card">
                <div className="card mb-4 border mx-15">
                    <div className="card-header bg-white d-flex justify-content-center p-0 border-bottom">
                        <img src={API_PATH + "file/get/" + props.src}  className="w-100 photo-object-fit" alt=""/>
                    </div>
                    <div className="card-body">
                        <div className="card-icons">
                            <div className="calendar d-flex align-items-center mr-auto">
                                <span className="cursor-pointer icons icon-calendar mr-2"/>
                                <span className="color-grey">{props.createdAt}</span>
                            </div>
                            <div className="view d-flex align-items-center">
                                <span className="cursor-pointer icons icon-views mr-2 m-top-3"/>
                                <span className="color-grey">{props.count}</span>
                            </div>
                            <div className="message d-flex align-items-center ml-auto">
                                <span className="cursor-pointer icons icon-message mr-2"/>
                                <span className="color-grey">100</span>
                            </div>

                        </div>
                        <h3 className="card-title-text">{props.title}</h3>
                        <p className="description">{props.description}</p>
                        <Link to={'/category/' + props.url + "/news/" + props.newsUrl} className="btn shadow-none px-4 mb-2 text-decoration-none">Batafsil</Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default NewsCard;