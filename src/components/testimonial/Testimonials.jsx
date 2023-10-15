import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper'

import './testimanial.css'
import { testimonies } from '../../constants'

const Testimonials = () => {
    return (
        <></>
        // <section className="testimonial section" id='testimonial'>
        //     <h2 className="section__title">My colleague says</h2>
        //     <p className="section__subtitle">Testimonials</p>

        //     <Swiper
        //         className="testimonial__container"
        //         loop="true"
        //         grabCursor="true"
        //         spaceBetween={24}
        //         pagination={{
        //             clickable: true,
        //         }}
        //         breakpoints={{
        //             576: {
        //                 slidesPerView: 2,
        //             },
        //             768: {
        //                 slidesPerView: 2,
        //                 spaceBetween: 48,
        //             }
        //         }}
        //         modules={[Pagination]}>
        //         {
        //             testimonies.map(({ id, image, title, description }) => (
        //                 <SwiperSlide
        //                     className='testimonial__card' key={id}>
        //                     <img
        //                         src={image}
        //                         alt="testimonial"
        //                         className='testimonial__img' />
        //                     <h3 className="testimonial__name">{title}</h3>
        //                     <p className="testimonial__description">{description}</p>
        //                 </SwiperSlide>
        //             ))
        //         }
        //     </Swiper>
        // </section>
    )
}

export default Testimonials
