import React from 'react'

const WorksItem = ({ work }) => {
    return (
        <div className="work__card">
            <img src={work.image} alt="work image" className='work__img' />
            <h3 className="work__title">{work.title}</h3>
            <a href={work.link} className="work__button" target='_blank'>
                Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
            </a>
        </div>
    )
}

export default WorksItem