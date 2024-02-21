import React from 'react';
import '../scss/solution/solution.scss'
const Solution = () => {
    return (
        <div className='solution'>
            <p className='solution__text'>THE SOLUTION</p>
            <h2 className='solution__title'>Delivering inclusive health care is easier than ever with Violet.</h2>
            <section className='solution__cards'>
                <article className='credentialing'>
                    <img src={require("../img/credentialing.png")} className="credentialing__img" v alt="" />
                    <figcaption className='credentialing__text' >Credentialing</figcaption>
                    <p className='credentialing__description'>We benchmark the cultural competence of your care team and use those insights to help match patients to the right clinician.</p>
                    <span className='line'></span>
                    <p className='credentialing__ending'>Learn how we leverage insights for better patient-matching.</p>
                </article>
                <article className='upskilling'>
                    <img src={require("../img/upskilling.png")} alt="" className='upskilling__img' />
                    <figcaption className='upskilling__text'>Upskilling</figcaption>
                    <p className='upskilling__description'>We believe every clinician can provide inclusive care, that's why we teach and upskill cultural competence.</p>
                    <span className='line'></span>
                    <p className='upskilling__ending'>Learn how we deliver best-in-class inclusive care education.</p>
                </article>
            </section>
        </div>
    );
};

export default Solution;