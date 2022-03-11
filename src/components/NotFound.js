import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 my-5 text-center">
                        <img src="/404.png" alt="" className='w-100'/>

                        <h4>Bunday sahifa mavjud emas!</h4>

                        <Link to='/'>Bosh sahifaga o'tish</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;