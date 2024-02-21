import React from 'react';
import '../scss/footer/footer.scss';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <section className='upper-block'>
                    <article className='subscribe'>
                        <h2 className='subscribe__title'>Get our newsletter.</h2>
                        <p className='subscribe__description'>Violet's health equity newsletter includes the latest industry news, cultural competence education, and company updates.</p>
                        <button className='subscribe__button'>Subscribe</button>
                    </article>
                    <article className='card'>
                        <img src={require("../img/footer.png")} alt="" className='card__img' />
                        <div className='card__info'>
                            <p className='card__info__text'>BLOG</p>
                            <figcaption className='card__info__title'>Announcing Violet’s 2023 Clinical Review Board.</figcaption>
                            <a href='!#' className='card__info__link'>Read now</a>
                        </div>
                    </article>
                </section>
                <span className='footer__line'></span>
                <section className='lower'>
                    <p className='lower__left'>Powering culturally competent care at scale.</p>
                    <article className='footer__info'>
                        <div className='footer__info__icos'>
                            <img src={require('../img/in.png')} alt="" className='footer__info__icos__ico' />
                            <img src={require('../img/twitter.png')} alt="" className='footer__info__icos__ico' />
                        </div>

                        <article className='block1'>
                            <h3 className='block__title'>What we do</h3>
                            <p className='block__text'>Credentialing</p>
                            <p className='block__text'>Upskilling</p>
                            <p className='block__text'>Customers</p>
                            <p className='block__text'>Log In</p>
                        </article>

                        <article className=' block2'>
                            <h3 className='block__title'>About us</h3>
                            <p className='block__text'>Our mission</p>
                            <p className='block__text'>Our team</p>
                            <p className='block__text'>Our educators</p>
                            <p className='block__text'>Careers</p>
                            <p className='block__text'>Blog</p>
                            <p className='block__text'>Newsletter</p>
                        </article>

                        <article className='block3'>
                            <h3 className='block__title'>Contact</h3>
                            <p className='block__text'>Press</p>
                            <p className='block__text'>Contact</p>
                            <p className='block__text'>Privacy</p>
                            <p className='block__text'>Terms of service</p>
                        </article>

                    </article>
                </section>
            </div>
        </div>
    );
};

export default Footer;