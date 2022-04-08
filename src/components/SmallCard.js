import React from 'react';

const SmallCard = (props) => {
    return (
        <div className="card cardcha h-100 bg-white">
            <div className="card-header d-flex justify-content-center p-0 border-0 bg-white">
                <img src={props.rasm} className="" alt="Error"/>
            </div>

            <div className="card-body">
                <h6 className="mb-3">{props.head}</h6>
                <div className="d-flex my-2 text-black-50">
                    <img src="/image/packega.svg" className="mr-1" alt="Error"/>
                    <p className="mr-3 mb-0">16:48 / 12.11.20</p>
                    <img src="/image/koz.svg" className="mr-1" alt="Error"/>
                    <p className="mr-3 mb-0">321</p>
                    <img src="/image/sms.svg" className="mr-1" alt="Error"/>
                    <p className="mb-0">100</p>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;