import React from 'react';
import '../scss/organizations/organizations.scss';

const Organizations = () => {
    return (
        <div className='organizations'>
            <div className='container'>
                <span alt='' className='organizations__line'></span>
                <p className='organizations__title'>Powering inclusive care for the industry's leading organizations.</p>
                <div className='organizations__img-container'>
                    <img src={require("../img/org1.png")} alt="" className='organizations__img-1' />
                    <img src={require("../img/org1.png")} alt="" className='organizations__img-1' />
                    <img src={require("../img/org2.png")} alt="" className='organizations__img-2' />
                    <img src={require("../img/org2.png")} alt="" className='organizations__img-2' />
                </div>
            </div>
        </div>
    );
};

export default Organizations;