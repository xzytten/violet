import React from 'react';
import '../scss/competence/competence.scss'

const Competence = () => {
    return (
        <div className='competence'>
            <div className='container'>
                <section className='description'>
                    <p className='description__text'>HOW WE DO IT</p>
                    <h2 className='description__title'>Violet is the first to standardize cultural competence.</h2>
                    <p className='description__description'>By translating decades worth of research, we’ve identified the core elements of cultural competence. This clinically-measured framework allows us to objectively benchmark providers across the industry.</p>
                    <p className='description__description'>Now, we can better understand as an industry how we’re doing and provide a baseline for education and improvement.</p>
                </section>
                <img src={require("../img/competence.png")} alt="competence" className='competence__img' />
            </div>
        </div>
    );
};

export default Competence;