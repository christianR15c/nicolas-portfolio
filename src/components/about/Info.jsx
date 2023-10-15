import React from 'react'
import { infoData } from '../../constants'
import './about.css'

const Info = () => {
    return (
        <div className='about__info grid'>
            {
                infoData.map((info, index) => (
                    <div className="about__box" key={index}>
                        <i class={`${info.icon} about__icon`}></i>
                        <h3 className="about__title">{info.title}</h3>
                        <span className="about__subtitle">{info.subtitle}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Info