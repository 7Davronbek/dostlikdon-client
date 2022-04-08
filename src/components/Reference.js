import React from 'react';

const Reference = () => {
    return (
        <div className="gradient d-flex justify-content-between align-items-center">
            <img src="/image/check.svg" alt="Error"/>
            <h4 className="text">Shikoyatlar mavjudmi? <br/>
                onlayn tarzda yuboring
            </h4>
            <button type="button" className="btn btn-success text-white">Murijat yuborish</button>
            <img src="/image/planshet.svg" alt="Error"/>
        </div>
    );
};

export default Reference;