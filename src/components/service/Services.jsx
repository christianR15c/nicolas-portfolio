import React from 'react'
import { services } from '../../constants'
import './services.css'

const Services = () => {
    return (
        <section className="services section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My professional</span>

            <div className="services__container container">
                {
                    services.map((service, index) => (
                        <div className='services__content' key={index}>
                            <p className='services__subtitle'>{service.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services


