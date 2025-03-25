import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage'

const Navbar = () => {
  return (
    <div>
      <Link to="/">
      Logo
      </Link>
        <SearchBar />
        <Link to="/about">
          <AboutUsPage />
        </Link>
    </div>
  )
}

export default Navbar