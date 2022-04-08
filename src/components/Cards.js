import React from 'react';
import {Link} from "react-router-dom";

const Cards = (props) => {
    return (
        <div className="card cards h-100 bg-white">
            <div className="card-header d-flex justify-content-center p-0 border-0 bg-white">
                <img src={props.rasm} className="w-100" alt="Error"/>
            </div>
            <div className="card-body">
                <div className="d-flex my-2 text-black-50">
                    <img src="/image/packega.svg" className="mr-1" alt="Error"/>
                    <p className="mr-3 mb-0">{props.time}</p>
                    <img src="/image/koz.svg" className="mr-1" alt="Error"/>
                    <p className="mr-3 mb-0">{props.count}</p>
                </div>
                <h6>{props.head}</h6>
                <p>{props.lorem}</p>
            </div>
            <div className="card-footer border-0 bg-white">
                <Link to={"/yangiliklar/"+props.url} className="btn btn-outline-success">Batafsil</Link>
            </div>
        </div>
    );
};

export default Cards;