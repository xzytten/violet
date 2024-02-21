import React from 'react';
import '../scss/team-help/team-help.scss'

const TeamHelp = () => {
    return (
        <div className='team-help'>
            <div className='container'>
                <h2 className='team-help__title'>See how Violet can help your care delivery team.</h2>
                <section className='cards'>
                    <article className='card1'>
                        <h3 className='card__title'>I’m the CEO of a health care organization.</h3>
                        <p className='card__description'>I want my patients to know my org is committed to delivering inclusive care.</p>
                    </article>
                    <article className='card2'>
                        <h3 className='card__title'>I’m a DEI strategy leader.</h3>
                        <p className='card__description'>I want to ensure my provider team is getting the best inclusivity training.</p>
                        <span className='card__arrow'></span>
                    </article>
                    <article className='card3'>
                        <h3 className='card__title'>I'm a provider engagement director.</h3>
                        <p className='card__description'>I want to engage and retain my providers with more benefits.</p>
                        <span className='card__arrow'></span>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default TeamHelp;