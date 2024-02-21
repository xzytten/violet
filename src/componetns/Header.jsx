import React from 'react';
import '../scss/header/header.scss'
// import '../scss/header/media-header.scss'
const Header = () => {
    return (
        <header className='header'>
            <section className='header__left-bar'>
                <a href="!#" className='header__left-bar__link'>What we do</a>
                <a href="!#" className='header__left-bar__link'>Our customers</a>
                <a href="!#" className='header__left-bar__link'>About us</a>
                <a href="!#" className='header__left-bar__link'>Blog</a>
            </section>
            <section className='header__right-bar'>
                <a href="!#" className='header__right-bar__link'>Log in</a>
                <button className='header__right-bar__demo'>Get a demo<span className='header__right-bar__demo__arrow'></span></button>
            </section>
        </header>
    );
};

export default Header;