import React, { useEffect, useState } from 'react'
import { workCategories, works } from '../../constants'
import WorksItem from './WorksItem'

const Works = () => {

    const [item, setItem] = useState({ name: 'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    const handleclick = (e, index) => {
        e.preventDefault()
        setItem({ name: e.target.textContent })
        setActive(index)
    }

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(works)
        }
        else {
            const newProjects = works.filter((project) => {
                return project.category === item.name
            })
            setProjects(newProjects)
        }
    }, [item])

    return (
        <>
            <div className="work__container container grid">
                {
                    projects.map((work, index) => (
                        <WorksItem work={work} key={index} />
                    ))
                }
            </div>
        </>
    )
}

export default Works