import image1 from '../assets/testimonial1.png'
import image2 from '../assets/testimonial2.png'
import image3 from '../assets/testimonial3.png'
import r from '../assets/r_language.png'
import {
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    work8,
    work9,
    work11,
    work12,
    work10
} from '../assets'

export const links = [
    {
        menu: 'Home',
        icon: 'uil uil-estate',
        link: '#home'
    },
    {
        menu: 'About',
        icon: 'uil uil-user',
        link: '#about'
    },
    {
        menu: 'SKills',
        icon: 'uil uil-file-alt',
        link: '#skills'
    },
    {
        menu: 'Qualifications',
        icon: 'uil uil-briefcase-alt',
        link: '#services'
    },
    {
        menu: 'Projects',
        icon: 'uil uil-scenery',
        link: '#portfolio'
    },
    {
        menu: 'Contact',
        icon: 'uil uil-message',
        link: '#contact'
    }
]

export const infoData = [
    {
        title: 'Experience',
        subtitle: '10+ years of experience',
        icon: 'bx bx-award'
    },
    {
        title: 'Completed',
        subtitle: '10+ Projects',
        icon: 'bx bx-briefcase-alt'
    },
]

export const skills = [
    {
        frontend: {

        },
        backend: {

        }
    }
]

export const services = [
    {
        icon: r,
        desc: 'R'
    },
    {
        icon: 'bx bx-mobile-alt',
        desc: 'Project Management'
    },
    {
        icon: 'bx bxs-data',
        desc: 'Python'
    },
    {
        icon: 'bx bx-cog',
        desc: 'Machine Learning'
    },
    {
        icon: 'bx bx-cog',
        desc: 'SQL'
    },
    {
        icon: 'bx bx-cog',
        desc: 'Data Visualization'
    },
    {
        icon: 'bx bx-cog',
        desc: 'French'
    },
    {
        icon: 'bx bx-cog',
        desc: 'English'
    },
    {
        icon: 'bx bx-cog',
        desc: 'Portuguese'
    }
]


export const qualifications = [
    {
        icon: 'uil uil-graduation-cap',
        title: 'Education'
    },
    {
        icon: 'uil uil-briefcase-alt',
        title: 'Experience'
    },
]

export const testimonies = [
    {
        id: 1,
        image: image1,
        title: 'Tuyishime David',
        description: 'Yyour attention to detail and ability to find creative solutions to complex problems never cease to impress me. Your contributions to our team have been invaluable'
    },
    {
        id: 2,
        image: image2,
        title: 'Jules Bienvenue Himbaza',
        description: 'I have been constantly amazed by your ability to quickly understand new technologies. Your hard work and expertise have played a huge role in the success of our projects'
    },
    {
        id: 3,
        image: image3,
        title: 'Eric Ndekezi',
        description: 'Our software development team has been utilizing the skills and expertise turn complex ideas into simple, user-friendly solutions that greatly improve our operations. '
    },
]

export const workCategories = [
    {
        name: 'all'
    }
]

export const works = [
    {
        id: 1,
        image: work1,
        title: 'Stock Portfolio Optimization',
        description: 'This project consists of the development of an R Shiny application for the optimization of stock portfolios.',
        category: 'all',
        link: 'https://www.malonganicolas.com/projects-stock'
    },
    {
        id: 2,
        image: work2,
        title: 'Demand Forecasting',
        description: 'This project consists of the development of an R Shiny application to forecast product demand',
        category: 'all',
        link: 'https://www.malonganicolas.com/projects-sales-forecast'
    },
    {
        id: 3,
        image: work3,
        title: 'Risk Resiliency Assessment',
        description: 'This project consists of the development of an R Shiny application assess supply chain risk resiliency',
        category: 'all',
        link: 'https://www.malonganicolas.com/projects-resiliency'
    }
]