import React, { useState } from 'react'

import './navbar.css'
import { links } from '../../constants'

const Navbar = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    const [toggle, setToggle] = useState(false)

    const [activeNav, setActiveNav] = useState(false)

    return (

        <header className='header'>
            <nav className='nav container'>
                <a href="/" className="nav__logo">Nicolas</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {
                            links.map((link, index) => (
                                <li key={index} className='nav__item'>
                                    <a
                                        href={`${link.link}`}
                                        onClick={() => setActiveNav(`#${link.link}`)}
                                        className={activeNav === `#${link.link}` ? 'nav__link active-link' : 'nav__link'}
                                    >
                                        <i className={`${link.icon} nav__icon`}></i>
                                        {link.menu}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <i className='uil uil-times nav__close' onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className='uil uil-apps'></i>
                </div>

            </nav>
        </header>
    )

}


export default Navbar