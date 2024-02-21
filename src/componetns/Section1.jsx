import React from 'react';
import '../scss/section1/section1.scss'

const Section1 = () => {
    return (
        <div className='section1'>
            <div className='container'>
                <section className='description'>
                    <h2 className='description__title'>Deliver more inclusive care.</h2>
                    <p className='description__motto'>Violet powers culturally competent care at scale.</p>
                    <button className='description__button'>Power your team</button>
                </section>
                <section className='catalogue'>
                    <img src={require("../img/section1-1.png")} alt="img1" className='catalogue-img' />
                    <div className='catalogue__group-img'>
                        <img src={require("../img/section1-2.png")} alt="img2" className='catalogue-img' />
                        <img src={require("../img/section1-3.png")} alt="img3" className='catalogue-img' />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Section1;