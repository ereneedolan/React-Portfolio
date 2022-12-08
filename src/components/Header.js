import React from 'react'
import Navigation from './Navigation';

const Header = ({currentPage, setCurrentPage}) => {
  return (
    <header>
        <h1>Eileen Dolan</h1>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </header>
  )
}

export default Header