import React from 'react'
import MyDailyAlmanac from '../assets/MyDailyAlmanac.png'

const Project = ({project}) => {

  return (
    <div>
    <h1>{project.title}</h1>
    <a href={project.link}>
    <img src={project.image} alt={project.alt}/>
    </a>
    </div>
  )
}

export default Project