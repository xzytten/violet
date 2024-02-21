import React from 'react';
import '../scss/health-system/health-system.scss';
import '../scss/health-system/media-health-system.scss';
const HealthSystem = () => {
    return (
        <div className='system'>
            <div className='container'>
                <section className='system__subscribe'>
                    <p className='system__subscribe__description'>Subscribe to Violet’s newsletter and receive our inclusive language and communication guide.</p>
                    <article>
                        <p className='system__subscribe__p'>How to increase patient retention.</p>
                        <p className='system__subscribe__p'>Getting started with inclusivity.</p>
                        <p className='system__subscribe__p'>And more.</p>
                    </article>
                    <a href="!#" className='system__subscribe__btn'>Subscribe</a>
                </section>
                <section className='system__need'>
                    <div>
                        <p className='system__need__text'>THE NEED</p>
                        <h2 className='system__need__health'>The health system isn't equitable for diverse patients.</h2>
                        <p className='system__need__p'>Medical racism. Severe distrust in medical providers. Misdiagnoses. Lack of access to coverage. These are just a few barriers culturally diverse patients face. We believe every human deserves equitable health care. That's why we built Violet.</p>
                    </div>
                    <img src={require("../img/need.png")} alt="" className='system__need__img' />
                </section>
            </div>
        </div>
    );
};

export default HealthSystem;