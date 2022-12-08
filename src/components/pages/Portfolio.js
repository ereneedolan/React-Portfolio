import React from 'react'
import MyDailyAlmanac from '../../assets/MyDailyAlmanac.png'
import SportSpot from '../../assets/SportSpot.png'
import Project from '../Project'

const Portfolio = () => {
  const projects = [{title: 'Project 1', link: 'https://github.com/ereneedolan/my-daily-almanac',  image: MyDailyAlmanac, alt: 'Homepage of My Daily Almanac Project'}, {title: 'Project 2', link: 'https://github.com/ereneedolan/my-daily-almanac',  image: SportSpot, alt: 'Homepage of My Daily Almanac Project'},{title: 'Project 3', link: 'https://github.com/ereneedolan/my-daily-almanac',  image: MyDailyAlmanac, alt: 'Homepage of My Daily Almanac Project'}]

  return (
    <div>{projects.map(project => (
     <Project project={project}/>
    ))}</div>
  )
}
//array of data and map through and make structure for each one should look like 
export default Portfolio